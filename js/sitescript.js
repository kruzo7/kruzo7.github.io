$(window).on("load", function () {
	// Animate loader off screen
	$(".loader").fadeOut("slow");
	$("#year").text(new Date().getFullYear());
});

bootstrap.Carousel.Default.interval = 500;
