var express = require('express');
var router = express.Router();
var recipesCtrl = require('../controllers/recipes');

router.get('/', recipesCtrl.index);
router.get('/new', recipesCtrl.new);
router.delete('/:id', recipesCtrl.delete);
router.get('/myRecipes', recipesCtrl.myRecipes);
router.get('/:id',  recipesCtrl.show);
router.post('/', recipesCtrl.create);

module.exports = router;