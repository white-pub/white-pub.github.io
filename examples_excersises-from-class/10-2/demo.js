/*for (i = 0; i < 10; i++) {
	console.log(i);
	if(i*10 > 50) {
		break;
	}
}*/


window.onload = function() {
	let button = document.querySelector('body > button');
	button.addEventListener('click',function(){
		let divs = document.getElementsByTagName('div');
		for(i=0 ; i<divs.length ; i++){
			let em = divs[i];
			em.style.backgroundColor = 'red';
			if(i !== 1) {
				em.style.fontSize = '200%';
			}

		}
	})
}