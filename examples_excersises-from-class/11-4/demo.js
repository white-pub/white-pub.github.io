window.onload = function() {
	
	//Add an event listener using on() to all matched elements
	/*$('body > button').on('click',function(){// 'on' 就像'turn on the light'
		alert('Button clicked!');
	} );*/

	//Add an enent listener using on() to the second matched element
	$('body > button').eq(1).on('click',function(){
		//用eq(xxx)指定某一個(序號從零開始算)
		alert('Button clicked!');
	} );

	$('body > input').eq(0).on('keyup', function(){//keyup 是 keypress 的一個分支
		let inputVal = $(this).val(); // val() = value (此指使用者鍵盤輸入的內容)
		let textarea = $('body > textarea').eq(0);
		textarea.html(inputVal);//html(...)把...內容輸入到html這個地方，複寫/更改原內容
	});
}