var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var routes = require("./controllers/burgers_controller.js");

var app = express();
var port  = 8000;

//SERVE STATIC CONTENT FOR THE APP FORM THE "PUBLIC" DIRECTORY IN TEH APPLICATION DIRECTORY
app.use(express.static(process.cwd() + "/public"));

//PARSE APPLICATION/X-WWW-FORM-URLENCODED
app.use(bodyParser.urlencoded({ extended: false }));

//OVERRIDE WITH POST HAVING ?_method=DELETE
app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine","handlebars");


app.use("/", routes);

app.listen(port);
