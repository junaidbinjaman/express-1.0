const express = require("express");
const cookieParser = require("cookie-parser");
const handler = require("./handle");

const app = express();
app.use(express.json());
app.use(cookieParser());

const adminRouter = express.Router();
adminRouter.get("/dashboard", (req, res) => {
  console.log(req.method);
  res.send("We are in admin dashboard");
});

app.use("/admin", adminRouter);

app.get("/user/:id", handler);

app.post("/user", (req, res) => {
  console.log(req.headers['firstame']);
  res.send("Hello, World Post");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
