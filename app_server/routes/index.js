var express = require('express');
var router = express.Router();
const controle = require('../controllers/controller');

/* GET home page. */
router.get('/', controle.home);

router.get('/aprenda-hiragana', controle.aprendaKatakana);


module.exports = router;
