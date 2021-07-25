const User = require('../models/user')
const Asset = require('../models/asset')

module.exports = {
    index
};

function index(req, res) {
    User.findById(req.params.id)
        .populate("assets")
        .exec((err, user) => {
            Asset.find({
                _id: { $nin: user.assets}
            }, (err, assets) => {
                console.log(assets);
                res.render('user/assets')
            })
        })
}