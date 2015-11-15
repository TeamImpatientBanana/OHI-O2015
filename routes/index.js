var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Bro Dog'
    });
});

router.get('/chat', function(req, res, next) {
    res.render('chat', {
        title: 'Bro Dog | Chat'
    });
});

module.exports = router;
