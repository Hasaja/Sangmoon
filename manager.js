var evaluation = [
    {
        title:'📊확률과 통계 수행평가',
        date:'2020-07-10(금)',
        description : '수능특강의 문제를 참조하여 나만의 새로운 문제 만들기'
    },{
        title:'🌏지구과학 수행평가',
        date:'미정',
        description:'추후 정해지면 공지'
    }];
var homework = [
    {
        title:'🌏수능 특강 지구과학 I 문제 풀기',
        date:'2020-07-10(금)',
        description : '지구과학 I 4강 2점~3점 문제 풀기, 추후 검사'
    }]
var notice = [{
    title:'🚖차량 등교 엄금'
}];

var evaHTML = document.getElementById('eva');
var hwHTML = document.getElementById('hw');
var notHTML = document.getElementById('not');

var evaContent = '😉존재하지 않습니다';
var hwContent = '😉존재하지 않습니다';
var notContent = '😉존재하지 않습니다';

for(var i = 0; i < evaluation.length; ++i){
    if(i==0){
        evaContent = '';
    }
    evaContent += evaluation[i].title + '&nbsp;&nbsp;&nbsp;  |  &nbsp;&nbsp;' + evaluation[i].date;
    evaContent += '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::&nbsp;' + evaluation[i].description;
    if(i != evaluation.length-1){
        evaContent += '<br></br>'
    }
}
for(var i = 0; i < homework.length; ++i){
    if(i==0){
        hwContent = '';
    }
    hwContent += homework[i].title + '&nbsp;&nbsp;&nbsp;  |  &nbsp;&nbsp;' + homework[i].date;
    hwContent += '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::&nbsp;' + homework[i].description;
    if(i != homework.length-1){
        hwContent += '<br></br>'
    }
}
for(var i = 0; i < notice.length; ++i){
    if(i==0){
        notContent = '';
    }
    notContent += notice[i].title;
}
evaHTML.innerHTML = evaContent;
hwHTML.innerHTML = hwContent;
notHTML.innerHTML = notContent;