/* Zen Client, GNU GPL v3.0, getzen.io */
// Tab handling

var $ = require("jquery");

$('.nav li a').click(function(e) {

        $('.nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();
    });

var counter = 0;

exports.create = function(name){
	counter++;
	$('.nav-tabs').append("<li><a id=\"" + counter + "\" href=\"#\">" + name + "</a></li>");
	$('.nav li a').click(function(e) {

        $('.nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();
    });
}

exports.close = function(name){
	name = "#" + name;
	$(name).css("display", "none");
}