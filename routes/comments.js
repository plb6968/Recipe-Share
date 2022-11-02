const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/recipes/:id/comments', ensureLoggedIn, commentsCtrl.edit);
router.post('/recipes/:id/comments', ensureLoggedIn, commentsCtrl.create);
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);
router.put('/recipes/:id/comments', ensureLoggedIn, commentsCtrl.update)

module.exports = router;
