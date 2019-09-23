const express = require("express");
const app = express();
const port = 3000;
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");

const db = low(adapter);
db.defaults({ users: ["Don't have anyone"] }).write();

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let users = [{ id: 1, name: "Thinh" }, { id: 2, name: "Hung" }];

// Home Page
app.get("/", (req, res) => {
	res.render("home.pug", { name: "Van Vy" });
});

// User page
app.get("/users", (req, res) => {
	res.render("users/users.pug", {
		users
	});
});

// Search feature
app.get("/users/search", (req, res) => {
	let key = req.query.keySearch;
	let matchedUser = users.filter(user => {
		return new RegExp(key, "gi").test(user.name);
	});
	res.render("users/index", {
		users: matchedUser,
		key
	});
});

// create new user feature
app
	.get("/users/create", (req, res) => {
		res.render("users/create");
	})
	.post("/users/create", (req, res) => {
		users.push({ id: users.length, name: req.body.name });
		res.redirect("/users");
	});

app.listen(port, () => console.log(`Server is listenning on port ${port}`));
