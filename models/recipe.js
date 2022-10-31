const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);