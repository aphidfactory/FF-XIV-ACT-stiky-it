
try { document.addEventListener('onLogLine', onLogLine); } catch (ex) { console.log("Core Error : onLogLine is not defined."); }


function onLogLine(data) {
	var obj = data.detail;
	var obj_pld = obj.payload;
	var msgName;
	var msgTxt;
	var msgDetail;

	//for(var key in obj){
	//	console.log(key + "::" + obj[key]);
	//}
	//console.log("-----");

	// 존잉
	if(obj.opcode == "1"){	//01은 위치 타입(아마)
		var objMM_key = obj_pld[1]; 
		viewMM(objMM_key);
	}

	var strpos = null;
	// 던전 진입 시 공략파일 확인
	if(obj.opcode == "0" && obj_pld[0]== "0039"){	//00은 아나운스 타입, 0039는 시스템 타입(아마)
		viewDG(obj_pld);
	}

	// 혼잣말로 키워드 확인할 때
	if(obj.opcode == "0" && obj_pld[0]== "0038"){	//00은 아나운스 타입, 0038은 혼잣말
		var retChk = viewDG(obj_pld);
		if(retChk != "chk"){
			var objMM_key = obj_pld[2]; 
			viewMM(objMM_key);
		}
	}

}

function viewMM(objMM_key){

	// 현재 위치를 표시 해 주고 화면 초기화.
	$('#footer').html( objMM_key );
	$('#content').html( '' );

	// 던전 외 공략파일 확인
	//공략이 없는 던전이다.
	if(typeof objMM[objMM_key] === 'undefined'){
		objMM_key_name = objMM_key;
		objMM_key = "Default";
	}

	msgName = objMM_key;
	msgTxt = objMM[objMM_key].txt;
	msgDetail = "";

	if(msgName === 'undefined' || msgName === null || msgName === "" || msgName === "Default"){
		msgName = objMM_key_name;
	}

	msgDetail = "<span class='title'>※ " + msgName + "</span><p class='detail'>" + msgTxt + "</p>";
	$('#content').html( msgDetail );
}

function viewDG(obj_pld){
	var txt_dg = obj_pld[2]; 
	var objDG_key = null;

	if(obj_pld[0]== "0039"){
		strpos = txt_dg.indexOf(" 공략을 시작합니다.");
	}
	else if (obj_pld[0]== "0038"){
		strpos = txt_dg.length;
	}

	if(strpos != -1){	///던전이나 토벌전에 진입했다.
		objDG_key = txt_dg.substring(0,strpos);

		//공략이 없는 던전이다.
		if(typeof objDG[objDG_key] === 'undefined'){
			objDG_key_name = objDG_key;
			objDG_key = "Default";
			retChk = null;
		}
		else{
			retChk = "chk";
		}

		msgName = objDG_key;
		msgTxt = objDG[objDG_key].txt;
		msgDetail = "";

		if(msgName === 'undefined' || msgName === null || msgName === "" || msgName === "Default"){
			msgName = objDG_key_name;
		}

		msgDetail = "<span class='title'>※ " + msgName + "</span><p class='detail'>" + msgTxt + "</p>";
		$('#content').html( msgDetail );

		return retChk;
	}
}