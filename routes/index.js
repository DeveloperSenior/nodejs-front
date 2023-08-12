var express = require('express');
var router = express.Router();
const userService = require('../services/user.service')

const LOGIN_TITLE = 'Iniciar sesión';
const USERS_TITLE = 'Usuarios!';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('login');
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: LOGIN_TITLE });
});

router.get('/home', function(req, res, next) {
    res.render('index', { title: LOGIN_TITLE });
});

router.get('/users', async(req, res, next) => {
    const usersList = await userService.findUsers();
    res.render('user/users', { title: USERS_TITLE, users: usersList });
});

router.post('/login', (req, res) => {

    let userLogin = req.body;
    let { username, password } = userLogin;
    if (username === 'admin' && password === 'admin123') {
        res.redirect('/home');
    } else {
        res.render('login', { title: LOGIN_TITLE, error: 'El usuario o clave no son validos' });
    }

});

module.exports = router;