/*
A GET route with the url /api/friends. 
This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. 
This route will also be used to handle the compatibility logic.
*/

// Pull in required dependencies
var path = require('path');

// require friends object 
var friends = require('../data/friends.js');

// code our apiRoutes so that it is viewable in the server.js file by exporting it
module.exports = function(app) {
    app.get("/api/friends",function(req,res){
        // display friends object
        res.json(friends);
    });

    // friends compatibility logic here
    app.post("/api/friends",function(req,res){
        // handle incoming survey results and compatibility logic

        // Capture the user input object
        var userInput = req.body;

        var userResponses = userInput.scores;

        // Compute best friend match
        var matchName = '';
        var matchImage = '';
        var totalDifference = 200; 
        // loop the friend list for compatibility
        for (var i = 0; i < friends.length; i++) {

            // Compute differenes for each question
            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }
            // If lowest difference, record the friend match
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }console.log(totalDifference);
        // Add new user to friends
        friends.push(userInput);
        console.log(matchName);
        console.log(matchImage);
        // Send response to user
        res.json({matchName: matchName, matchImage: matchImage });
    });
}