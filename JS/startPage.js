//시작 화면에서 0.4초마다 아이콘 변경
window.onload = function() {
    slideShow();
}

let index = 0; //index 변수 선언 및 초기화
const slideShow = () => {
    let i;
    const image = document.getElementsByClassName("icon-image"); //class명이 icon-image인 dom 참조
    for(i = 0; i < image.length; i++){
        image[i].style.display = "none"; //처음에는 display를 none으로
    }
    image[index].style.display = "block"; //해당 인덱스의 display는 block으로

    index++;
    if(index >  image.length) {
        index = 0; //인덱스가 초과되면(아이콘이 한 바퀴 돌면) 0으로 다시 초기화
    }
    
    setTimeout(slideShow, 400); //함수를 0.4초마다 호출
}

//시작 화면에서 2초 후 메인화면으로 이동
setTimeout(() => {
    setMainforweekDay();
}, 2000);


//접속 요일을 얻는 함수
function getWeekDayToday(){
    let now = new Date();
    const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'];
    let week = weekDay[now.getDay()];
    return week;
}
//접속 요일에 따른 메인 화면 세팅
function setMainforweekDay(){
    if( getWeekDayToday()== 'Sun' )
    {location.replace('./Components/일요웹툰/sunWebToonPage.html')}
    else if( getWeekDayToday() == 'Mon' )
    {location.replace("./Components/월요웹툰/monWebToonPage.html")}
    else if( getWeekDayToday() == 'Tue' )
    {location.replace("./Components/화요웹툰/tueWebToonPage.html")}
    else if( getWeekDayToday() == 'Wed' )
    {location.replace("./Components/수요웹툰/wednsWebToonPage.html")}
    else if( getWeekDayToday() == 'Thu' )
    {location.replace("./Components/목요웹툰/thursWebToonPage.html")}
    else if( getWeekDayToday() == 'Fri' )
    {location.replace("./Components/금요웹툰/friWebToonPage.html")}
    else if( getWeekDayToday() == 'Sat' )
    {location.replace("./Components/토요웹툰/saturWebToonPage.html")}

}
