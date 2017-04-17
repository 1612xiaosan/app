window.onload=function(){
	var box=document.querySelector('.zxq-ysjf13');
	var box1=document.querySelector('.zxq-bbox');
	var img=document.querySelector('.zxq-bbox .zxq-gb');
	box.addEventListener('touchstart',function(){
		box.addEventListener('touchmove',function(){
			animate(box,{left:-50},200);
		})
	})
	img.addEventListener('touchstart',function(){
		box1.style.display='none';
	})
	
}

