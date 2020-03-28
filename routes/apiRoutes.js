const { QueryTypes } = require('sequelize');

var db = require("../models");

var userLogin = {};

module.exports = function (app) {

  app.post('/api/login', function (request, response) {
    db.sequelize.query(`select * from Users where user_email='${request.body.email}' and user_password='${request.body.password}'`, { 
      type: QueryTypes.SELECT
    }).then(function(userLogin) {
        response.render("user", {
          user: userLogin[0].user_fname
        })
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
      response.redirect("/login")
    });
  });
};

