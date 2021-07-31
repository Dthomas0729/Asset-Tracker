const User = require('../models/user')
const Asset = require('../models/asset')

function index(req, res) {
    User.find(req.user)
        .populate("assets")
        .exec((err, user) => {
            Asset.find({user: req.user._id}, function (err, assets) {
                res.render('assets/index', {user: req.user, assets});
                
            })
        })

}

const newAsset = (req, res) => {
    res.render('assets/new', {user: req.user});
}

const assetForm = (req, res) => {
    let type = req.body.type;
    console.log(type, req.body.type)

    res.redirect(`/assets/new/${type}`);
    // if (type === 'Company') {
    //     res.render('/assets/new/company', {user: req.user, type})

    // } else if (type === 'Property') {
    //     res.redirect('/assets/new/property', {user: req.user, type})

    // } else {
    //     res.redirect('/assets/new/stock', {user: req.user, type})

    // };

}

const type = (req, res) => {
    res.render(`assets/asset-forms/${req.params.type}`, {user: req.user})
}

const createAsset = (req, res) => {

    const asset = new Asset({
        user: req.user,
        type: req.params.type,
        nickname: req.body.nickname,
        price: req.body.price,
        income: req.body.income,
        expenses: req.body.expenses,
        details: req.body.details,
    })
    console.log(asset);

    asset.save(function(err) {
        if (err) return res.redirect('/assets/new');
        res.redirect(`/assets`);
      })
}

const updateForm = (req, res) => {

    Asset.findById(req.params.id, (err, asset) => {
        res.render('assets/update', {user: req.user, asset});
    });
    
}

const updateList = (req, res) => {
    User.find(req.user)
        .populate("assets")
        .exec((err, user) => {
            Asset.find({user: req.user._id}, function (err, assets) {
                res.render('assets/updateList', {user: req.user, assets});
                
            })
        })
    };

const updateAsset = (req, res) => {
    Asset.findByIdAndUpdate(req.params.id, 
        {
            user: req.user,
            nickname: req.body.nickname,
            price: req.body.price,
            income: req.body.income,
            expenses: req.body.expenses,
            details: req.body.details,
        }, (err) => {
            if (err) return err
            else {
                res.redirect('/assets')
            }
        });
}


const deleteList = (req, res) => {
    User.find(req.user)
        .populate("assets")
        .exec((err, user) => {
            Asset.find({user: req.user._id}, function (err, assets) {
                res.render('assets/deleteList', {user: req.user, assets});
                
            })
        })
    };

const deleteAsset = (req, res) => {

    Asset.findByIdAndDelete(req.params.id, (err, asset) => {
        if (err) {
            console.log(err);
            res.redirect('/assets');
        } 
        else {
            console.log('Deleted : ', asset);
            res.redirect('/assets/delete');
        }
    })

}

const deleteForm = (req, res) => {

    Asset.findById(req.params.id, (err, asset) => {
        res.render('assets/delete', {user: req.user, asset});
    });
    
}

const assetDetails = (req, res) => {
    Asset.findById(req.params.id, (err, asset) => {
        res.render('assets/details', {user: req.user, asset});
    });
}

module.exports = {
    index,
    new: newAsset,
    create: createAsset,
    details: assetDetails,
    assetForm,
    updateForm,
    updateList,
    deleteList,
    deleteForm,
    update: updateAsset,
    delete: deleteAsset,
    type,
    
};