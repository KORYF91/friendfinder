// require express
var express = require("express");

// this file is to set up the server for the application
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/htmlRoutes.js")(app)
require("./app/routing/apiRoutes.js")(app)

app.listen(PORT, function(){
    console.log("App Listening on PORT: " + PORT)
})