function changeDivCSS (){
	let buttonId = this.id;
	let divs = document.getElementsByTagName('div');
	if(buttonId === 'changeDiv1') {
		divs[0].style.cssText = 'background-color: red;width:100px; height: 40px;';

	}
	else if(buttonId === 'changeDiv2') {
		divs[1].style.cssText = 'background-color: black;width:60px; height: 150px;';
	}
	else {
		divs[2].style.cssText = 'background-color: gold;width:200px; height: 200px;';
	}
}


window.onload = function () {
	if (false /*條件*/) {
		//alert('true!');
	}
	else {
		//alert('false!');
	}

	//real conditions
	if(1 === 1) {
		//alert('true!');
	}//3個等號代表「完全相等」
	/*else {//else is optional, 不存在也沒關係
		alert('false!');
	}*/  //條件成立則執行if，不成立(false)則執行else

	//   !== means 'not equivanlent to'

	if(1 !== 2) {
		//alert('true!');
	}


	//Multiple seperate conditions
	if(2 === '2') {
		//alert('condition 1 is true');
	}
	else if('a' === 'a'){
		//alert('condition 2 is true');
	} 
	else{
		//alert('neither is true QQ.');
	}


	// AND vs. OR in the same line  !!在if else句式中，前一條件成立後，後面就不再執行
	if(2 === 2 && 15 ===15) {  // && means AND
		//alert('consition 1 is true')
	}
	else if(2 === 2 || 15 === 10){  //   || means OR
		//alert('condition 2 is true.');
	}
	else{
		//alert('neither is true');
	}

	document.getElementById('changeDiv1').addEventListener('click', changeDivCSS);
	document.getElementById('changeDiv2').addEventListener('click', changeDivCSS);
	document.getElementById('changeDiv3').addEventListener('click', changeDivCSS);
	//呼喚call back function時，除非要馬上執行，否則不能加()，不然沒被觸發也會執行。只給function名稱就好。

};