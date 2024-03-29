/*
	마물이나 개인용 스티키 메모 내용을 적는 파일입니다.
	혼잣말로 수동 인식을 할 때 던전이나 필드가 아닌 것을 불러올 내용을 여기에 적으세요.
	필드나 특수구역(에우레카, 보즈야 등)의 돌발 이름이나 특수 마물 등의 이름을 적어서 쓰시면 좋습니다.
	어차피 혼잣말로 불러올 커스텀이기 떄문에 반드시 똑같이 적으실 필요는 없고 본인만 아는 방식으로 적으셔도 됩니다.

	예제)
	/혼 김엄니 압살자
	-> 아짐 대초원의 어느 돌발 이름입니다.

	/혼 피어리풀
	-> 보즈야 전선의 돌발 "썩은 야채 '피어리풀'" 의 몹 이름입니다.

	/혼 피풀
	-> 어디까지나 커스텀이기 때문에 피어리풀을 다 적을 필요 없이 본인 편하신대로 키워드를 적으셔도 됩니다.

	다만 오타와 띄어쓰기에 주의 해 주세요. ex: '골드소서'(x), '골드 소서'(o)
	메모 쓰실때 작성하신 줄 끝마다 \ 를 꼭 붙여주세요.

*/

//미터기 중단 키워드 등의 예외처리
var eKey = ["end", "End", "END","스티키온","스티키오프"];

var objMM = {

"Default" : {
name : "",
txt : ""
},

/*
	아래 스티키잇 항목은 개인 메모의 예제입니다.
	개인적인 메모를 적어두시면 언제든지 /혼 스티키잇 으로 불러오실 수 있습니다.
	다른 키워드로 개인 메모를 추가하시려면 아래 양식을 참고해서 복사하여 사용하세요.

	다만 기본적으로 스티키온 모드로 시작하기 때문에 존 이동과 던전 진입, 여타 다른 혼잣말을
	쓰시면 메모 내용이 바뀌게 됩니다. 메모 내용을 계속 고정 해 두시려면 구동 하실 때 마다
	/혼 스티키오프 로 모드를 바꿔주세요.
*/

"스티키잇" : {
name : "스티키잇 메모",
txt : "\
아차! 일일복권!주간복권!패션체크!<br>\
언약식 날짜 11월11일 3시 잊지말것.<br>\
"
},

"피어리풀" : {
txt : "\
빨간장판과 파란장판을 번갈아 가며 맞자.<br>\
"},

//군힐드 사원 일반 : 제1보스 탐구의 삼위일체 
"탐구" : {
txt : "\
1.취일문 마풍진: 전체 광역 공격<br>\
2.예리한 사도류: 보스 기준 사선 절반 공격으로 예리한 첫 번째 검부터 네 번째 검까지 시전이 완료되면 시행되는 기술. 첫 번째 검 방향부터 차례대로 사선 절반 공격이 진행된다.<br>\
3.취일문 유파: 보스의 공격 기술이 전환되며 진행 도중 나오는 대사에 따라 공격 패턴이 달라진다.<br>\
4.호검 흑류파: 보스 기준 양 옆 범위 공격. 안전 지대는 보스 타게팅 박스를 기준으로 한 가운데 범위.<br>\
5.호검 강습 공격: 전체 범위 공격. 플랫폼에 중간 중간 바리케이트가 설치되어 있으므로 그 뒤로 이동하면 회피가 가능하다. 영환검 이후에는 넉백 공격으로 바뀌므로 바리케이트를 등지고 서야 회피가 가능하다.<br>\
6.영환검: 검의 형태를 변환시킨다.<br>\
7.불주먹 열기포: 쉐어 판정 직선 범위 공격.<br>\
8.불주먹 지맥 폭발: 총 2차례 공격이 진행되며, 플랫폼의 색상을 보고 안전지대를 판단해야 한다.<br>\
9.불주먹 진동파: 랜덤 대상 3명에게 주어지는 좁은 부채꼴 범위 공격. 대상자와 연결이 된 상태로 유도 되므로 참고.<br>\
10.예리한 파천풍: 보스 기준 십자 직선 범위 공격.<br>\
11.예리한 설월화: 시전이 종료되면 아래의 설월화 공격을 시행한다.<br>\
11.1.마력 덩어리: 마력 구체가 하나 등장하며 이 구체는 마안 공격을 개시한다.<br>\
11.1.1.예리한 월광: 마력 구체가 시전하는 마안 공격. 마주보지 않도록 주의한다.<br>\
11.2.예리한 설풍: 좁은 직선 범위의 격자 공격. 비어있는 구간이 존재하므로 회피해준다.<br>\
11.3.예리한 화차: 넓은 범위의 원형 AoE 공격. 처음에는 좁은 형태로 등장하다가 일정 시간 경과 후 범위가 크게 변화하며<br>\
12.예리한 무도 부채: 적개심 1순위 대상자를 향한 탱크버스터급 공격.<br>\
13.불꽃 사슬: 랜덤 대상 2명씩 사슬이 연결되며 서로 멀리 떨어져서 끊어줘야 한다.<br>\
"},

//군힐드 사원 일반 : 제2보스 다후 
"다후" : {
txt : "\
1. 오른쪽/왼쪽 충격파: 보스 기준 절반 공격. 한쪽 시전 뒤 반대쪽 매우 빨리 연속 시전.<br>\
2. 야성의 포효: 전체 광역 넉백 공격. 비틀거림 디버프 3초간 발생하며 움직일 수 없다.<br>\
3. 용암숨: 부채꼴 범위 공격. 두 번째 시행하는 용암숨은 좌/우 랜덤 방향으로 돌면서 연속으로 공격하므로 범위에 맞지 않게 주의한다.<br>\
4. 마르코시아스: 타게팅 불가능한 졸개.<br>\
4.1. 야수 돌격: 마르코시아스 기준 전방 직선 공격으로 범위가 좁다.<br>\
4.2. 사냥꾼의 발톱: 마르코시아스 기준 원형 범위 공격. 이 때 야성의 포효도 함께 등장하기 때문에 넉백 시 이 범위에 들어가지 않도록 주의.<br>\
5. 낙석: 여러 개의 작은 원형 AoE 장판 공격.<br>\
6. 뜨거운 돌진: 연속 2회 돌진 공격. 이후 부채꼴 범위의 용암숨 공격이 들어오므로 주의.<br>\
"},

//군힐드 사원 일반 : 제3보스 여왕의 근위병. 기사,병사,총사,전사
"근위병" : {
txt : "\
여왕의 병사<br>\
선회인: 넓은 원형 AoE 공격. 실체가 부여된 분열체 2체에게서는 진짜 공격이 들어가므로 실체 부여가 되지 않은 분신 쪽이 안전지대.<br>\
마구 베기: 탱크 버스터 공격.<br>\
파동참: 전체 광역 공격.<br>\
<br>\
여왕의 기사<br>\
무장 전술: 검과 방패 태세에 따라 공격이 달라지며, 검의 경우 원형 AoE, 방패의 경우 도넛 AoE 공격<br>\
마구 베기: 탱크 버스터 공격<br>\
<br>\
여왕의 전사<br>\
부유파: 폭탄 뿐만 아니라 파티원 전원을 공중으로 띄운다. 크기가 큰 폭탄은 무게가 있으므로 먼저 떨어져 폭파하므로 안전 지대가 생기니 참고한다.<br>\
마구 베기: 탱크 버스터 공격<br>\
질량 전환: 폭탄의 무게를 바꾼다. 즉, 작은 폭탄이 더 무거워지고 큰 폭탄은 가벼워지므로 안전 지대를 찾을 시 참고한다.<br>\
<br>\
여왕의 총사<br>\
도탄난무: 직선 범위 공격. 자동 포탑을 향해 실행하며, 자동 포탄은 소환 시 전방 방향을 향해 공격을 반사하듯이 공격한다.<br>\
전방위 사격: 전체 광역 공격<br>\
한손 쏘기: 탱크 버스터 공격.<br>\
<br>\
총공격<br>\
1. 절대 방어: 절대 방어를 시전하며, 전원 마법 장벽이 생성된다.<br>\
1.1. 마법 장벽: 타게팅 가능한 장벽. 전멸기 시전이 끝나기 전에 최대한 빠르게 부숴 없애야 한다.<br>\
1.2. 편향 방어: 좌우 또는 전후 방향으로 방어막을 전개한다. 방어막이 형성된 방향으로 공격할 경우 반격 데미지가 들어가므로 주의한다. 방어막이 없는 방향으로 공격이 가능하므로 참고.<br>\
2. 전방위 사격: 여왕의 총사가 시전하는 전멸기급 공격.<br>\
3. 파동참: 여왕의 총사를 제외한 3체가 시전하는 전멸기급 공격.<br>\
"},


//군힐드 사원 일반 : 제4보스 보즈야 유령
"보즈야 유령" : {
txt : "\
독기 조작: 도넛 모양 AoE와 직선 범위가 문양 쪽에서 생성된다. 도넛 AoE는 순차적으로 플랫폼 기준 남쪽으로 이동하며, 이동 속도가 빠른 편이므로 피격되지 않도록 주의한다. 총 8회 이동.<br>\
고통의 저주: 전체 광역 공격.<br>\
소환: 플랫폼 북쪽에 유령을 소환하며 전방 넉백 공격을 가한다.<br>\
"},

//군힐드 사원 일반 : 제5보스 맹세의 삼위일체
"맹세" : {
txt : "\
1. 보즈야의 격노: 탱버. 부채꼴 범위 공격이므로 휩쓸리지 않도록 주의.<br>\
2. 보즈야의 영광: 전체 광역 공격<br>\
3. 무기 변경: 무기의 형태가 바뀐다. 대사에 따라 달라지며 지팡이(제벤), 활(이솔데), 검과 방패(스타니크)로 변환된다.<br>\
4. 보즈야의 분노: 지팡이일 때 시전하는 보스 중심 원형 AoE 공격<br>\
5. 빙염난류: 파티원 전원에게 체온 변화 디버프를 부여한다.<br>\
6. 보즈야의 자유: 화염 구체와 얼음 구체 2개씩 소환<br>\
6.1. 얼음 구체, 화염 구체: 구체에 체온 변화 칸 수가 표시가 되며, 그 공격을 맞아서 체온 디버프 해제<br>\
6.3. 착탄: 거리 감쇠 공격. 시전이 종료되면 각 구역에 얼음과 화염 구체가 생성된다.<br>\
7. 섬광 화살: 보스 기준 전방 270도 범위 공격.<br>\
8. 보즈야 플레임: 플랫폼의 4/5를 화염 범위로 만들어낸다. 이 범위 내로 들어가면 즉사하므로 밟지 않도록 주의.<br>\
-이솔데-<br>\
9. 반짝반짝 화살: 시전이 종료되면 플레임으로 생성된 위험 지대에 사다리 타기 식의 길이 만들어진다.<br>\
-스타니크-<br>\
10. 연옥 베기: 보스 기준 후방 270도 범위 공격.<br>\
11. 얼음불 칼날: 좌/우 랜덤으로 체온 변화를 시키는 절반 공격을 시전한다. 총 4회 시전되며 보스에게 등장한 체온 변화 칸 수를 보고 피격 당해야 정상 체온으로 만들 수 있으므로 참고.<br>\
12. 꽃폭풍의 환영: 분신을 소환한다.<br>\
12.1. 맹세의 분열체: 플랫폼에서 서,북 또는 남,동 방향으로 분열체가 등장한다.<br>\
12.1.1. 현란한 화살: 분열체 기준 직선 범위 공격. 범위는 플랫폼 내 사각형 1칸 범위<br>\
-제벤-<br>\
13.<br>\
14.<br>\
15.<br>\
16.<br>\
"},

//군힐드 사원 일반 : 제6보스 투신 세이브 더 퀸
"세이브퀸" : {
txt : "\
1. 천마귀신폭: 전체 범위 공격<br>\
2. 난명할살참: 탱크 버스터 공격.<br>\
3. 여왕의 칙령: 여왕의 총사와 병사를 소환, 총사와 병사에게 각 이동할 칸 수가 정해지며, 이들의 이동이 종료되면 십자 범위 공격을 가한다.<br>\
4. 북두골쇄참: 플랫폼의 형태가 다시 원형으로 바뀌며 3개의 지점에서 직선이 등장한다. 각 꼭지점이 맞닿는 지점에서 원형 AoE 범위 폭발 공격이 발생한다.<br>\
5. 성광폭렬참: 플랫폼 북쪽 방향에 2/3 지점으로 하여 직선 범위가 등장하며, 이 직선 범위의 남/북 방향으로 길게 넉백 시킨다. 안전 지대 범위가 넓은 쪽으로 넉백 되어야 하므로 이동 시 참고한다.<br>\
6. 부동무명검: 플랫폼 절반 범위 공격. 좌/우 랜덤으로 공격을 진행하며, 공격 범위는 사각형 플랫폼 기준으로 가로 3칸.<br>\
7. 갓 세이브 더 퀸: 큰 전체 광역 공격.<br>\
8.1. 이동 칙령(Movement Edict: 1~4 Squares): 파티원 전원에게 부여되는 이동 칙령 디버프로, 각자 이동해야 할 칸 수가 주어진다. 대칙령 시전 후 10초 후에 이동을 시작하여 5초 내로 이동을 종료해야 한다.<br>\
9. 연계 명령(Relentless Play): 여왕의 기사와 병사, 또는 총사와 전사를 소환하여 연계 공격을 지시한다.<br>\
"},


};