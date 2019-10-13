const shortid = require("shortid");
const db = require("./../db");
const fs = require("fs");

module.exports = {
	index: function(req, res) {
		res.render("users/users.pug", {
			users: db.get("users").value()
		});
	},
	view: function(req, res) {
		res.render("users/view", {
			user: db
				.get("users")
				.find({ id: req.params.id })
				.value()
		});
	},
	search: function(req, res) {
		let key = req.query.keySearch;
		let matchedUser = db
			.get("users")
			.value()
			.filter(user => {
				return new RegExp(key, "gi").test(user.name);
			});
		res.render("users/users", {
			users: matchedUser,
			key
		});
	},
	getCreate: function(req, res) {
		res.render("users/create");
	},
	postCreate: function(req, res) {
		console.log(res.locals);

		req.body.id = shortid.generate();

		// req.file.path = "public\uploads\a63cce86a0f12967a1b25220e49bd93f"
		let myarr = req.file.path.split(/\\/g);
		// --> myarr = ["public", "uploads", "a63cce86a0f12967a1b25220e49bd93f"]
		myarr.splice(0, 1, "/static");
		// --> myarr = ["/static", "uploads", "a63cce86a0f12967a1b25220e49bd93f"]
		req.body.avatar = myarr.join("/");
		// --> req.body.avatar = "/static/uploads/a63cce86a0f12967a1b25220e49bd93f"

		// Lưu dữ liệu vào db
		db.get("users")
			.push(req.body)
			.write();
		res.redirect("/users/");
	},
	delete: function(req, res) {
		// xoá file ảnh trong public/uploads/abcxyz...
		// lấy đường dẫn thư mục lưu file trong database
		let path = db
			.get("users")
			.find({ id: req.params.id })
			.value().avatar;
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

		// xoá data trong database(file db.json);
		db.get("users")
			.remove({ id: req.params.id })
			.write();

		res.redirect("/users/");
	}
};
