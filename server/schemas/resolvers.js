const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async( parent, args, context ) => {
            if (context.user) {
                const UserData = await User.findOne({ _id: context.user._id })
                    .select('-__v - password')
                    .populats('posts')

                return UserData;
            }
            throw new AuthenticationError('Not logged in');
        },
        users: async() => {
            return User.find()
                .select('-__v -password')
        },
        posts: async() => {
            return Post.find()
        },
        recipes: async() => {
            return Recipe.find()
        },
        recipeCategory: async( parent, { category } ) => {
            return Recipe.find({ category })
        } 
    },


    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('User not found');
            }
            const correctPW = await user.isCorrectPassword(password);

            if (!correctPW) {
                throw new AuthenticationError('Incorrect password!');
            }
            const token = signToken(user);
            return { token, user };
        },
        addPost: async (parent, args, context ) => {
            if (context.user) {
                const post = await Post.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id},
                    { $push: { posts: post._id} },
                    { new: true }
                )
                return post;
            }
            throw new AuthenticationError('You must be logged in!');
        },
        addRecipe: async (parent, args ) => {
            const recipe = await Recipe.create(args);

            return recipe;
        },
        // saveRecipe: async ( parent, { recipe }, context) => {
        //     if(context.user) {
        //         const updatedUser = await User.findByIdAndUpdate(
        //             { _id: context.user._id },
        //             { $addtoSet: { savedRecipes: recipe }},
        //             { new: true }
        //         )
        //         return updatedUser
        //         }
            //throw new AuthenticationError('Please login')
        // }
    }
};

module.exports = resolvers;