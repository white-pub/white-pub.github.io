function anotherMsg() {
	alert('I say the mouse cursor has entered the first div!');
}


window.onload = function() {
	let bodyEm = document.querySelector('body');//querySelector只會回傳第一個符合條件的東西
	bodyEm.addEventListener('click', function() {
		//此function稱為Callback function(因為事件發生後它才會被call到)
		//alert('Body is clicked!');
	});//當偵測到event:click發生後，會啟動後面的function。
	let firstDiv = document.querySelector('div');
	//firstDiv.addEventListener('mouseenter', anotherMsg);//anotherMsg加了小括號代表要馬上呼叫它-anotherMsg()，這樣就不是callback message了，因為會馬上執行。

	//let button = document.querySelector('button');
	let changeButton = document.getElementById('changeDiv1');
	changeButton.addEventListener('click', function(){
		firstDiv.style.backgroundColor = 'red';
	})

	let changeResetButton = document.getElementById('changeResetDiv1');
	changeResetButton.addEventListener('click', function(){
		firstDiv.classList.toggle('gold');//toggle:把類別名稱內原本沒有的加上去，如果原本有，就拿掉。(類似switch，原本沒開，按一下開；原本有開，按一下關)
	})
};
//querySelector只選出第一個符合條件的
//querySelectorAll會選出所有符合條件的