var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mysql = require("mysql");


var app = express();
var port  = 8000;

//SERVE STATIC CONTENT FOR THE APP FORM THE "PUBLIC" DIRECTORY IN TEH APPLICATION DIRECTORY
app.use(express.static(process.cwd() + "/public"));

//PARSE APPLICATION/X-WWW-FORM-URLENCODED
app.use(bodyParser.urlencoded({ extended: false}));

//OVERRIDE WITH POST HAVING ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine","handlebars");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	port: 8889,
	database: "burgers_db"
});

connection.connect(function (err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id: " + connection.threadId);
});

app.listen(port,function() {
	console.log("Listening on PORT: "+ port);
});