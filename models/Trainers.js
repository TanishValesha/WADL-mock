const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
    name: String,
    specialty: String,
    experience: Number
});

module.exports = mongoose.model('Trainer', trainerSchema);