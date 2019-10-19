const express = require("express");
const router = express.Router();
const controller = require("./../controllers/cart.controller");

// URL: locahost:products/add/abcxyz123
router.get("/add/:productId", controller.addToCart);

module.exports = router;
