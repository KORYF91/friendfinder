// include the two routes
//REQUIRE PATH
var path = require("path");
console.log("html routes loaded")

// EXPORT - MODULE FUNCTION
module.exports = function (app) {
    // ROUTE TO SURVEY.HTML - METHOD GET
    app.get("/survey", function (req, res) {
        console.log("test? / survey")
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // // ROUTE TO THE HOME.HTML - DEFAULT PAGE
    // app.get("*", function (req, res) {
    //     console.log("/ route")
    //     res.sendFile(path.join(__dirname, "../public/home.html"));
    // });

    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/home.html"))
    })
}



