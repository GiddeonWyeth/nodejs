var User = require('./user').User;
var mongoose = require('mongoose');

var ClientUser = User.discriminator('User', new mongoose.Schema({url: String}));

exports.ClientUser = mongoose.model('User', schema);