var db = require("../models");
module.exports = function (app) {
  app.post('/api/login', function (request, response) {
    console.log(request.body.email);
    db.sequelize.query(`select createdAt from Users where user_email='${request.body.email}' and user_password='${request.body.password}'`)
      .then(function(userLogin) {
        console.log(userLogin);
        //response.json(userLogin);
        response.redirect("/userpage")
      });
    });
  app.post('/api/signup', function (request, response) {
    db.User.create({
      user_fname: request.body.firstname,
      user_lname: request.body.lastname,
      user_email: request.body.email,
      user_password: request.body.password
    })
    .then(function(userSignup) {
      response.redirect("/userpage")
    });
  });
};