const userModel = require("./../models/user.model");

module.exports.requireAuth = async function(req, res, next) {
	const loginURL = "/auth/login";

	if (!req.signedCookies.userId) {
		res.redirect(loginURL);
		return;
	}

	let user = await userModel.findById(req.signedCookies.userId);

	if (!user) {
		res.redirect(loginURL);
		return;
	}

	// Tạo 1 biến user chứa user Object có thể sử dụng ở view
	res.locals.user = user;
	next();
};
