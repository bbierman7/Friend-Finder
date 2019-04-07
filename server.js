//Dependencies
//==================================================
var express = require("express");
var path = require("path");

//Sets up the Express App
//==================================================
var app = express();
var PORT = 3000;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Friends (DATA)
//==================================================
var friends = [
    {
        name: "Peter",
        photo: "https://tse4.mm.bing.net/th?id=OIP.fiq0LOLrRWob1CTNkaepOwHaEK&pid=Api&P=0&w=271&h=153",
        scores: [1,2,3,4,5,1,2,3,4,5]
    },
    {
        name: "Mary Jane",
        photo: "https://tse4.mm.bing.net/th?id=OIP.yXWeiDGJ4VQFxyLAfILjrwHaF6&pid=Api&P=0&w=197&h=158",
        scores: [5,4,3,2,1,5,4,3,2,1]
    },
    {
        name: "Jack",
        photo: "https://tse4.mm.bing.net/th?id=OIP.FR4Ss99H4kU2TG3QevrWCgHaE8&pid=Api&P=0&w=248&h=166",
        scores: [3,2,1,3,2,1,3,4,5,2]
    }
];

//Routes
//==================================================

//Basic route that sends the user first to the AJAX page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
})

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "survey.html"))
});

//Display all users
app.get("api/friends", function(req, res){
    return res.json(friends);
});

//Displays a single user, or returns false
app.get("/api/friends/:friend", function(req, res){
    var chosen = req.params.friend;

    console.log(chosen);

    for (var i = 0; i < friends.length; i++){
        if (chosen === friends[i].routeName){
            return res.json(friends[i]);
        }
    }

    return res.json(false);
});


//Create new friends - takes in JSON input
app.post("/api/friends", function(req, res){
    //req.body hosts is equal to the JSON post sent from the user
    //This works because of our body parsing middleware
    var newfriend = req.body;
    
    //Using a Regex Pattern to remove spaces from newUser
    //link to Regex Patterns https://www.regexbuddy.com/regex.html
    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
    
    console.log(newfriend);
    friends.push(newfriend);
    res.json(newfriend);
});

//Starts the server to begin listening
//==================================================
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});