//이현주
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

//경고창 띄울지 여부
let caution = true;

// 회원가입
function Join(){
    const id =document.querySelector('#idInput');
    const pw =document.querySelector('#passwordInput');
    const re_pw =document.querySelector('#re-passwordInput');
    const nickname =document.querySelector('#NickNameInput');
    const name =document.querySelector('#NameInput');
    const e_mail =document.querySelector('#e-mailInput');
    const phone_num =document.querySelector('#PhoneNumInput');
    const agree = document.getElementById('check').checked;
    if(id.value == "" ||pw.value == "" ||re_pw.value == "" ||nickname.value == "" ||name.value == "" ||e_mail.value == "" ){
        alert(" * 을 채워주세요.")
    }
    else{
        if(pw.value !== re_pw.value){
            alert("비밀번호를 확인해주세요.")
        }
        else if(!agree){
            alert("이용약관에 동의해주세요.")
        }
        else{
            caution = false; //경고창 예외
            location.href = 'succeedJoin.html'
        }
    }
}
const termOfService = document.querySelector(".termsOfService");
termOfService.addEventListener("click", function () {
    caution = false;
});

//경고창 띄우기
window.onbeforeunload = function () {
	if(caution)return '변경사항이 저장되지 않을 수 있습니다.';
};


