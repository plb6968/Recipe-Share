const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe
}

function index(req, res) {
    Recipe.find({}, function(err, movies) {
        res.render('recipes/index', {title: 'All Recipes'})
    });
}

function newRecipe(req, res) {
    res.render('recipes/new', {title: 'Add a New Recipe'});
}

