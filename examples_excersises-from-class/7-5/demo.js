//This is a code block
{
	var num = 1; //A numeric variable
}
console.log(num);//var在code block外，No problem, you will get 1.---東西一旦存進變數，就能在整個檔案讀到它。

//This is another code block
{
	let str = 'This is a string.'; // A local variable created with 'let'
	console.log(str); // The target string.
}

console.log(str); // Error:str is indefined.
//不需要一直用到的變數就用let就好，這樣才不會占空間、拖慢程式運作速度。