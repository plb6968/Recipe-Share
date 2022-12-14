var express = require('express');
var router = express.Router();
var recipesCtrl = require('../controllers/recipes');

router.get('/', recipesCtrl.index);
router.get('/new', recipesCtrl.new);
router.get('/myRecipes', recipesCtrl.myRecipes);
router.get('/:id',  recipesCtrl.show);
router.post('/', recipesCtrl.create);
router.delete('/:id', recipesCtrl.delete);

module.exports = router;