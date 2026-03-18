const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    planName: String,
    duration: String,
    price: Number
});

module.exports = mongoose.model('Membership', membershipSchema);