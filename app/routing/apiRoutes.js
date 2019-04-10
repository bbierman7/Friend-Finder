// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendsArray = require("../data/friends");

//Routing
module.exports = function(app) {
    //API GET requests
    //Handles when a user visits a page
    //==============================================
    app.get("/api/friends", function(req, res) {
        return res.json(friendsArray);
    });

    //API POST requests
    //Handles when a user submits a form where the data ultimately goes to the server
    app.post("/api/friends", function(req, res){
        
        
        
        var newFriend = req.body;
        console.log( "Over in apiRoutes with my New Friend: " + newFriend.name + ":" + newFriend.photo ); 
        
        // Compatability logic to match up the best-suited friend
        var closestMatch = -1;
        var lowestDiff;

        for (var friendIndex = 0; friendIndex < friendsArray.length; friendIndex++  ){
            var diff = 0;
            for (var questionIndex = 0; questionIndex < newFriend.scores.length; questionIndex++){
                diff += Math.abs(newFriend.scores[questionIndex] - friendsArray[friendIndex].scores[questionIndex]);
            }
            if (closestMatch === -1){
                //first comparison...he wins automatically
                closestMatch = friendIndex;
                lowestDiff = diff;
            } else {
                // check to see if closer than the closest we've found so far..
                if (diff < lowestDiff) {
                    // new closest friend
                    closestMatch = friendIndex;
                    lowestDiff = diff;
                }
            }
        }

        console.log("match is " + lowestDiff);
        res.json(friendsArray[closestMatch]);
        friendsArray.push(newFriend);
    })


}