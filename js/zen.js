/*! ZEN Client, getzen.io, Apache License v2.0 */
// Main JS

/**
 * A fix for client-side components to work via require.
 */
global.document = window.document;

var $ = require("jquery");
var files = require("./js/file.js");
var key = require("./js/keymaster.js");

$(document).ready(function(){

// ACE Editor
var editor = ace.edit('editor');
editor.getSession().setMode('ace/mode/javascript');
editor.setTheme('ace/theme/monokai');
document.getElementById('editor').style.fontSize='18px';
	
console.log(files.read("/etc/hosts"));

});
