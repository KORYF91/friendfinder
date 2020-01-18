// SHOULD HAVE TWO ROUTES
var data = require("../data/friends")


module.exports = function(app){
    // /API/FRINDS - METHOD GET
    app.get("/api/friends", function (req, res) {
        res.send(data.friends);
    });
// /API/FRIENDS - METHOD POST
    app.post("/api/friends", function (req, res) {
        if(data.friends.length < 10){
            data.friends.push(req.body);
            res.json(true)
        } else {
            data.friends.push(req.body);
            res.json(false);
        }
    })
}




