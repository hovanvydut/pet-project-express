const productModel = require("./../models/product.model");

module.exports = {
	getProducts: async function(req, res, next) {
		// Chưa tạo chức năng phân trang
		let datas = await productModel.find({});
		res.render("products/products.pug", { products: datas });
	},
	getCreateProduct: function(req, res, next) {
		res.render("products/create.pug");
	},
	postCreateProduct: async function(req, res, next) {
		let data = new productModel({
			name: req.body.name,
			image: req.body.image,
			description: req.body.description
		});

		await data.save();
		res.locals.notification = "vua them 1 product thanh cong";
		res.redirect("/products/create");
	}
};
