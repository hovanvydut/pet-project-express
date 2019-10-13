const express = require("express");
const router = express.Router();
const controller = require("./../controllers/products.controller");

router.get("/", controller.getProducts);

module.exports = router;
