var jwt = require('jsonwebtoken');

const auth = ((req, res, next) => {
    const { appTag } = req.cookies;
    console.log('token: ', appTag);
    if (appTag) {
        jwt.verify(appTag, 't0qv3n$3gur0', (err, decoded) => {
            if (err) {
                console.error(err);
                res.redirect('/login');
            }
        });
    } else {
        console.log('Sin token: ' + appTag);
        res.redirect('/login');
    }
    next();
});

const logout = ((req, res) => {

});

module.exports = { auth, logout };