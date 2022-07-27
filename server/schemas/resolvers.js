const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe, RecipeComment, Gear, GearComment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async ( parent, args, context ) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('savedRecipes')
                    .populate('savedGear');

                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        users: async() => {
            return User.find()
                .select('-__v -password')
                .populate('savedRecipes');
        },
        recipes: async() => {
            return Recipe.find()
                .populate('recipeComment');
        },
        gear: async() => {
            return Gear.find()
                .populate('gear');
        },
        recipeCategory: async( parent, { category } ) => {
            return Recipe.find({ category })
                .populate('recipeComment');
        },
        singleRecipe: async( parent, { _id } ) => {
            return Recipe.findOne({ _id })
                .populate('recipeComment');
        },
        singleGear: async( parent, { _id } ) => {
            return Gear.findOne({ _id })
                .populate('gearComment');
        },
        recipeCommentUser: async( parent, args, context ) => {
            if (context.user) {
                const commentData = await RecipeComment.find ({ username: context.user.username})
                    .populate('recipeId')    

                    return commentData;
                }
                throw new AuthenticationError('Not logged in');
        },
        savedRecipes: async( parent, args, context ) => {
            if (context.user) {
                const recipeData = await User.findOne ({ _id: context.user._id })
                    .populate('savedRecipes')    

                    return recipeData;
                }
                throw new AuthenticationError('Not logged in');
        },
        savedGear: async( parent, args, context ) => {
            if (context.user) {
                const gearData = await User.findOne ({ _id: context.user._id })
                    .populate('savedGear')    

                    return gearData;
                }
                throw new AuthenticationError('Not logged in');
        },
        gearCommentUser: async( parent, args, context ) => {
            if (context.user) {
                const commentData = await GearComment.find ({ username: context.user.username})
                    .populate('gearId')    

                    return commentData;
                }
                throw new AuthenticationError('Not logged in');
        },
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
        addRecipe: async (parent, args ) => {
            const recipe = await Recipe.create(args);

            return recipe;
        },
        addGear: async (parent, args ) => {
            const gear = await Gear.create(args);

            return gear;
        },
        addRecipeComment: async ( parent, { recipeId, commentTitle, commentText }, context ) => {
            if (context.user) {
                const recipeComment = await RecipeComment.create({ recipeId, commentTitle, commentText, username: context.user.username});

                await Recipe.findByIdAndUpdate(
                    { _id: recipeId},
                    { $push: { recipeComment: [recipeComment._id]}},
                    { new: true }
                )
                .populate('recipeId');

                return recipeComment       
            }
            throw new AuthenticationError('You need to be logged in to leave a comment!')
        },
        saveRecipe: async ( parent, { _id }, context) => {
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedRecipes: [_id]}},
                    { new: true }
                ).populate('savedRecipes');
                
                return updatedUser
                }
            throw new AuthenticationError('Please login')
        },
        saveGear: async ( parent, { _id }, context) => {
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedGear: [_id]}},
                    { new: true }
                ).populate('savedGear');
                
                return updatedUser
                }
            throw new AuthenticationError('Please login')
        },
        addGearComment: async ( parent, { gearId, commentTitle, commentText }, context ) => {
            if (context.user) {
                const gearComment = await GearComment.create({ gearId, commentTitle, commentText, username: context.user.username});

                await Gear.findByIdAndUpdate(
                    { _id: gearId},
                    { $push: { gearComment: [gearComment._id]}},
                    { new: true }
                )
                .populate('gearId');

                return gearComment       
            }
            throw new AuthenticationError('You need to be logged in to leave a comment!')
        },
        removeRecipe: async ( parent, { _id }, context) => {
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { $in: [{ savedRecipes: { _id }}]}},
                    { new: true }
                ).populate('savedRecipes');
                
                return updatedUser
                }
            throw new AuthenticationError('Please login')
        },
        removeRecipeComment: async ( parent, { _id }) => {
                const updatedRecipeComments = await RecipeComment.findByIdAndUpdate(
                    { _id: _id },
                    { deleteOne: { _id }},
                )
                return updatedRecipeComments
        },
        deleteRecipe: async ( parent, { _id }) => {
            const deletedRecipe = await Recipe.deleteOne(_id);
            
            return deletedRecipe;
        },
        updateRecipeComment: async ( parent, { _id }) => {
            const updatedRecipe = await RecipeComment.findByIdAndUpdate(
                { _id: _id },
                { $push: { recipeId: {_id}}},
            ).populate('Recipe')

                return updatedRecipe
        }
    },
};


module.exports = resolvers;