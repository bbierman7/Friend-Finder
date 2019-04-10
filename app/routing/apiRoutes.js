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
        
        // Compatability logic to match up the best-suited friend
        function friend_arr_diff (friendsArray1, friendsArray2) {

            var a = friendsArray[i], diff = [];
        
            for (var i = 0; i < friendsArray1.length; i++) {
                a[friendsArray1[i]] = true;
            }
        
            for (var i = 0; i < friendsArray2.length; i++) {
                if (a[friendsArray2[i]]) {
                    delete a[friendsArray2[i]];
                } else {
                    a[friendsArray2[i]] = true;
                }
            }
        
            for (var k in a) {
                diff.push(k);
            }
        
            return diff;
        }

    })


}