const express = require("express");
const controller = require("./../controllers/user.controller");
const validate = require("./../validate/user.validate");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "public/uploads/" });

// URL: localhost:3000/users/...
router
	.get("/", controller.index)
	.get("/view/:id", controller.view)
	.get("/search", controller.search)
	.get("/create", controller.getCreate)
	.post(
		"/create",
		// `avatarImg trong upload.single(avatarImg)` là phải trùng với name attribute trong input(type="file") tag phía client
		upload.single("avatarImg"),
		validate.postCreate,
		controller.postCreate
	)
	.get("/delete/:id", controller.delete);

module.exports = router;
