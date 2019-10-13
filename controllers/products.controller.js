const db = require("./../db");

module.exports = {
	getProducts: function(req, res, next) {
		const page = parseInt(req.query.page) || 1;
		const perPages = 8;

		const begin = (page - 1) * perPages;
		const end = begin + perPages;

		let datas = db.get("products").value();
		datas = datas[0].slice(begin, end);
		res.render("products/products.pug", { products: datas });
	}
};
