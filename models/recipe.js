const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: { 
        type: String,
    },    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: {
        type: String
    }
});


const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    ingredients: {
        type: [],
        required: true
    },
    instructions: {
        type: [],
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: {
        type: String
    },
    comments: [commentSchema]
});

module.exports = mongoose.model('Recipe', recipeSchema);