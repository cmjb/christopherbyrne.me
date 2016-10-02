$(window).load(function() {    

	var theWindow        = $(window),
	    $bg              = $("#wrapper2"),
	    aspectRatio      = $bg.width() / $bg.height();
	    			    		
	function resizeBg() {
		
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}
					
	}
	                   			
	theWindow.resize(resizeBg).trigger("resize");

});

$(document).ready(function()
{
	$('#wrapper2').hide();
	$('#wrapper2').fadeIn(500);
	$('#wrapper').hide();
	$('#wrapper').fadeIn(600);
	$('.aka').hide();
	$('.navitem').hide();
	$('.title').hide();
	$('.subtitle').hide();
	$('.icons').hide();
	$('.desc').hide();
	$('.navitem').fadeIn(5000);
	$('.title').animate({
		opacity: 1,
		left: "+=50",
		width:"toggle"
	}, 2000, function() {

		$('.subtitle').animate({
		opacity: 1,
		left: "+=50",
		height:"toggle"
	}, 1000, function() {
		$('.icons').animate({
		opacity: 0.75,
		left: "+=50",
		height:"toggle"
	}, 2000, function() {
		$('.desc').animate({
		opacity: 0.75,
		left: "+=50",
		height:"toggle"
	}, 2000, function() {
		
	});
	});
	});
	});
});