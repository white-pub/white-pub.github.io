function printMsg(msg){
	let finalMsg = "Message: " + msg/*接收到的內容*/;
	console.log(finalMsg); 
}

printMsg("test");/*<--內容會傳給printMsg，並存至變數msg內*/
printMsg("another test");

function userMsg(name, msg){
	let finalMsg=name+"says: "+msg;
	console.log(finalMsg);//<-在console印出該資訊(變數)
}

//userMsg("victor","suprise!");
//userMsg("Mary","I love Victot!");

//資料可以傳給function，function也可以傳出資料
function complexCale(x,y) {
	let result=0;
	result=x*y;
	result=result/(x -y);
	result = result * y - x;
	return result;//<-回傳資料的重點。「return」也標示該段程式碼的結尾，在return以後的程式碼就會被忽視，不會被執行。
	alert("Not executed QQ.");
}

var calcResault = complexCale(4,6);
console.log(calcResault);

