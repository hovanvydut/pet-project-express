const sessionModel = require("./../models/session.model");
const userModel = require("./../models/user.model");
const shortid = require("shortid");

module.exports = async function(req, res, next) {
	console.log("pass over session.middleware");
	const userId = req.signedCookies.userId;
	let sessionId = req.signedCookies.sessionId;
	if (userId) {
		let user = userModel.findById(userId);
		if (user) {
			await userModel.updateOne({ _id: userId }, { carts: [{}] });
		}
	}
	// let auth = false; // để phân biệt người truy cập /products có đăng nhập hay không
	// if (!sessionId) {
	// 	if (userId) {
	// 		sessionId = userId;
	// 		auth = true;
	// 		let doc = sessionModel({ userId: sessionId, auth });
	// 		await doc.save();
	// 	} else {
	// 		sessionId = shortid.generate();
	// 		let doc = sessionModel({ userId: sessionId, auth });
	// 		await doc.save();
	// 	}
	// 	res.cookie("sessionId", sessionId, { signed: true });
	// }
	next();
};
