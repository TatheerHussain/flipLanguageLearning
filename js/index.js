$('.cta a').click(function() {
	$('html,body').animate({
		scrollTop: $('#tours').offset().top
	}, 500);
	return false;
});

$('#tours li').on('click', function() {
	$('#location').val($('img', this).attr('alt'));
});



// var body = document.getElementById("main-header");
// var isBlue = false;
// setInterval(function(){
// 	if(isBlue){
// 		body.style.background ="purple";
// 	}
// 	else{
// 		body.style.background = "grey";
// 	}
// 	isBlue = !isBlue;
// 	},2000);
// 	