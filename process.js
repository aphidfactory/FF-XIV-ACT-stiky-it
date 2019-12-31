try {
	console.log("Register event listener")
	addOverlayListener('LogLine', onLogLine);
	startOverlayEvents()
} catch (ex) {
	console.log("Core Error : onLogLine is not defined.");
}

function onLogLine(data) {
	var line = data['line']
	var type = line[0]
	var msgType = line[2]
	var length = line.length

	if (type === "01" && length === 5) {
		var location = line[3]
		console.log(data)
		viewMM(location);
	}

	//"a250141c19e17c4e793bc4661963debd"
	if (type === "00" && msgType === "0839") {
		var location = line[4]
		var dungeon_split_position = location.indexOf(" 공략을 시작합니다.")
		if (dungeon_split_position !== -1) {
			console.log(data)
			viewDG(location.substring(0, dungeon_split_position))
		}
	}
}

function viewMM(objMM_key) {
	// 현재 위치를 표시 해 주고 화면 초기화.
	$('#footer').html(objMM_key);
	$('#content').html('');

	// 던전 외 공략파일 확인
	//공략이 없는 던전이다.
	if (typeof objMM[objMM_key] === 'undefined') {
		objMM_key_name = objMM_key;
		objMM_key = "Default";
	}

	msgName = objMM_key;
	msgTxt = objMM[objMM_key].txt;
	msgDetail = "";

	if (msgName === 'undefined' || msgName === null || msgName === "" || msgName === "Default") {
		msgName = objMM_key_name;
	}

	msgDetail = "<span class='title'>※ " + msgName + "</span><p class='detail'>" + msgTxt + "</p>";
	$('#content').html(msgDetail);
}

function viewDG(objDG_key) {
	//공략이 없는 던전이다.
	if (typeof objDG[objDG_key] === 'undefined') {
		objDG_key_name = objDG_key;
		objDG_key = "Default";
		retChk = null;
	} else {
		retChk = "chk";
	}

	msgName = objDG_key;
	msgTxt = objDG[objDG_key].txt;
	msgDetail = "";

	if (msgName === 'undefined' || msgName === null || msgName === "" || msgName === "Default") {
		msgName = objDG_key_name;
	}

	msgDetail = "<span class='title'>※ " + msgName + "</span><p class='detail'>" + msgTxt + "</p>";
	$('#content').html(msgDetail);

	return retChk;
}