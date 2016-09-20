var User = require('../models/user').User;
var express = require('express');

exports.get = function (req, res) {
    res.render('personal', {user: req.user});
};