const scroll = new SmoothScroll('.navbar a[href*="#"]', {
	speed: 750,
	customEasing: function (time) {
		return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

	}
});

	
Galleria.loadTheme('js/lib/galleria/themes/classic/galleria.classic.min.js');
Galleria.configure({
	autoplay: '15500',
    transition: 'fade',
	lightboxFadeSpeed: '2000',
	lightboxTransitionSpeed: '3000',
	idleTime: '545',
	
	easing: 'galleriaIn',
    imageCrop: true,
	
	thumbnails: 'empty',
	popupLinks: 'true',
	showInfo: 'false',

	imagePan: 'true',
	imagePanSmoothness: '30',

});

Galleria.run('.galleria');