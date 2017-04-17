$(document).ready(function(){
	
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
})