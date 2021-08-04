const User = require('../models/user')
const Asset = require('../models/asset')


// function index(req, res) {
//     User.find(req.user)
//         .populate("assets")
//         .exec((err, user) => {
//             Asset.find({
//                 user:  req.user.id
//             }, (err, assets) => {
//                 res.render('users/index', {user: req.user, assets})
//             })
//         })
// }

function index(req, res) {
    User.find(req.user)
        .populate("assets")
        .exec((err, user) => {
            Asset.find({
                user:  req.user.id
            }, (err, assets) => {
                let totalincome = 0;
                let totalexpenses = 0;

                assets.forEach((a) => {
                    if (a.type === 'Stock') {
                        return
                    } else {
                        totalincome += a.income;
                        totalexpenses += a.expenses;
                    }
                })

                User.findByIdAndUpdate(req.user.id, {
                    cashFlow: totalincome-totalexpenses,

                }, () => {
                    console.log(req.user);            
                })

                res.render('users/index', {user: req.user, assets});
            })
        })
}

module.exports = {
  index
};