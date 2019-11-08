const fs = require("fs");
const userModel = require("./../models/user.model");

module.exports = {
	index: async function(req, res) {
		let users = await userModel.find({});
		res.render("users/index.pug", {
			users
		});
	},
	view: async function(req, res) {
		let user = await userModel.findById(req.params.id);
		res.render("users/view", {
			user
		});
	},
	search: async function(req, res) {
		let key = req.query.keySearch;
		let matchedUser = await userModel.find({ name: new RegExp(key, "gi") });
		res.render("users/index", {
			users: matchedUser,
			key
		});
	},
	getCreate: function(req, res) {
		res.render("users/create");
	},
	postCreate: async function(req, res) {
		// req.file.path = "public\uploads\a63cce86a0f12967a1b25220e49bd93f"
		let myarr = req.file.path.split(/\\/g);
		// --> myarr = ["public", "uploads", "a63cce86a0f12967a1b25220e49bd93f"]
		myarr.splice(0, 1, "/static");
		// --> myarr = ["/static", "uploads", "a63cce86a0f12967a1b25220e49bd93f"]
		req.body.avatar = myarr.join("/");
		// --> req.body.avatar = "/static/uploads/a63cce86a0f12967a1b25220e49bd93f"

		// create document instance of model
		let data = new userModel({
			name: req.body.name,
			phone: req.body.phone,
			avatar: req.body.avatar
		});
		await data.save();
		res.redirect("/users/");
	},
	delete: async function(req, res) {
		let user = await userModel.findById(req.params.id);
		// xoá file ảnh trong public/uploads/abcxyz...
		// lấy đường dẫn thư mục lưu file trong database
		let path = user.avatar;
		// --> path = "/static/uploads/5eb26c81a7d134e5d297412859c8347d"

		path = path.split("/");
		// path = ["", "static", "uploads", "5eb26c81a7d134e5d297412859c8347d"]

		// __dirname = "D:\Dev\CodersTokyo\Express\tokyo\controllers"
		path =
			__dirname
				.split(/\\/g)
				.slice(0, -1)
				.join("\\") +
			"\\public\\uploads\\" +
			path[3];
		// --> path = "D:\Dev\CodersTokyo\Express\tokyo\public\uploads\5eb26c81a7d134e5d297412859c8347d"

		// method xoá file: unlink & unlinkSync của module file system trong docs nodejs
		fs.unlinkSync(path);
		// xoa document trong collection users
		await userModel.deleteOne({ _id: req.params.id });
		res.redirect("/users/");
	}
};
