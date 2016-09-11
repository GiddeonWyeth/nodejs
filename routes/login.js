var async = require('async');
var User = require('../models/user').User;
var express = require('express');
var router = express.Router();

/* GET home page. */
exports.get = function (req, res) {
    res.render('login', {title: 'Express'});
};
console.log(User.find({}));
exports.post = function (req, res, next) {
    var username = req.body.username;
    var password = req.body.username;

    async.waterfall([
        function (callback) {
            User.findOne({username: username}, callback);
        },
        function (user, callback) {
            if (user) {
                if (user.checkPassword(password)) {
                    callback(null, user);
                } else {
                    next(err);
                }
            } else {
              user = new User({
                    username: username,
                    password: password,
                    type: 'user'
                });

                user.save(function (err) {
                    if (err) return next(err);
                    callback(null, user)
                });
            }
        }
    ], function (err, user) {
        if (err) return next(err);
        req.session.user = user._id;
        res.end();
    });

};