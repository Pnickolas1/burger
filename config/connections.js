var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: 8889,
	user: "root",
	password: "root",
	database: "burgers_db"
});

connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});


//EXPORT CONNECTION FOR OUR ORM TO USE
// ORM - OBJECT RELATIONAL MAPPING (OR MAPPER)
module.exports = connection;