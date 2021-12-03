window.onload = function () {
	///修改後
	let button = document.querySelector('button');
	//the 'event' information is passed over by the browser
	button.addEventListener('click',function(event){
		event.stopPropagation();//Tn the object named 'event', there's a stopPropagation function.
		alert('button clicked!');
	});
	let div = document.querySelector('div');
	div.addEventListener('click',function(){
		this.style.backgroundColor = 'red';
	});


	/*沒控制event擴散前的情況
	let button = document.querySelector('button');
	button.addEventListener('click',function(){
		alert('button clicked!');
	});
	let div = document.querySelector('div');
	div.addEventListener('click',function(){
		this.style.backgroundColor = 'red';
	});*/


};