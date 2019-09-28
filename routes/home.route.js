const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("home.pug", { titleCard: "I'm leaning Express" });
});

module.exports = router;
