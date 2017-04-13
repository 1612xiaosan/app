$(document).ready(function(){
//	console.log($('.yzf-form'))
	$('.yzf-form input').focus(function(value){
//		console.log(1)
		$(this).attr('value','');
	})
})
