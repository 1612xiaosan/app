$(document).ready(function(){
	$('.gjr_shai').on('touchstart',function(){
		$('body,html').addClass('hidden');
		$('.gjr_alert').show();
	})
	$('.right').on('touchstart',function(){
		$('body,html').removeClass('hidden');
		$('.gjr_alert').hide();
	})
	$('.gjr_tab>li').on('touchstart',function(){
		$(this).find('h3,p,span').toggleClass('gjr').toggleClass('gjr_active')
	})
//	$('.gjr_big').on('touchstart',function(e){
////		console.log(e.offsetX)
//	})
	let tiao=document.querySelector('.gjr_big');
	let c2=document.querySelector('.circle2');
	let c1=document.querySelector('.circle1');
	
//	console.log(tiao)
	tiao.ontouchstart=function(e){
		let left=e.touches[0].pageX;
		c2.style.left=left+'px';
		let left1=e.touches[1].pageX;
		c1.style.left=left1+'px';
	}
//	tiao.ontouchstart=function(e){
//		let left=e.touches[0].pageX;
//		console.log(left)
//	}
})
