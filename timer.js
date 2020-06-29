var inExamTimer = document.getElementById('inExam');
var SATTimer = document.getElementById('SAT');
var inExamHourTimer = document.getElementById('inExamHour');
var SATHourTimer = document.getElementById('SATHour');

console.log(inExamTimer);
console.log(SATTimer);


function dayGap () {
    var SATDday = new Date("December 3, 2020 08:40:00").getTime();//수능디데이
    var inExamDday = new Date("July 23, 2020 08:20:00").getTime();//기말디데이
    var nowday = new Date();//현재
    nowday = nowday.getTime();//밀리세컨드 단위변환
    var SATdistance = SATDday - nowday;//디데이에서 현재까지 뺀다.
    var inExamdistance = inExamDday - nowday;

    var SATD = Math.floor(SATdistance / (1000 * 60 * 60 * 24));//일
    var SATH = Math.floor((SATdistance / (1000*60*60)) % 24);//시간
    var inExamD = Math.floor(inExamdistance / (1000 * 60 * 60 * 24));//일
    var inExamH = Math.floor((inExamdistance / (1000*60*60)) % 24);//시간
    if(inExamD <=0 ){
        inExamTimer.innerHTML = "기말 건투를 빌어요!";
    } else {
        inExamTimer.innerHTML = '기말까지 '+ (inExamD+1) +'일';
        inExamHourTimer.innerHTML = inExamH+'시간';
    }

    if (SATdistance <= 0) {
        SATTimer.innerHTML = "수능 만점!";
    } else {
        SATTimer.innerHTML = '수능까지 '+ (SATD+1) +'일';
        SATHourTimer.innerHTML =SATH+'시간';
    }
}

setInterval(dayGap,1000);