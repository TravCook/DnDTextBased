const express = require("express");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require("path");
const cors = require("cors")

// Define middleware here
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"))
})


// Connect to the Mongo DB
const connection = "mongodb+srv://travCook:MoonKnight762@cluster0.mwxyy.mongodb.net/DnDTextBased?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

app.use(cors())
app.use(routes)


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
