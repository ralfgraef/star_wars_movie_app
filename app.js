const express = require("express");

const app = express();

app.set("view engine", "ejs");

const routes = require('./routes');
// Routes

// home
app.get("/", routes.home);

// movie_single
app.get("/star_wars_episode/:episode_number?", routes.movie_single);

// not found
app.get("*", routes.notFound);

app.listen(3000, () => {
  console.log("Server running on Port 3000 ...");
});
