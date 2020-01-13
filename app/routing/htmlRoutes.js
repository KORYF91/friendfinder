// include the two routes
//REQUIRE PATH
var path = require("path");

// EXPORT - MODULE FUNCTION
    module.exports = function (app) {
        // ROUTE TO SURVEY.HTML - METHOD GET
        app.get("/survey", function(req, res) {
            res.sendFile(path.join(_dirname, "../public/survey.html"));
        });

        // ROUTE TO THE HOME.HTML - DEFAULT PAGE
        app.get("/", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/home.html"));
          });
    }



