$(function(){
	$('.gjr_voice').on('touchstart',function(){
		$('body,html').addClass('hidden')
		$('.gjr_alert').show();
		
	})
	$('.gjr_alert>a').on('touchstart',function(){
		$('.gjr_alert').hide();
		$('body,html').removeClass('hidden')
		
	})
})
