function testConcat(){
	var ary1 = new Array(1,2,34,21,22,1);
	var ary2 = new Array(3,4,43,11,24,3);
	var ary3 = ary1.concat(ary2);
	console.log("调用concat方法后")
	console.log(ary3.toString());
}

function testJoin(){
	var ary1 = new Array(3,51,23,12,3,21,3);
	console.log("调用join方法后");
	console.log(ary1.join("_"));
}

function testPop(){
	var ary1 = new Array(3,43,2,421,341,2);
	console.log("******调用pop后*******")
	console.log(ary1.pop());
	console.log(ary1.toString());
}

function testPush(){
	var ary1 = new Array(3,43,2,421,341,2);
	console.log("******调用push后*******")
	console.log(ary1.push(1,2,3,4,5));
	console.log(ary1.toString());
}

function testReverse(){
	var ary1 = new Array(3,43,2,421,341,2);
	console.log("******调用reverse后*******")
	console.log(ary1.reverse());
	console.log(ary1.toString());
}


function testShift(){
	var ary1 = new Array(3,43,2,421,341,2);
	console.log("******调用shift后*******")
	console.log(ary1.shift());
	console.log(ary1.toString());
}


function testSlice(){
	var ary1 = new Array(3,43,2,421,341,2);
	console.log("******调用slice后*******")
	console.log(ary1.slice(3));
	console.log(ary1.slice(333));
	console.log(ary1.toString());
}

function testSort(){
	var ary1 = new Array(3,43,2,421,341,2);
	console.log("******调用sort后*******")
	console.log(ary1.sort(function(a,b){return a-b}));
	console.log(ary1.toString());
}

function testSplice(){
	var ary1 = new Array(3,43,2,421,341,2);
	console.log("******调用splice后*******")
	/*删除指定位置，并且指定长度，并在删除位置添加n条数据*/
	console.log(ary1.splice(2, 3, 1,1,1));
	console.log(ary1.toString());
}

function testToSource(){
	var ary1 = new Array(3,43,2,421,341,2);
	console.log("******调用toSource后*******")
	//console.log(ary1.toSource());
	//document.write(ary1.toSource());
}

function testToLocaleString(){
	var ary1 = new Array(3,43,2,421,341,2);
	console.log("******调用toLocaleString后*******")
	console.log(ary1.toLocaleString());
}


function testUnshift(){
	var ary1 = new Array(3,43,2,421,341,2);
	console.log("******调用unshift后*******")
	console.log(ary1.unshift(1111,2222,3333,4444));
}

function testValueOf(){
	var ary1 = new Array(3,43,2,421,341,2);
	console.log("******调用valueOf后*******");
	console.log(ary1.valueOf());
}

testConcat();
testJoin();
testPop();
testPush();
testReverse();
testShift();
testSlice();
testSort();
testSplice();
testToSource();
testToLocaleString();
testUnshift();
testValueOf();


