window.onload = function(){
	$('body > div').on('click',function(){
		//Change one CSS property only
		//$(this).css('background-color','red');

		//Change multiple CSS properties
		let newCSS = {
			'background-color':'red',
			'font-size': '200%'
		};
		$(this).css(newCSS);
	});

	$('div > button').on('click',function(event) {
		event.stopPropagation();
		alert('Button clicked!');
	})
}