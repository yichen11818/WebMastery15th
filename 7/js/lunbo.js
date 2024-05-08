window.onload = function(){
	(function(lib){
		let app = document.getElementById('app');
		let listImg = document.querySelector('.list-img');
		let left = document.querySelector('.left');
		let right = document.querySelector('.right');
		let timer =null;
		let index = 0;
		let pause = true;
		function rightBth (){
			if(index===5){
				//当图片到移动最后一张的时候，通过修改属性，去掉过渡，使图片变成第一张
				listImg.style.transition = 'none';
				listImg.style.left = 0;
				//为什么用settimeout包裹起来，因为给上面两行代码赋值起作用的等待时间
				setTimeout(function(){
					//加上0.5秒过渡到第2张的动画
					index = 1;
					listImg.style.left = -index * 1500 +'px';
					listImg.style.transition = '0.5s ease';
				},0)
			}else{
				index++;
				listImg.style.left = -index * 1500 +'px';
			}
		}
		left.onclick = function(){
			if(index === 0){
				//当图片到移动第一张的时候，通过修改属性，去掉过渡，使图片变成最后一张
				listImg.style.transition = 'none';
				listImg.style.left = -5 * 1500 +'px';
				//为什么用settimeout包裹起来，因为给上面两行代码赋值起作用的等待时间
				setTimeout(function(){
					//加上0.5秒过渡到第5张的动画
					index = 4;
					listImg.style.left = -index * 1500 +'px';
					listImg.style.transition = '0.5s ease';
				},0)
			}else{
				index--;
				listImg.style.left = -index *1500 +'px';
			}
		}
		right.onclick = rightBth;
		timer = setInterval(rightBth, 3000);
		app.onmouseenter = function(){
			if(pause){
				clearInterval(timer);
				pause = false;
			} 
		}
		app.onmouseleave = function(){
			if(pause == false){
				timer = setInterval(rightBth, 3000);
				pause = true;
			} 
		}
	})(window, window['lib'] || (window['lib'] = {}));
}