const productModel = require("./../models/product.model");

module.exports = {
	getProducts: async function(req, res, next) {
		const itemsPerPage = 8;
		let currentPage = Number(req.query.page) || 1;
		let skip = itemsPerPage * (currentPage - 1);
		let datas = await productModel
			.find({})
			.skip(skip)
			.limit(itemsPerPage);
		res.render("products/products.pug", { products: datas, currentPage });
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
