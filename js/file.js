/*! ZEN Client, getzen.io, Apache License v2.0 */
// File handling and utils.

var fs = require("fs");
var os =require("os");

exports.read = function(filepath){
	fs.readFile(filepath, 'utf8', function (err,data) {
	  if (err) {
		  return data.toString();
		return console.error("Error loading file: " + err);
	  }
	   return data.toString();
	});
}
