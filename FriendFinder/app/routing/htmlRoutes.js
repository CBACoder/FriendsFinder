
/*
    A GET Route to /survey which should display the survey page.
    A default, catch-all route that leads to home.html which displays the home page
*/

// Pull in required dependencies
var path = require('path');

// code our apiRoutes so that it is viewable in the server.js file by exporting it
module.exports = function(app) {
    //default, catch-all route that leads to home.html which displays the home page
    app.get("/catch-all",function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //Route to /survey which should display the survey page
    app.get("/survey",function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}