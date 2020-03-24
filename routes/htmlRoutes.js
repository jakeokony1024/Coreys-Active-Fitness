var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("index", {
        style: "style.css",
        msg: "Welcome!",
        examples: dbUser
      });
    });
  });

  app.get("/classes", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("classes", {
        style: "style.css",
        msg: "Welcome!",
        examples: dbUser
      });
    });
  });

  app.get("/contact", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("contact", {
        style: "style.css",
        msg: "Welcome!",
        examples: dbUser
      });
    });
  });

  app.get("/gallery", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("gallery", {
        style: "style.css",
        msg: "Welcome!",
        examples: dbUser
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/about-us", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("about-us", {
        style: "style.css",
        msg: "Welcome!",
        examples: dbUser
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
