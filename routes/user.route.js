const express = require("express");
const router = express.Router();
const controller = require("./../controllers/user.controller");
const validate = require("./../validate/user.validate");

// URL: localhost:3000/users/...
router
	.get("/", controller.index)
	.get("/view/:id", controller.view)
	.get("/search", controller.search)
	.get("/create", controller.getCreate)
	.post("/create", validate.postCreate, controller.postCreate)
	.get("/delete/:id", controller.delete);

module.exports = router;
