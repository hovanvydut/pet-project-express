const shortid = require("shortid");
const db = require("./../db");

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
		db.get("users")
			.push(req.body)
			.write();
		res.redirect("/users/");
	},
	delete: function(req, res) {
		db.get("users")
			.remove({ id: req.params.id })
			.write();
		res.redirect("/users/");
	}
};
