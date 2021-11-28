const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(express.json());
const adminRouter = express.Router();

const loggerWrapper = (options) => {
  return function (req, res, next) {
    if (options.log) {
      console.log(
        `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${
          req.originalUrl
        } - ${req.protocol} - ${req.ip}`
      );
      next();
    }else {
      throw new Error('failed to log')
    }
  };
};


adminRouter.use(loggerWrapper({log: true}));

adminRouter.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

app.use("/admin", adminRouter);

app.get("/about", (req, res) => {
  res.send("About");
});

const errorMiddleware = (err, req, res, mext) => {
  console.log(err.message);
  res.status(500).send("There was a serverside error");
};

adminRouter.use(errorMiddleware);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
