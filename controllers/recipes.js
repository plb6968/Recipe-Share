const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe,
    create,
    show
}

function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render('recipes/index', {title: 'All Recipes', recipes})
    });
}

function show(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        res.render('recipes/show', { title:'Recipe Details', recipe });
    });
}

function newRecipe(req, res) {
    res.render('recipes/new', {title: 'Add a New Recipe'});
}

function create(req, res) {
    console.log('create triggered');
    const recipe = new Recipe(req.body);
    console.log(recipe);
    recipe.save(function(err) {
        res.redirect(`/recipes/${recipe._id}`);
    })
}