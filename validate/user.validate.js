const userModel = require("./../models/user.model");

module.exports.postCreate = async function(req, res, next) {
	let errors = [];
	let users = await userModel.find({});

	if (!/^[A-Za-z\s]{2,}$/.test(req.body.name))
		errors.push("Tên phải từ 2 kí tự trở lên");
	if (users.some(user => user.name === req.body.name))
		errors.push("Tên đã tồn tại!");
	if (!/^0\d{9,10}$/.test(req.body.phone))
		errors.push(
			"Không đúng định dạng số điện thoại 0xxxxxxxxx[x] (10 hoặc 11 số)"
		);

	// Nếu có lỗi <=> người dùng nhập thông tin không đúng định dạng => render lại trang view create cùng với errors array
	if (errors.length > 0) {
		res.render("users/create", { errors, values: req.body });
		return;
	}
	// Nếu không có lỗi, tạo biến notification, sau đó next sang middleware tiếp theo
	res.locals.notification = `Vừa thêm mới user có tên là ${req.body.name}`;
	next();
};
