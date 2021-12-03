var numArray = [1,5,2,11,7];//array就是一組有順序的資料，類似火車車廂，車廂有編號，車廂內都能放東西。最適合拿來儲存一系列同性質的資料

console.log(numArray[0]);//First position
console.log(numArray[1]);//Second position

console.log(numArray[4]);//last position
numArray[4] = 18;//替換特定車廂的內容
console.log(numArray[4]);//last posotion with a different value

console.log(numArray);//Entire array

var students = ["Tom", "Mary", "victoy", 'John'];

//Mixed types of data in an array; 可執行，but not recommanded，因為使用跟提取時(人類使用者)易混淆
//var profile = ['TY Chen', 'NTHU', 40, 180, 72];

//console.log(profile[0]);

//var name = 'TY Chen', affiliation = 'NTHU', age =40;



//開始建立object
var emptyObj = {};//An empty object

//A good profile object
var profile = {
	name:'TY Chen',
	age:39,
	affiliation:'NTHU',
	height: 180,
	weight; 72
};

//console.log(profile.name);//get value of the "name" key 
//console.log(profile['name']);//same，但是更有彈性(還是是指再下面那個?)

var key = 'name';
//console.log(profile[key]);
key = 'age';
//console.log(profile[key]);

profile.name = 'Tsung-Ying Chen';//Change the "name" key
console.log(profile.name);

profile.gender = 'male';//add a new key named 'gender'
console.log(profile.gender);

delete profile.gender;//delete a key
//console.log(profile.gender);//<-印出來會出錯，"gender" undifined

//a more complex object
profile = {
	name:'TY Chen',
	age:39
	affiliation:'NTHU',
	height: 180,
	weight; 72
	contact:{
		home: 227682149,//Don't call!-聽說都是捏造的
		mobile:[937149506, 956771471, 982983143],//Don't call!-聽說都是捏造的
		email: 'chen.ty@mx.nthu.edu.tw'
	}//the object in a onject
}

//get a key from an object that is stored in a key of another object
//console.log(profile.contact.home);

//console.log(profile.contact.mobile[1]);

function printMsg(msg){
	console.log(msg);
}

function simpleCalc(x,y){
	console.log(x+y);
}

var demoFuncs = {
	print:printMsg,
	calc: simpleCalc
};

demoFuncs.print('Message printed!');
demoFuncs.calc(5,7);

// object-oriented programmimg