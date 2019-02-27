const express = require("express");

const app = express();

app.set("view engine", "ejs");

// Routes

// home
app.get("/", (req, res) => {
  res.render("home", {
    title: "Star Wars Movies"
  });
});

// movie_single
app.get("/star_wars_episode/:episode_number?", (req, res) => {
  let episode_number = req.params.episode_number;
  res.send("This is the page for episode number " + episode_number);
});

// not found
app.get("*", (req, res) => {
  res.send("This is not the page your are looking for ...");
});

app.listen(3000, () => {
  console.log("Server running on Port 3000 ...");
});
