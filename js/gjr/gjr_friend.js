$(document).ready(function(){
	$('.gjr_shead').children().each(function(){
		$(this).click(function(){
			$('.gjr_shead').find('span').removeClass('gjr_first');
			$(this).addClass('gjr_one').siblings($(this)).removeClass("gjr_one");
			$(this).find('span').addClass('gjr_first');
		})
	})
	$('.gjr_share>img:first').click(function(){
		$('body,html').toggleClass('hidden');
		$('.gjr_alert').slideToggle()
	})
	
})
