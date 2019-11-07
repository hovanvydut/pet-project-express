const db = require("./../db");
const shortid = require("shortid");

module.exports = {
	create: function(req, res, next) {
		res.render("transfer/create", { csrfToken: req.csrfToken() });
	},
	postCreate: function(req, res, next) {
		let data = {
			id: shortid.generate(),
			accountId: req.body.accountId,
			amount: parseInt(req.body.amount),
			userId: req.signedCookies.userId
		};

		db.get("transfer")
			.push(data)
			.write();

		res.locals.transferMessage = "Success!";
		res.redirect("/transfer/create");
	}
};
