const path = require("path");
const express = require("express");
const races = require("./script/race");

const app = express();
const port = 3001;

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
    title: "Race",
    races: races.all,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
