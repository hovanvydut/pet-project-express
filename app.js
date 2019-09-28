require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

// Middleware giúp kiểm tra xem người dùng đã đăng nhập chưa, dựa trên cookie
const authMiddleware = require("./middlewares/auth.middleware");

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/", require("./routes/home.route"));
// Muốn truy cập /users thì phải pass authMiddleware(check xem có userID cookie chưa)
app.use("/users", authMiddleware.requireAuth, require("./routes/user.route"));
app.use("/auth", require("./routes/auth.route"));

app.listen(port, () => console.log(`Server is listenning on port ${port}`));
