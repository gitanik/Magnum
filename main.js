$(document).ready(function() {
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

   $.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
   }
$('.nav-menu').scrollView();
$('.scroll').click(function (event) {
  event.preventDefault();
  $('.nav-menu').scrollView();
});
$('.nav-menu').scrollView();
$('.scroll').click(function (event) {
  event.preventDefault();
  $('.nav-menu').scrollView();
});
 
$('.portfolio').scrollView();
$('.scroll1').click(function (event) {
  event.preventDefault();
  $('.portfolio').scrollView();
});

});