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
	$('.hsf-bottom').on("click",function(){
		$('.hsf-qrdd-tianjiayinhangka').css("display","none");
		$('.hsf-qrdd-threeshibie').css("display","block");		
		$('.hsf-qrdd-zhiwenshibie').css("display","block");
	})
	$('.hsf-qrdd-yinhangkabottom').on("click",function(){
		$('.hsf-qrdd-xuanzeihangka').css("display","none");
		$('.hsf-qrdd-baowei').css("display","none");		
		$('.hsf-qrdd-tianjiayinhangka').css("display","none");
		$('.hsf-qrdd-tianjiayinhangka').css("display","none");
		$('.hsf-qrdd-threeshibie').css("display","block");
		$('.hsf-qrdd-zhiwenshibie').css("display","block");
	})
//	支付方式的转换
let zhiwenshibie=document.getElementById("zhiwenshibie");
let mimashibie=document.getElementById("mimashibie");
let tuanshibie=document.getElementById("tuanshibie");
 zhiwenshibie.addEventListener("touchmove",function(){
 	zhiwenshibie.style.display="none";
 	mimashibie.style.display="block";
 })
 mimashibie.addEventListener("touchmove",function(){
 	mimashibie.style.display="none";
 	tuanshibie.style.display="block";
 })
  tuanshibie.addEventListener("touchmove",function(){
 	tuanshibie.style.display="none";
 	zhiwenshibie.style.display="block";
 })
$('.hsf-qrdd-guanbi').click(function(){
	$('.hsf-qrdd-threeshibie').css("display","none");
		$('.hsf-qrdd-baowei').css("display","block");
})
	
})

