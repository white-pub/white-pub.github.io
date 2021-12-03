window.onload = function() {
	let firstP = document.querySelector('div > p');
	//console.log(firstP.style);//顯示出各種css特性
	firstP.style.backgroundColor = 'red';
	firstP.style.color = 'white';

	let allDivPs = document.querySelectorAll('div > p');
	allDivPs[1].style.cssText = 'background-color: green; color: pink;';//???check
	
	let allDivs = document.getElementsByTagName('div');
	//allDivs[4].style.cssText = 'background-color: gold; color: white;';
	//allDivs[5].style.cssText = 'background-color: gold; color: white;';
	//console.log(allDivs[4].classList);//!!! classList -L要大寫!!!//方法三:要配合html head 的 css style設定
	allDivs[4].classList.add('gold');
	allDivs[5].classList.add('gold');
};