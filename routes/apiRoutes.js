const { QueryTypes } = require('sequelize');
var db = require("../models");
module.exports = function (app) {
/*  app.post('/api/login', function (request, response) {
    db.sequelize.query(`select * from Users where user_email='${request.body.email}' and user_password='${request.body.password}'`, { 
      type: QueryTypes.SELECT
    }).then(function(userLogin) {
        response.render("user", {
          user: userLogin[0].user_fname
        })
      });
    });*/
  app.post('/api/login', function (request, response) {
    db.sequelize.query(`select * from Users where user_email='${request.body.email}' and user_password='${request.body.password}'`, { 
      type: QueryTypes.SELECT
    }).then(function(userLogin) {
        // sets a cookie with the user's info
        console.log(userLogin[0]);
        request.session.user = userLogin[0];
        response.redirect('/user');
      })
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
  app.put('/api/profile/:user_email', function (request, response) {
    console.log("profile update");
    if (request.session && request.session.user) {
      console.log("Hello " + request.session.user.user_email);
      console.log(request.body);
      db.User.update(request.body, {
        user_height: request.body.heightInput,
        user_weight: request.body.weightInput,
        user_goals: request.body.goalsInput,
        user_notes: request.body.notesInput
      },
        {
          returning: true, where: { user_email: request.session.user.user_email }
        })
        .then(function (profileUpdate) {
          response.render("user");
        });
      }
      else {
        response.redirect('/login');
      }
    });
};