const User = require('../models/user')
const Asset = require('../models/asset')

function index(req, res) {
    // User.findById(req.params.id)
    //     .populate("assets")
    //     .exec((err, user) => {
    //         Asset.find({
    //             _id: { $nin: user.assets}
    //         }, (err, assets) => {
    //             console.log(assets);
    //             res.render('user/assets')
    //         })
    //     })

    res.render('assets/index');
}

const newAsset = (req, res) => {
    res.render('assets/new');
}

const createAsset = (req, res) => {

    const asset = new Asset({
        user: req.user,
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