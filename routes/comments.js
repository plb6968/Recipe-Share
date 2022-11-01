const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/recipes/:id/comments', ensureLoggedIn, commentsCtrl.create);
router.delete('/comments/:id', commentsCtrl.delete);

module.exports = router;
