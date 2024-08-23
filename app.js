const path = require("path");

const express = require("express");
const app = express();
const port = 3000;

app.engine(".html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "view"));

app.use("/static", express.static(path.join(__dirname, "/static/")));

app.get("/", (req, res) => {
  res.redirect("/race");
});

app.get("/race", (req, res) => {
  res.render("index.html", {
    page: "race/index.html",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
