const db = require("./../db");
const shortid = require("shortid");

module.exports = function(req, res, next) {
	// kiểm tra xem có sessionID chưa, nếu chưa thì tạo
	if (!req.signedCookies.sessionId) {
		const sessionId = shortid.generate();
		// tạo 1 cookie có key là sessionId
		res.cookie("sessionId", sessionId, { signed: true });

		// save sessionId vào session field trong db
		db.get("sessions")
			.push({ id: sessionId })
			.write();
	}

	next();
};
