const db = require("./../db");

module.exports.postCreate = function(req, res, next) {
	let errors = [];

	if (!/^[A-Za-z\s]{2,}$/.test(req.body.name)) {
		errors.push("Tên phải từ 2 kí tự trở lên");
	}
	if (
		db
			.get("users")
			.value()
			.some(e => e.name === req.body.name)
	) {
		errors.push("Tên đã tồn tại!");
	}
	if (!/^0\d{9,10}$/.test(req.body.phone)) {
		errors.push("Không đúng định dạng số điện thoại 0xxxxxxxxx[x]");
	}

	if (errors.length > 0) {
		res.render("users/create", { errors, values: req.body });
		return;
	}
	res.locals.notification = `Vừa thêm mới user có tên là ${req.body.name}`;
	next();
};
