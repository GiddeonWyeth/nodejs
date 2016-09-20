var User = require('../models/user').User;
var express = require('express');

/* GET home page. */
exports.get = function (req, res) {
    res.render('login', {title: 'Express'});
};

exports.post = function (req, res, next) {
    var username = req.body.username;
    var password = req.body.username;
    var type = req.body.type;

    User.authorize(username, password, type, function (err, user) {
        if(err) return next(err);

        req.session.user = user._id;
        res.send({});
    });

};