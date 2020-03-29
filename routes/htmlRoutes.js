var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });
  //load classes page
  app.get("/classes", function(req, res) {
    res.render("classes");
  });
  //load contact page
  app.get("/contact", function(req, res) {
    res.render("contact");
  });
  //load img gallery
  app.get("/gallery", function(req, res) {
    res.render("gallery");
  });
  //load about-us page
  app.get("/about-us", function(req, res) {
    res.render("about-us");
  });
  //load user homepage
  app.get("/user", function(req, res) {
    res.render("user");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/login", function(req, res) {
    res.render("/login");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
