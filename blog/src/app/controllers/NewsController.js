class NewsControllers {
  //[GET] /news
  index(req, res) {
    res.render("news");
  }

  // [GET] /news/:slug
  show(req, res) {
    res.send("Hello NEWS");
  }
}

module.exports = new NewsControllers();
