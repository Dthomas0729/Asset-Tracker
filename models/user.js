const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Asset = require('./asset')

const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    avatarUrl: String,
    assets: [{type: Schema.Types.ObjectId, ref: 'Asset'}],
    cashFlow: Number
}, {
    timestamps: true
  }
);



module.exports = mongoose.model('User', userSchema);