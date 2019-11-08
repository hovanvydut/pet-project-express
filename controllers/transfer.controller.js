const transferModel = require("../models/transfer.model");

module.exports = {
	create: function(req, res, next) {
		res.render("transfer/create", { csrfToken: req.csrfToken() });
	},
	postCreate: async function(req, res, next) {
		let data = new transferModel({
			idUserSend: req.signedCookies.userId,
			accountReceive: req.body.accountReceive,
			amount: parseInt(req.body.amount)
		});

		await data.save();

		res.locals.transferMessage = "Success!";
		res.redirect("/transfer/create");
	}
};
