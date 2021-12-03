window.onload = function(){
	//Mixing jQuery codes with JavaScript codes: Bad! 
	let ps = $('body > p');
	//console.log(ps[0]);//可以正確取出，但是這裡取得陣列內元件的方式是屬於javaScript的，後續同個東西就無法再用jQuery的功能，反之亦然

	//Get the last element in JavaScript and jQuery
	//Plain JavaScript
	let psJS = document.querySelectorAll('body > p');
	let emLengthJS = psJS.length; //內容為陣列
	let lastPosJS = emLengthJS -1;
	//console.log(psJS[lastPosJS]);

	//jQuery
	let psJQ = $('body > p');
	//console.log(psJQ.eq(-1));//eq是equvalent,equal的縮寫
	//console.log(psJQ.eq(0));

	//get HTML from an element: innerHTNML vs. html()
	//console.log(psJQ[lastPosJS].innerHTML);//Plain JaveScript
	//console.log(psJQ.eq(-1).html());
	//console.log(psJQ.eq(-1).innerHTML);//jq包裝陣列的方式跟javascript不一樣，所以盡量別混用
	//Mixing jQery with JavaScript = 'undefined'

	//Change the HTML contements of an element
	//psJQ[lastPosJS].innerHTML = 'content chamged';//Plain JavaScript
	psJQ.eq(-1).html('content changed!');//jQuery
	//jq:  html() -只是取出html的內容；html('xxxx') -把該html內容替換成xxxx

}