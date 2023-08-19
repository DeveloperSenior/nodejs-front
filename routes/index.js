var express = require('express');
var router = express.Router();
const userService = require('../services/user.service');
var jwt = require('jsonwebtoken');
const { auth } = require('../auth/middleware');

const LOGIN_TITLE = 'Iniciar sesión';
const USERS_TITLE = 'Usuarios!';

/* GET home page. */

router.get('/login', function(req, res, next) {
    res.render('login', { title: LOGIN_TITLE });
});

router.get('/logout', function(req, res, next) {

});

router.get('/home', auth, function(req, res, next) {
    res.render('index', { title: LOGIN_TITLE });
});

router.get('/users', auth, async(req, res, next) => {
    const usersList = await userService.findUsers();
    res.render('user/users', { title: USERS_TITLE, users: usersList });
});

router.post('/login', (req, res) => {

    let userLogin = req.body;
    let { username, password } = userLogin;
    if (username === 'admin' && password === 'admin123') {
        var token = jwt.sign({ user: userLogin }, 't0qv3n$3gur0');
        res.cookie("appTag", token);
        res.redirect('/home');
    } else {
        res.render('login', { title: LOGIN_TITLE, error: 'El usuario o clave no son validos' });
    }

});

module.exports = router;