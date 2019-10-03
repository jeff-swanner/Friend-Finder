var friendData = require("../data/friends");

module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });
  
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var closestMatch = {
            difference: null,
            name: "",
            picture: ""
        };

        var alert = {
            message: "",
            error: false
        };

        if (newFriend.name === "" || newFriend.picture === "" || newFriend.q1 === "" || newFriend.q2 === "" || newFriend.q3 === "" || newFriend.q4 === "" || newFriend.q5 === "" || newFriend.q6 === "" || newFriend.q7 === "" || newFriend.q8 === "" || newFriend.q9 === "" || newFriend.q10 === ""){
            alert.message = "Please fill out all fields before submitting!",
            alert.error = true;
            res.json(alert);
        } else {
            friendData.forEach(function(data){
                var difference = 0;
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
    
                if(closestMatch.difference === null || closestMatch.difference > difference){
                    closestMatch.difference = difference;
                    closestMatch.name = data.name;
                    closestMatch.picture = data.picture;
                };
            });
            friendData.push(newFriend);
            console.log(closestMatch);
            res.json(closestMatch);
        }; 
    });
};
  