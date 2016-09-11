var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/login', require('./login').get);
// // router.post('/login', require('./login').post);
// router.get('/users', require('./users').get);

module.exports = router;
