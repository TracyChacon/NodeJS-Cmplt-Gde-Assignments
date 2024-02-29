const path = require('path');

const express = require('express');

const router = express.Router();

const names = [];
const addNameObj = {
    pageTitle: 'Add Name Form',
    names: names,
    path: '/'
}
const usersObj = {
    pageTitle: 'User Names',
    names: names,
    path: '/users'
}

router.get('/users', (req, res) => {
    res.render('user-names', usersObj);
});

router.post('/', (req, res) => {
    names.push({userName: req.body.name});
    res.redirect('/users');
});

router.get('/', (req, res) => {
        res.render('add-name', addNameObj)
});

exports.routes = router;