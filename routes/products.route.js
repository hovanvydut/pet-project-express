const express = require("express");
const router = express.Router();
const controller = require("./../controllers/products.controller");

router
	.get("/", controller.getProducts)
	.get("/create", controller.getCreateProduct)
	.post("/create", controller.postCreateProduct);

module.exports = router;
