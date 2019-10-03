// Imports initial friends array
var friendData = require("../data/friends");

// Exports app to be used by server
module.exports = function(app) {
  
    // Get request that displays the friends object array
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });
  
    // Post request for new survey submission
    app.post("/api/friends", function(req, res) {
        // Sets new friends equal to survey object
        var newFriend = req.body;

        // Creates closest match object
        var closestMatch = {
            difference: null,
            name: "",
            picture: ""
        };

        // Creates alert object
        var alert = {
            message: "",
            error: false
        };

        // Checks that no entries were left blank and sends error message if one or more entries is left blank
        if (newFriend.name === "" || newFriend.picture === "" || newFriend.q1 === "" || newFriend.q2 === "" || newFriend.q3 === "" || newFriend.q4 === "" || newFriend.q5 === "" || newFriend.q6 === "" || newFriend.q7 === "" || newFriend.q8 === "" || newFriend.q9 === "" || newFriend.q10 === ""){
            alert.message = "Please fill out all fields before submitting!",
            alert.error = true;
            res.json(alert);
        } else {
            // Loops through each friend object in array
            friendData.forEach(function(data){

                // Set difference equal to 0 initially
                var difference = 0;

                // Checks the absolute value of each survey answer with the current friend object
                difference += Math.abs(data.q1 - newFriend.q1);
                difference += Math.abs(data.q2 - newFriend.q2);
                difference += Math.abs(data.q3 - newFriend.q3);
                difference += Math.abs(data.q4 - newFriend.q4);
                difference += Math.abs(data.q5 - newFriend.q5);
                difference += Math.abs(data.q6 - newFriend.q6);
                difference += Math.abs(data.q7 - newFriend.q7);
                difference += Math.abs(data.q8 - newFriend.q8);
                difference += Math.abs(data.q9 - newFriend.q9);
                difference += Math.abs(data.q10 - newFriend.q10);
    
                // Checks if current friend object in loop has the smallest difference and saves to closest match object
                if(closestMatch.difference === null || closestMatch.difference > difference){
                    closestMatch.difference = difference;
                    closestMatch.name = data.name;
                    closestMatch.picture = data.picture;
                };
            });

            // Pushes new survey to friend object array
            friendData.push(newFriend);

            // Returns closest match to post request
            res.json(closestMatch);
        }; 
    });
};
  