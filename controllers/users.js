const User = require('../models/user')
const Asset = require('../models/asset')

function index(req, res) {
  User.find(req.user)
        .populate("assets")
        .exec((err, user) => {
            Asset.find({user: req.user._id}, function (err, assets) {
                res.render('users/index', {user: req.user, assets});
                
            })
        })
}

module.exports = {
  index
};