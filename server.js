//Dependencies
//==================================================
var express = require("express");
// var path = require("path");

//Sets up the Express App
//==================================================

var app = express();
var PORT = process.env.PORT || 8080;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Friends (DATA)
//==================================================
// var friends = [
//     {
//         name: "Peter",
//         photo: "https://tse4.mm.bing.net/th?id=OIP.fiq0LOLrRWob1CTNkaepOwHaEK&pid=Api&P=0&w=271&h=153",
//         scores: [1,2,3,4,5,1,2,3,4,5]
//     },
//     {
//         name: "Mary Jane",
//         photo: "https://tse4.mm.bing.net/th?id=OIP.yXWeiDGJ4VQFxyLAfILjrwHaF6&pid=Api&P=0&w=197&h=158",
//         scores: [5,4,3,2,1,5,4,3,2,1]
//     },
//     {
//         name: "Doc Oc",
//         photo: "https://tse1.mm.bing.net/th?id=OIP.9AGrUXnZMqMm_RhFlmgmIAAAAA&pid=Api&P=0&w=300&h=300",
//         scores: [3,2,1,3,2,1,3,4,5,2]
//     }
// ];

//Routes
//==================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//LISTENER
//Starts the server to begin listening
//==================================================
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});