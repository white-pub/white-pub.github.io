//console.log('Hi!');

//window: the entire browser window

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

//console.log(winWidth);
//console.log(winHeight);

//window.location.href = 'https://google.com'; 
//瀏覽器會在使用指點開網頁後，直接把使用者導向google.com(然後就原本的網站沒關係了)

//window.location.pathname = '/nosuchpath';
//使用需求範例:讓不同分頁放在不同資料夾，有不同網址


window.onload = function(){//onload讓使用者在網頁整個框架都完整展開、架構好(這個過程稱為onload)才存取內容，較不易出錯。
	
	//alert('website is ready!')
	//window.document :the entire HTML document
	//document :the entire HTML document
	let siteTitle = document.title;
	//console.log(siteTitle);

	let allDivs = document.getElementsByTagName('div');//取得的元件會儲存到陣列內
	//console.log(allDivs[0]);
	//console.log(allDivs[1].innerText);
	//console.log(allDivs.length);

	let enById = document.getElementById('div3');
	//console.log(enById.innerText);

	let classEms = document.getElementsByClassName('group1');
	//console.log(classEms[0].innerText);

	let emBySelector = document.querySelector('div > p');//first match only
	//console.log(emBySelector.innerText);

	let emsBySelector = document.querySelectorAll('div > p');//all matches
	console.log(emsBySelector.length);
};
