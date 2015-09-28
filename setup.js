$(document).ready(function(){
	$("li").click(function(){
		if($(this).attr('data-state') == 'live'){
			$(this).attr('data-state', 'dead');
		} else {
			$(this).attr('data-state', 'live');
		}
	});

	$("#start-btn").click(function(){
		main();
	})
})
