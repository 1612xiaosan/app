$(document).ready(function(){
	
//	数字相加
	$('.shuliang').on('touchstart',function(){
		let value=$('.shuliang span').text();
//		console.log(value)
		$('.shuliang span').html(parseInt(value)+1);
	})
	$('.shuliang2').on('touchstart',function(){
		let value=$('.shuliang2 span').text();
//		console.log(value)
		$('.shuliang2 span').html(parseInt(value)+1);
	})
	$('.shuliang3').on('touchstart',function(){
		let value=$('.shuliang3 span').text();
//		console.log(value)
		$('.shuliang3 span').html(parseInt(value)+1);
	})
	
//	颜色变化
	$('.gjr_color > span:first-child ~ span').each(function(index,value){
//		console.log($(this))
		$(this).on('touchstart',function(){
//			console.log($(this))
			$(this).addClass('yzf-active').siblings().removeClass('yzf-active')
			$('.gjr_img img').removeClass('yzf-active2').eq($(this).index()-1).addClass('yzf-active2')
		})
	})
	$('.gjr_color2 > span:first-child ~ span').each(function(index,value){
//		console.log($(this))
		$(this).on('touchstart',function(){
//			console.log($(this))
			$(this).addClass('yzf-active3').siblings().removeClass('yzf-active3')
			$('.gjr_img2 img').removeClass('yzf-active2').eq($(this).index()-1).addClass('yzf-active2')
		})
	})
<<<<<<< HEAD
	$('.gjr_color3 > span:first-child ~ span').each(function(index,value){
		console.log($(this))
		$(this).on('touchstart',function(){
//			console.log($(this))
			$(this).addClass('yzf-active').siblings().removeClass('yzf-active')
			$('.gjr_img3 img').removeClass('yzf-active2').eq($(this).index()-1).addClass('yzf-active2')
		})
	})
	$('.gjr_color22 > span:first-child ~ span').each(function(index,value){
		console.log($(this))
		$(this).on('touchstart',function(){
//			console.log($(this))
			$(this).addClass('yzf-active3').siblings().removeClass('yzf-active3')
			$('.gjr_img3 img').removeClass('yzf-active2').eq($(this).index()-1).addClass('yzf-active2')
		})
	})
=======
//	$('.yzf-jiesuan >img:first-child').click(function(){
//		location.href()
//	})
>>>>>>> 5467ec6f9b44f953bd61bd384fded8f36e879577
	
})
