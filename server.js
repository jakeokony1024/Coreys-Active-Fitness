require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
console.log("test");
module.exports = app;

// Nylas.config({
//     clientId: ez7fmdadjwbw043o7h7ldyq7x,
//     clientSecret: "7qpppiqb6roj2vsyhszumy7g7",
// });

// // Return all accounts connected to your Nylas App.
// Nylas.accounts.list().then(accounts => {
//     for (let account of accounts) {
//       console.log(
//         `Email: ${account.emailAddress} | `,
//         `Billing State: ${account.billingState} | `,
//         `Sync State: ${account.syncState}`,
//         `ID: ${account.id}  | `
//       );
//     }
//   });