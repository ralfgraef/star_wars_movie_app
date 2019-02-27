// home
exports.home = (req, res) => {
  res.render("home", {
    title: "Star Wars Movies"
  });
};

// movie_single
exports.movie_single = (req, res) => {
  let episode_number = req.params.episode_number;
  res.send("This is the page for episode number " + episode_number);
};

// not found
exports.notFound = (req, res) => {
  res.send("This is not the page your are looking for ...");
};