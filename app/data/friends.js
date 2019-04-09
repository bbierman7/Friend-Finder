// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// }

var friendsArray = [
    {
        name: "Harry Osborne",
        photo: "https://tse2.mm.bing.net/th?id=OIP.wvAekiEZPiOCd4nAFULnUQHaMH&pid=Api&P=0&w=300&h=300",
        scores: [5,2,4,3,2,1,3,4,5,1]
    }
]

//This makes it accessible to other files using require.
module.exports = friendsArray;