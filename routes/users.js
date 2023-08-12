var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const response = {
        code: 1,
        message: 'Hello world'
    };
    res.send(response);
});

module.exports = router;