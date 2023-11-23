const express = require('express');
const { isAuthenticated } = require('../middlewares/auth');
const router = express.Router();

router.get('/home', function (req, res, next) {
    res.render('index', {
        title: 'Welcome to Midgard Static Web Pages',
        isAuthenticated: req.session.isAuthenticated,
        username: req.session.account?.username,
    });
    next()
});


router.all('*', isAuthenticated);


module.exports = router;