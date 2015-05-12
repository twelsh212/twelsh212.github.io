$(document).ready(function(){
	var winSize = ($(window).width()) * .08;
	$("textarea").attr("cols", winSize);
	$("input.jourContent").attr("value", (getDOW() + ": " + $.datepicker.formatDate('mm/dd/yy', new Date())));

});

function getDOW(){
	var day = new Date().getDay()
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return days[day];
}

