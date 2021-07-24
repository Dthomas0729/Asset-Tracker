const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./user')

const assetSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    type: {type: String, enum: ['Property', 'Business', 'Stock']},
    info: String,
    income: Number,
    expenses: Number,
    price: Number,
    shares: Number
}, {
    timestamps: true
  }
);

module.exports = mongoose.model('Asset', assetSchema);