const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
	name: String,
	image: String,
	description: String
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
