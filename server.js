const express = require("express");
const PORT = 3000
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// require('./database');


// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
const connection = "mongodb+srv://cluster0.mwxyy.mongodb.net/myFirstDatabase";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
