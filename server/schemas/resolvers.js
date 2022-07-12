const { AuthenticationError } = require('apollo-server-express');
const { User, RecipeComment, Recipe } = require('../models');
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
        recipes: async() => {
            return Recipe.find();
        },
        recipeCategory: async( parent, { category } ) => {
            return Recipe.find({ category });
        },
        singleRecipe: async( parent, { _id } ) => {
            return Recipe.findOne({ _id });
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
        addRecipeComment: async (parent, args, context) => {
            if (context.user) {
                const recipeComment = await RecipeComment.create({ ...args, username: context.user.username});

                await User.findByIdAndUpdate(
                    { _id: context.user._id},
                    { $addToSet: { recipeComment: RecipeComment._id} },
                    { new: true }
                )
                return recipeComment;
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