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
  app.get("/user", function(request, response) {
    if (request.session && request.session.user) {
      // Check if session exists
      // lookup the user in the DB by pulling their email from the session
      response.render("user", {
        user: request.session.user.user_fname,
        height: request.session.user.user_height,
        weight: request.session.user.user_weight,
        notes: request.session.user.user_notes
      });
    } else {
      response.redirect("/");
    }
  });
  //load user signup page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });
  //load user login page
  app.get("/login", function(req, res) {
    res.render("login");
  });
  app.get("/signout", function(request, response) {
    request.session.reset();
    response.redirect("/");
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
