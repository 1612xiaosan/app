$(document).ready(function(){
	$('.hsf-qrdd-yinghangka').on("click",function(){
		$('.hsf-qrdd-baowei').css("display","none");
		$('.hsf-qrdd-querenzhifu').css("display","block");
	})
	$('.hsf-qrdd-querenanniu').on("click",function(){
		$('.hsf-qrdd-querenzhifu').css("display","none");
		$('.hsf-qrdd-xuanzeihangka').css("display","block");
	})
	$('.hsf-qrdd-tianjia').on("click",function(){
		$('.hsf-qrdd-xuanzeihangka').css("display","none");
		$('.hsf-qrdd-tianjiayinhangka').css("display","block");
	})
	
	
	
})

