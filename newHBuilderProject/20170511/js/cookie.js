function setCookie(c_name, c_value) {
	var nowT = new Date();
	nowT.setDate(20);
	document.cookie = c_name + "=" + c_value + ";expires=" + nowT.toGMTString();
}

function getcookieTest(c_name){
	var rec = "";
	if(document.cookie.length<=0){
		rec = "";
	}else{
		var c_startIndex = document.cookie.indexOf(c_name);
		
		if(c_startIndex!=-1){
			var v_startIndex = c_startIndex + c_name.length + 1;	
			var v_endIndex = document.cookie.indexOf(";",v_startIndex);
			if(v_endIndex==-1){
				v_endIndex = document.cookie.length;
			}
			rec = document.cookie.substring(v_startIndex, v_endIndex);
		}
		rec = "";
	}
	return rec;
}



function getCookie(c_name) {
	if(document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=")
		if(c_start != -1) {
			c_start = c_start + c_name.length + 1
			c_end = document.cookie.indexOf(";", c_start)
			if(c_end == -1) c_end = document.cookie.length
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return ""
}