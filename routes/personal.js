exports.get = function (req, res) {
    res.render('personal', {user: req.user});
};