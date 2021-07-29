const User = require('../models/user')
const Asset = require('../models/asset')

function index(req, res) {
    User.find(req.user)
        .populate("assets")
        .exec((err, user) => {
            Asset.find({}, function (err, assets) {
                res.render('assets/index', {user: req.user, assets});
                
            })
        })

}

const newAsset = (req, res) => {
    res.render('assets/new', {user: req.user});
}

const createAsset = (req, res) => {

    const asset = new Asset({
        user: req.user,
        type: req.body.type,
        nickname: req.body.nickname,
        price: req.body.price,
        income: req.body.income,
        expenses: req.body.expenses,
        details: req.body.details,
    })

    asset.save(function(err) {
        if (err) return res.redirect('/assets/new');
        res.redirect(`/assets`);
      })
}

module.exports = {
    index,
    new: newAsset,
    create: createAsset
};