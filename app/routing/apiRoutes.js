// SHOULD HAVE TWO ROUTES
var data = require("../data/friends")


module.exports = function(app){
    // /API/FRINDS - METHOD GET
    app.get("/api/friends", function (req, res) {
        res.json(data);
    });
// /API/FRIENDS - METHOD POST
    app.post("/api/friends", function (req, res) {
        var totalDiffernece = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDiffernce: 1000
        };

        var userData = req.body;
        var userName = userData.name;
        var userScore = userData.scores;

        var b = userScore.map(function(item){
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };
        console.log("name : " + userName);
        console.log("user score :" + userScore);

        var sum = b.reduce((a, b) => a+ b, 0 );
     console.log("sum " + sum)
     console.log("best match" + bestMatch.friendDiffernce);
     console.log("<==========================================>");

     for(var i = 0; i < data.length; i++) {
         console.log(data[i].name);
         totalDiffernece = 0;
         console.log("total difference : " + totalDiffernece);
         console.log("best match" + bestMatch.friendDiffernce);
       
        var bfriendScore = data[i].scores.reduce((a, b) => a + b, 0);
        console.log("Total friend score" + bfriendScore);
        totalDiffernece += Math.abs(sum - bfriendScore);
        console.log("==================================>" + totalDiffernece);
         if (totalDiffernece <= bestMatch.friendDiffernce) {
             bestMatch.name = data[i].name;
             bestMatch.photo = data[i].photo;
             bestMatch.friendDiffernce = data[i].totalDiffernece;
            }
        console.log(totalDiffernece + "total difference");
    }
    console.log(bestMatch);
    data.push(userData);
    console.log("new user added ;P");
    console.log(userData);
    res.json(bestMatch);
    });
 };
//  ]
//         if(data.friends < 10){
//             data.friends.push(req.body);
//             res.json(true)
//         } else {
//             data.friends.push(req.body);
//             res.json(false);
//         }
//     })
// }




