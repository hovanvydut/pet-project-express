const db = require("../db");

module.exports.requireAuth = function(req, res, next) {
	if (!req.signedCookies.userId) {
		res.redirect("/auth/login");
		return;
	}
	let user = db
		.get("users")
		.find({ id: req.signedCookies.userID })
		.value();

	if (!user) {
		res.redirect("/auth/login");
		return;
	}

	// Tạo 1 biến user chứa tên người dùng có thể sử dụng ở view
	res.locals.user = user;
	next();
};
