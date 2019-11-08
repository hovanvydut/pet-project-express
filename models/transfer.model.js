const mongoose = require("mongoose");

const transferSchema = new mongoose.Schema({
	idUserSend: String,
	accountReceive: String,
	amount: Number
});

// Tên collection phải thêm s ở cuối (transfer's'), vì mongoose atlas sẽ tự động thêm nếu mình không thêm
const transferModel = mongoose.model("transfers", transferSchema);

module.exports = transferModel;
