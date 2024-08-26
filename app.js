const path = require("path");
const express = require("express");
const races = require("./script/race");
const classes = require("./script/class");

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

app.get("/subrace", (req, res) => {
  const race = req.query["race"];
  const subraces = races[race].subraces;

  if (subraces) {
    res.render("index.html", {
      page: "subrace/index.html",
      title: "Subrace",
      race,
      subraces,
    });
  } else {
    res.redirect(`/class?race=${race}`);
  }
});

app.get("/class", (req, res) => {
  const race = req.query["race"];
  const subrace = req.query["subrace"];
  res.render("index.html", {
    page: "class/index.html",
    title: "Class",
    race,
    subrace,
    classes: classes.all,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
