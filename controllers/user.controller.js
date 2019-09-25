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
	createGet: function(req, res) {
		res.render("users/create");
	},
	createPost: function(req, res) {
		let errors = [];
		if (!req.body.name) {
			errors.push("Name is required");
		}
		if (!req.body.phone) {
			errors.push("Phone is required");
		}

		if (errors.length > 0) {
			res.render("users/create", { errors, values: req.body });
		} else {
			req.body.id = shortid.generate();
			db.get("users")
				.push(req.body)
				.write();
			res.redirect("/users/");
		}
	},
	delete: function(req, res) {
		db.get("users")
			.remove({ id: req.params.id })
			.write();
		res.redirect("/users/");
	}
};
