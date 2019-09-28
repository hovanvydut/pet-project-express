const express = require("express");
const router = express.Router();
const controller = require("./../controllers/auth.controller");

router
	.get("/login", controller.getLogin) // trả về giao diện Login Page
	.post("/login", controller.postLogin) // xử lí thông tin login khi Submit
	.get("/logout", controller.logout); // đăng xuất -> xoá cookie

module.exports = router;
