const express = require("express");
const router = express.Router();
const controller = require("./../controllers/cart.controller");

// URL: locahost:cart/add/abcxyz123 ==> productId = 'abcxyz123' and use req.params.productId to get
router.get("/add/:productId", controller.addToCart);

module.exports = router;
