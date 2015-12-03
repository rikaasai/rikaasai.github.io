$(document).ready(function(){
    // ここに実際の処理を記述します。
	var swiper = new Swiper('.swiper-container', {
		effect : 'slide',
		speed: 1000,
    	pagination: '.swiper-pagination',
    	nextButton: '.button-next',
		prevButton: '.button-prev',
    	calculateHeight: true,
    	resizeReInit: true,
    	paginationClickable: true,
    	loop: true,
    	autoplay: 3000,
	});

});