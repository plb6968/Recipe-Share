const Recipe = require('../models/recipe');

module.exports = {
    create,
    delete: deleteComment
};

function create(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        console.log(recipe);
        recipe.comments.push(req.body);
        recipe.save(function(err) {
            res.redirect(`/recipes/${recipe._id}`);
        });
    });
}

function deleteComment(req, res) {
    Recipe.findOne(
        { 'comments._id': req.params.id, 'comments.user': req.user._id },
        function(err, recipe) {
            if (!recipe || err) return res.redirect(`/recipes/${recipe._id}`);
            recipe.comments.remove(req.params.id);
            recipe.save(function(err) {
                res.redirect(`/recipes/${recipe._id}`);
            });
        }
    );
}