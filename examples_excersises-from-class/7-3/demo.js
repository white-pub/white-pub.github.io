//單行註解:在javascript,兩條反斜線被視為comment

/*
Multi-line comment:
內容很多時適用。
註解小用法:可以暫時讓某些功能失效/隱藏(因為變成註解了)，方便測試各功能
*/



// A "statement" ends wuth a semi-colon
console.log('This is aan embedded script.');

// A "code block" is defined with a pair of curly brackets{}
{
	//console.log('This message isfrom a code block.')
}

//variable
var emptyVar;// A atatement that creates a variable called "nothing"
console.log(emptyVar);//undefined

var num=5;//A statement that creates a variable called "num" with a default numeric value
//console.log(num);-->console.log功能之一:後台print變數讓操作者看到

var x=10, y=20,z=40;//create multiple variables in one single statement

//var x=20;//potential Error(因為重複定義x)

x=25//Change the value of a variable(開頭沒有var)
//console.log(x);

var name='mike';//Create a variable with a string(字串)(單引號雙引號沒差，一致就好) as its default value
//javascript 變數裡可以放各種類型的資料，不必特別定義
var anotherName="John"//a pair of double-quotation marks also work for a string
//var badQuotation='Ah"; //Different quotation mark causes error 

x='This is a variable called x';//Change the value to a different type of data; not recommended
//console.log(x)
//命名變數時建議一致，變數的資料類型也不要換來換去，易搞混
//javascript 把大寫跟小寫視為不同的符號，所以不能搞錯。
//javascript 變數名稱限制:不能有空格，不能以數字開頭。「可以」使用各種神奇的文字跟符號，只要那些不是reserved words



