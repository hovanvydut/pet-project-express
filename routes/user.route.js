const express = require("express");
const router = express.Router();
const controller = require("./../controllers/user.controller");

router.get("/", controller.index);
router.get("/view/:id", controller.view);
router.get("/search", controller.search);
router
	.get("/create", controller.createGet)
	.post("/create", controller.createPost);
router.get("/delete/:id", controller.delete);

module.exports = router;
