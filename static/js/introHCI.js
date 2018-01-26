'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("The text was changed!");
	});
	$(".project p").hide();

$("#testjs").click(function(){
	$(this).text("I changed the text!");
	$(this).addClass("active");
	$(".jumbotron p").toggleClass("active");
});
$(".project").click(function(e){
	e.preventDefault();
	projectClick(e);
	return false;
})
function projectClick(e) {
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#7fff00");
    $(".project p").fadeToggle();
    return false;
}
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}