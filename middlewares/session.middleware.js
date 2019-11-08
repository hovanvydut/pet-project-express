const db = require("./../db");
const shortid = require("shortid");

module.exports = function(req, res, next) {
	// kiểm tra xem có sessionID chưa, nếu chưa thì tạo
	console.log("session.middleware field");
	// if (!req.signedCookies.sessionId) {
	// 	console.log("session.middleware");
	// 	const sessionId = shortid.generate();

	// 	// tạo 1 cookie có key là sessionId (có sử dụng signed)
	// 	res.cookie("sessionId", sessionId, { signed: true, maxAge: 3600000 }); // 1 hour

	// 	// save sessionId vào session field trong db
	// 	db.get("sessions")
	// 		.push({ id: sessionId })
	// 		.write();
	// }

	next();
};
