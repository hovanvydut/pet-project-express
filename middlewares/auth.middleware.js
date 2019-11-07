const db = require("../db");

module.exports.requireAuth = function(req, res, next) {
	const loginURL = "/auth/login";
	if (!req.signedCookies.userId) {
		res.redirect(loginURL);
		return;
	}
	let user = db
		.get("users")
		.find({ id: req.signedCookies.userId })
		.value();

	if (!user) {
		res.redirect(loginURL);
		return;
	}

	// Tạo 1 biến user chứa user Object có thể sử dụng ở view
	res.locals.user = user;
	next();
};
