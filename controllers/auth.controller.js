const md5 = require("md5");
const db = require("./../db");

module.exports = {
	getLogin: function(req, res, next) {
		res.render("auth/login");
	},
	postLogin: function(req, res, next) {
		// Tìm kiếm tài khoản email người dùng nhập lên trong cơ sở dữ liệu
		let user = db
			.get("users")
			.find({ email: req.body.email })
			.value();
		// Không tồn tại user
		if (!user) {
			res.render("auth/login", {
				errors: ["Không tồn tại users"],
				values: req.body
			});
			return;
		}
		// Sai mật khẩu
		if (user.password !== md5(req.body.password)) {
			res.render("auth/login", { errors: ["Sai mật khẩu"], values: req.body });
			return;
		}

		// Nếu đúng email && password thì set Cookie cho response
		// res.cookie("userID", user.id, { signed: true, maxAge: 600000 }); // 10phut
		res.cookie("userID", user.id, { signed: true });
		res.redirect("/users");
	},
	logout: function(req, res, next) {
		res.clearCookie("userID");
		res.redirect("/");
	}
};
