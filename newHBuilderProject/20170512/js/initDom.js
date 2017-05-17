
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
function initHtmlPrimary(){
	
	for (var i=1; i<=5; i++) {
		var divP = document.createElement("img");
//		divP.style.marginTop = (i-1)*50 + "px";
		divP.id = "poker0" + i;
		divP.src = "img/back.png";
		divP.changeSign = false;
		document.getElementById("area" +i).appendChild(divP);
	}
	initEvent1();
}


function initHtmlmiddleRank(){
	for (var i=1; i<=5;i++) {
		for(var m=6*(i-1)+1, j=m; j<m+6; j++){
			var divP = document.createElement("img");
			divP.style.marginTop = (j-m)*50 + "px";
			divP.id = "poker" + (j<10?"0":"") + j;
			divP.src = "img/back.png";
			document.getElementById("area" + i).appendChild(divP);
		}
	}
	initEvent2();
}

function initHtmlAdvanced(){
	
}

function initEvent1(){
	document.getElementById("poker01").onclick = function(){clickP('01');};
	document.getElementById("poker02").onclick = function(){clickP('02');};
	document.getElementById("poker03").onclick = function(){clickP('03');};
	document.getElementById("poker04").onclick = function(){clickP('04');};
	document.getElementById("poker05").onclick = function(){clickP('05');};
}
function initEvent2(){
	initEvent1();
	for(var i=6;i<=30;i++){
		var pos = i<10?"0"+i:""+i;
		document.getElementById("poker" + pos).onclick = function(){clickP(pos);};
	}
//	document.getElementById("poker06").onclick = function(){clickP('06');};
//	document.getElementById("poker07").onclick = function(){clickP('07');};
//	document.getElementById("poker08").onclick = function(){clickP('08');};
//	document.getElementById("poker09").onclick = function(){clickP('09');};
//	document.getElementById("poker10").onclick = function(){clickP('10');};
//	document.getElementById("poker11").onclick = function(){clickP('11');};
//	document.getElementById("poker12").onclick = function(){clickP('12');};
//	document.getElementById("poker13").onclick = function(){clickP('13');};
//	document.getElementById("poker14").onclick = function(){clickP('14');};
//	document.getElementById("poker15").onclick = function(){clickP('15');};
//	document.getElementById("poker16").onclick = function(){clickP('16');};
//	document.getElementById("poker17").onclick = function(){clickP('17');};
//	document.getElementById("poker18").onclick = function(){clickP('18');};
//	document.getElementById("poker19").onclick = function(){clickP('19');};
//	document.getElementById("poker20").onclick = function(){clickP('20');};
//	document.getElementById("poker21").onclick = function(){clickP('21');};
//	document.getElementById("poker22").onclick = function(){clickP('22');};
//	document.getElementById("poker23").onclick = function(){clickP('23');};
//	document.getElementById("poker24").onclick = function(){clickP('24');};
//	document.getElementById("poker25").onclick = function(){clickP('25');};
//	document.getElementById("poker26").onclick = function(){clickP('26');};
//	document.getElementById("poker27").onclick = function(){clickP('27');};
//	document.getElementById("poker28").onclick = function(){clickP('28');};
//	document.getElementById("poker29").onclick = function(){clickP('29');};
//	document.getElementById("poker30").onclick = function(){clickP('30');};
}
function initEvent3(){
	initEvent2();
	document.getElementById("poker31").onclick = function(){clickP('31');};
	document.getElementById("poker32").onclick = function(){clickP('32');};
	document.getElementById("poker33").onclick = function(){clickP('33');};
	document.getElementById("poker34").onclick = function(){clickP('34');};
	document.getElementById("poker35").onclick = function(){clickP('35');};
	document.getElementById("poker36").onclick = function(){clickP('36');};
	document.getElementById("poker37").onclick = function(){clickP('37');};
	document.getElementById("poker38").onclick = function(){clickP('38');};
	document.getElementById("poker39").onclick = function(){clickP('39');};
	document.getElementById("poker40").onclick = function(){clickP('40');};
	document.getElementById("poker41").onclick = function(){clickP('41');};
	document.getElementById("poker42").onclick = function(){clickP('42');};
	document.getElementById("poker43").onclick = function(){clickP('43');};
	document.getElementById("poker44").onclick = function(){clickP('44');};
	document.getElementById("poker45").onclick = function(){clickP('45');};
	document.getElementById("poker46").onclick = function(){clickP('46');};
	document.getElementById("poker47").onclick = function(){clickP('47');};
	document.getElementById("poker48").onclick = function(){clickP('48');};
	document.getElementById("poker49").onclick = function(){clickP('49');};
	document.getElementById("poker50").onclick = function(){clickP('50');};
	document.getElementById("poker51").onclick = function(){clickP('51');};
	document.getElementById("poker52").onclick = function(){clickP('52');};
}

