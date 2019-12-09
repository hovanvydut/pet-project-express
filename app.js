require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
var db = mongoose.connection;
db.on("error", () => console.log("DATABASE: connection error"));
db.once("open", function() {
	console.log("DATABASE: connected");
});

const app = express();
const port = 3000;

// Middleware giúp kiểm tra xem người dùng đã đăng nhập chưa, dựa trên cookie
const authMiddleware = require("./middlewares/auth.middleware");
const sessionMiddleware = require("./middlewares/session.middleware");

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
app.use("/transfer", csrf({ cookie: true }));

app.use('/api/products', require('./api/routes/product.route'));

app.use("/", require("./routes/home.route"));
// Muốn truy cập route /users thì phải pass authMiddleware(check sự tồn tại userID Cookie trong database có khớp không?)
app.use("/users", authMiddleware.requireAuth, require("./routes/user.route"));
// sessionMiddleware: kiểm tra xem có cookie chưa, nếu chưa thì tạo cookie có key là sessionId
app.use("/products", sessionMiddleware, require("./routes/products.route"));
app.use("/auth", require("./routes/auth.route"));
app.use("/cart", require("./routes/cart.route"));
app.use(
	"/transfer",
	authMiddleware.requireAuth,
	require("./routes/transfer.route")
);

app.listen(port, () => console.log(`SERVER: is listenning on port ${port}`));
