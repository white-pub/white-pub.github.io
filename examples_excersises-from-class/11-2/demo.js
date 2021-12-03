//因為把會用到jQuery的程式碼放到window.onload裡面，所以在html那邊如果jQuery比demo.js晚引入，可能不會出事。
//絕對會出事的:html那邊jQuery比demo.js晚引入，且這邊用到jQuery的程式碼沒放到window.onload裡面，直接放在文件一開頭

window.onload = function(){
	//  $ = jQuery ； $() = document.querySelectorAll() --> 基本上就是找出「所有」符合條件的東西並「全部」回傳
	let ps = $('body > p');
	//$() 意思相同於 jQuery() ,因為$代表jQuery
	//console.log(ps);

	let firstP = $('body > p#first');
	//console.log(firstP);
	let specialPs = $('body > p.special');
	console.log(specialPs)

}