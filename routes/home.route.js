const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("home.pug", { name: "Van Vy" });
});

module.exports = router;
