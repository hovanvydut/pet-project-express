const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    userId: String,
    cart: Map,
    auth: Boolean,
});

const sessionModel = mongoose.model('sessions', sessionSchema);

module.exports = sessionModel;
