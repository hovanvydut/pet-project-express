const db = require("./../db");

module.exports.addToCart = function(req, res, next) {
	const productId = req.params.productId;
	const sessionId = req.signedCookies.sessionId;

	if (sessionId) {
		let count = db
			.get("sessions")
			.find({ id: sessionId })
			.get(`cart.${productId}`, 0)
			.value();

		db.get("sessions")
			.find({ id: sessionId })
			.set(`cart.${productId}`, count + 1)
			.write();

		// let item = db
		// 	.get("sessions")
		// 	.find({ id: sessionId })
		// 	.get("cart")
		// 	.value();
		res.locals.cartCount = Object.values(
			db
				.get("sessions")
				.find({ id: sessionId })
				.get("cart")
				.value()
		).reduce((acc, cur) => acc + cur, 0);
	}
	res.redirect("/products");
};
