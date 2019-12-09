const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: String,
	phone: String,
	email: String,
	password: String,
	avatar: String,
	carts: Array
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
