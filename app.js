const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use("/static", express.static("public"));

app.use("/", require("./routes/home.route"));
app.use("/users", require("./routes/user.route"));

app.listen(port, () => console.log(`Server is listenning on port ${port}`));
