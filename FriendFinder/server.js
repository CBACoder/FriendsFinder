var express = require("express");
var path = require("path");
let fs = require("fs");

//set up express server
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add routes: this is the root test
// app.get("/",function(req,res){
//     res.send("This is root");
// });

// pull in our routes from app/routing path for htmlRoutes.js and apiRoutes.js 
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);
require(path.join(__dirname, './app/routing/apiRoutes'))(app);

// add routes: this is the root test
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
