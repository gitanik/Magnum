$(window).scroll(function() {
	$(window).scrollTop();
	
	if($(this).scrollTop() > 500) {
		console.log(">135");
		$(".nav-menu").addClass("fixed");
		$(".white-above").addClass("fixed1");
	}else{
		$(".nav-menu").removeClass("fixed");
		$(".white-above").removeClass("fixed1");
	}
});

