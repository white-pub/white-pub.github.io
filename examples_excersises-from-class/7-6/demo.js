//alert('This is an alert!');

function printMsg() {
	console.log('THis is a message in the console')
}

printMsg();

/*function functionname(){程式碼}*/

var varfunction = function(){
	console.log("This is a function stored in a variable");
}

varfunction();

/*
通常建議使用方法一建立function,因為這樣就算先呼叫該function，之後才建立function也沒問題，javascript在打開檔案時，會優先處理所有function，才去跑其他程式碼。
*/

alwaysDoFirst();

function alwaysDoFirst(){
	console.log("you can call this function anywhere in the script");
}

//callThisLater(); <-this line causes a error

var callThisLater=function(){
	console.log("you can only call this function after it is built")
}

callThisLater();