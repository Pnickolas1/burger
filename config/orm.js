var connection = require("../config/connections.js");

//helper function for SQL Syntax
function printQuestionMarks(num) {
	var arr = [];

  for(var i = 0;i < num; i++){
  	arr.push("?");
  }

  return arr.toString();
}

//Helper function for SQL syntax
function objToSql(ob) {
	var arr = [];

	for(var key in ob) {
		if(Object.hasOwnProperty.call(ob,key)) {
			arr.push(key + "=" + ob[key]);
		}
	  }

	return arr.toString();
  }

//object for all SQL statement functions
var orm = {
	all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
	connection.query(queryString, function(err,result) {
		if(err) {
			throw err;
		}
		cb(result);
	});
  },
	create: function(table,cols,vals,cb) {
		var queryString = "INSERT INTO " + table;

	    queryString += " (";
	    queryString += cols.toString();
	    queryString += ") ";
	    queryString += "VALUES (";
	    queryString += printQuestionMarks(vals.length);
	    queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result){
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	//an exmaple of objColVals {burner_name: cheese burger, devored: false}
	update: function(table, objColVals,condition,cb) {
		var queryString = "UPDATE " + table;

	    queryString += " SET ";
	    queryString += objToSql(objColVals);
	    queryString += " WHERE ";
	    queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(err, result){
			if(err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;