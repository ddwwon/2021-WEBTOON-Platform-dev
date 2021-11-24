//조정미
//프로필 변경 관련 js

//이미지 선택 버튼 클릭 시 이미지 목록 보여주기
const Show = () => {
    const show = document.querySelector(".image-select");
    show.style.display = "flex";
};

//취소 버튼클릭 시 이미지 목록  가리기
const Hidden = () => {
    const show = document.querySelector(".image-select");
    show.style.display = "none";
};

//선택된 이미지로 프로필 변경(데이터베이스를 사용하지 않기 때문에 해당 페이지에만 적용됨)
const ChangeProfile = ( changeImage ) => {
    document.querySelector(".profile-image-original").src = changeImage;
    document.querySelector(".sidebar-profile").src = changeImage;
    alert("프로필이 변경되었습니다.");
}


//사이드바 관련 js -----------------------------------------------------------------------------------------------------------
const sideBarbtn = document.querySelector(".sideBar");
const closesideBarBtn = document.querySelector(".closesideBar");
const section = document.querySelector(".moreInfo-icon");
const label = document.querySelector(".moreInfo");

// 클릭 시 사이드 메뉴 생성, 사이드버튼 사라짐
sideBarbtn.addEventListener("click", function () {
    section.style.left = 0;
});
  
// 클릭 시 사이드 메뉴 사라짐, 사이드바 버튼 생성
closesideBarBtn.addEventListener("click", function () {
    section.style.left = "-100%";
});

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
    {location.href = '../Components/일요웹툰/sunWebToonPage.html'}
    else if( getWeekDayToday() == 'Mon' )
    {location.href = "../Components/월요웹툰/monWebToonPage.html"}
    else if( getWeekDayToday() == 'Tue' )
    {location.href = "../Components/화요웹툰/tueWebToonPage.html"}
    else if( getWeekDayToday() == 'Wed' )
    {location.href = "../Components/수요웹툰/wednsWebToonPage.html"}
    else if( getWeekDayToday() == 'Thu' )
    {location.href = "../Components/목요웹툰/thursWebToonPage.html"}
    else if( getWeekDayToday() == 'Fri' )
    {location.href = "../Components/금요웹툰/friWebToonPage.html"}
    else if( getWeekDayToday() == 'Sat' )
    {location.href = "../Components/토요웹툰/saturWebToonPage.html"}

}