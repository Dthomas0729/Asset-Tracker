const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./user')

const assetSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    type: {type: String, enum: ['Property', 'Company', 'Stock']},
    nickname: String,
    price: Number,
    income: Number,
    expenses: Number,
    details: String,
    shares: Number,
}, {
    timestamps: true
  }
);

module.exports = mongoose.model('Asset', assetSchema);