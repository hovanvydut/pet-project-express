const express = require("express");
const controller = require("./../controllers/transfer.controller");
const router = express.Router();

router.get("/create", controller.create).post("/create", controller.postCreate);

module.exports = router;
