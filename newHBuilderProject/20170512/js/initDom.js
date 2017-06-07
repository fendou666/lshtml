
//function initHtmlPrimary(){
//			for (var i=1; i<=5;i++) {
//				var divP = document.createElement("img");
//				divP.style.marginTop = (i-1)*50 + "px";
//				divP.id = "poker0" + i;
//				divP.src = "img/back.png";
//				document.getElementById("area1").appendChild(divP);
//					divP.addEventListener("click", clickP('0'+i));
//				
//				document.getElementById("poker0" + i).onclick = function('0'+i){clickP('0'+i);};
//				// 总结事件不可以直接赋值 
////					divP.onclick = function(){
////						console.log('0'+i);
////						clickP('0'+i);
////					};
////					divP.onclick =  testEvent(i);
////					divP.onclick =  testEvent(0);
//			}
//}
//			function testEvent(value){
//				console.log("事情传值" + value);
//			}
//function initHtmlPrimary(){
//	
//	for (var i=1; i<=5; i++) {
//		var divP = document.createElement("img");
////		divP.style.marginTop = (i-1)*50 + "px";
//		divP.id = "poker0" + i;
//		divP.src = "img/back.png";
//		divP.changeSign = false;
//		document.getElementById("area" +i).appendChild(divP);
//	}
//	initEvent1();
//}

// columns为5， rows为 toutle/columns  toutle为5/30/52

function initHtml(columns, rows, toutle){
	var count = 1;
	for (var i=1; i<=columns;i++) {
		for(var m=rows*(i-1)+1, j=m; j<m+rows; j++){
			var divP = document.createElement("img");
			divP.style.marginTop = (j-m)*50 + "px";
			divP.id = "poker" + (j<10?"0":"") + j;
			divP.src = "img/back.png";
			divP.changeSign = false;
			document.getElementById("area" + i).appendChild(divP);
			count++;
			if(count == toutle+1){
				initEvent1(toutle);
				return;
			}
		}
	}
}

function initEvent1(max){
	console.log("max 是");
	console.log("max 是" + max);
	for(var i=1;i<=max;i++){
		var pos = i<10?"0"+i:""+i;
		document.getElementById("poker" + pos).onclick = function(){clickP(this);};
		console.log("poker" +pos);
	}			
}

