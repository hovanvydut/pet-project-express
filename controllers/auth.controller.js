const md5 = require("md5");
const userModel = require("./../models/user.model");

module.exports = {
	getLogin: function(req, res, next) {
		res.render("auth/login");
	},
	postLogin: async function(req, res, next) {
		let user = await userModel.findOne({
			email: req.body.email,
			password: md5(req.body.password)
		});

		if (!user) {
			res.render("auth/login", {
				errors: ["Tài khoản hoặc mật khẩu không chính xác."],
				values: req.body
			});
			return;
		}

		// Nếu tồn tại user thì set Cookie cho response
		res.cookie("userId", user._id, { signed: true, maxAge: 10 * 60 * 1000 }); // 10phut
		res.redirect("/users");
	},
	logout: function(req, res, next) {
		res.clearCookie("userId");
		res.redirect("/");
	}
};
