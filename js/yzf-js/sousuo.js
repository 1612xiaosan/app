$(document).ready(function(){
	 var appendNumber = 5;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        centeredSlides: false,
        paginationClickable: false,
        spaceBetween: 30,
    })
    
    
    
//  获取焦点
	$('.yzf-form input').focus(function(value){
//		console.log(1)
		$(this).attr('value','');
		location.href('../../html/yzf-html/sousuo2.html');
	})
})