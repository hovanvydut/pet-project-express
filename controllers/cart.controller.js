const sessionModel = require("./../models/session.model");

module.exports.addToCart = function(req, res, next) {
	console.log('pass over cart.controller.js')
	// const productId = req.params.productId;
	// const sessionId = req.signedCookies.sessionId;

	// if (sessionId) {
	// 	let document = sessionModel.findOne({ userId: sessionId });
	// 	console.log(document.cart);
	// 	if (!document.cart) {
	// 		sessionModel
	// 			.findOne({ userId: sessionId })
	// 			.update({ cart: new Map(`${productId}`, 0) });
	// 	}
	// 	let count = document.cart[productId];
	// 	sessionModel
	// 		.findOne({ userId: sessionId })
	// 		.update({ cart: new Map(`${productId}`, count + 1) });
	// }
	// res.locals.cartCount = 5;
	res.redirect("/products");
};
