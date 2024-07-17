const express = require("express");
const app = express();
const path = require("path");
const studentRouter = require("./routes/studentRoutes");

app.use("/", studentRouter);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.use("/api/v1/users", studentRouter);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
