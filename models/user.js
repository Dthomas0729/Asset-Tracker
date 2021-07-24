const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const userSchema = new Schema({
    name: String,
    assets: [{type: Schema.Types.ObjectId, ref: 'Asset'}],
    cashFlow: Number
})



module.exports = mongoose.model('User', userSchema);