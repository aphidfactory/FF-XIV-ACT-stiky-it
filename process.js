
try { var SIG_go=true;document.addEventListener('onLogLine', onLogLine); } catch (ex) { console.log("Core Error : onLogLine is not defined."); }


function onLogLine(data) {
	var obj = data.detail;
	var obj_pld = eval( obj );
	var msgName;
	var msgTxt;
	var msgDetail;
	var obj_txt = obj_pld[4];
	var SIG_pass = null;//스킵해야할 것들.
		
	//console.log(typeof obj_pld);
	//for(var key in obj_pld){
	//	console.log(key + "::" + obj_pld[key]);
	//}
	//console.log("-----");
	
	if(obj_txt=="스티키온"){
		SIG_go = true;
	}
	else if(obj_txt=="스티키오프"){
		SIG_go = false;
	}
	//console.log(SIG_go+"\n");

	//스티키온 상태 : 스티키오프면 메모 갱신을 멈춘다.
	if(SIG_go === true){
		// 혼잣말로 키워드 확인할 때
		if(obj_pld[0] == "00" && obj_pld[2]== "0038"){	//00은 아나운스 타입, 0038은 혼잣말

			//ex)/e end 등의 혼잣말로 미터기 종료하는 키워드들 예외처리
			if(eKey.includes(obj_txt) === true){
				SIG_pass="ON";
			}
			else{
				SIG_pass=null;
			}

			if(SIG_pass != "ON"){
				var retChk = viewDG(obj_pld);
				if(retChk != "chk"){
					var objMM_key = obj_txt; 
					viewMM(objMM_key);
				}
			}
		}

		// 존잉
		if(obj_pld[0] == "01"){	//01은 위치 타입(아마)
			var objMM_key = obj_pld[3]; 
			//viewMM(objMM_key);
			viewDG(obj_pld);
		}
	}
}

function viewMM(objMM_key){

	// 현재 위치를 표시 해 주고 화면 초기화.
	//$('#footer').html( objMM_key );
	$('#content').html( '' );

	// 던전 외 메모 확인
	// 호출에 맞는 메모가 없다.
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
	var txt_dg = obj_pld[4]; 
	var objDG_key = null;
	var strpos = null;

	if(obj_pld[2]== "0839"){	//0839는 시스템 타입(아마)
		strpos = txt_dg.indexOf(" 공략을 시작합니다.");
	}
	if (obj_pld[2]== "0038"){	//0038은 혼잣말
		strpos = txt_dg.length;
	}

	if(strpos != -1 && strpos != null){	///혼잣말로 불러왔거나, 혹은 던전이나 토벌전에 진입했다.
		objDG_key = txt_dg.substring(0,strpos);
	}
	else{
		objDG_key = obj_pld[3];
	}

	if(objDG_key != null){	
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
	}
	return retChk;
}