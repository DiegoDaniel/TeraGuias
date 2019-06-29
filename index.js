$(document).ready(function() {
	
	$("#navBarHtml").load("templates/navBar.html", function(){
		$("#labelMenuNav").addClass("d-none");

		$(".nav-link").on("click",function(event){
			event.preventDefault();
			event.stopPropagation()
		});
	});	
});