window.onload=function(){
	let box=document.querySelector('.zxq-ysjf13');
	let box1=document.querySelector('.zxq-bbox');
	let img=document.querySelector('.zxq-gb');
	box.addEventListener('touchstart',function(){
		box.addEventListener('touchmove',function(){
			animate(box,{left:-50},200);
		})
	})
	img.addEventListener('touchstart',function(){
		box1.style.display='none';
	})
	
}

