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
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);