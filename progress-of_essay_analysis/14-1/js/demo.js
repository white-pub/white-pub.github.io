window.onload = function(){
	$('nav > a:first-of-type').on('click',function(event){//event 只是個名稱，事實上可以隨便命名，xyz之類的都沒差
		event.preventDefault();//stop the navigation default action of a hyperlink
		// Take all the non-first <a> elements under <nav> and apply the toggle() function.
		$('nav > a:not(:first-of-type)').toggle(600);
		// this = clicked first <a> element under <nav>; toggleClass() = add/remove a class name
		$(this).toggleClass('close');

	});
}