const Recipe = require('../models/recipe');

module.exports = {
    create,
    delete: deleteComment,
    edit,
    update
};

function edit(req, res) {
    console.log('Show Triggered');
    Recipe.findOne({'comments._id': req.params.id}, function(err, recipe) {
        const comment = recipe.comments.id(req.params.id);
        res.render('recipes/edit', { title: 'Comment Details', comment });
    });
}

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

function update(req, res) {
    Recipe.findOne({'comments._id': req.params.id}, function(err, recipe) {
        const comment = recipe.comments.id(req.params.id);
        if (!comment.user.equals(req.user._id)) return res.redirect(`/recipes/${recipe._id}`);
        comment.comment = req.body.comment;
        recipe.save(function(err) {
            res.redirect(`/recipes/${recipe._id}`);
        });
    });
}
