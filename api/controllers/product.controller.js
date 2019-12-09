const productModel = require("./../../models/product.model");

module.exports = {
	getAllProducts: async function(req, res, next) {
		let datas = await productModel
			.find({});
		res.json(datas);
	},
	create: async function(req, res, next) {
		let newProduct = await productModel.create(req.body);
		res.json(newProduct);
	},
	findByName: async function(req, res, next) {
		let name = req.params.name;
		let data = await productModel.find({name});
		res.json(data);
	},
	deleteByName: async function(req, res, next) {
		let name = req.params.name;
		let serverRes = await productModel.deleteOne({name});
		res.json(serverRes);
	},
	updateByName: async function(req, res, next) {
		let name = req.params.name;
		let newData = req.body;
		let serverRes = await productModel.update({name}, newData);
		res.json(serverRes);
	}
};
