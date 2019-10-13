require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

// Middleware giúp kiểm tra xem người dùng đã đăng nhập chưa, dựa trên cookie
const authMiddleware = require("./middlewares/auth.middleware");

// config template engine and folder view
app.set("view engine", "pug");
app.set("views", "./views");

// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// truy cập localhost:3000/static/ === folder public trong source code
app.use("/static", express.static(path.join(__dirname, "public")));
// config để use req.signedCookies
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/", require("./routes/home.route"));
// Muốn truy cập route /users hoặc /products thì phải pass authMiddleware(check sự tồn tại userID Cookie trong database có khớp không?)
app.use(
	"/products",
	authMiddleware.requireAuth,
	require("./routes/products.route")
);
app.use("/users", authMiddleware.requireAuth, require("./routes/user.route"));
app.use("/auth", require("./routes/auth.route"));

app.listen(port, () => console.log(`Server is listenning on port ${port}`));
