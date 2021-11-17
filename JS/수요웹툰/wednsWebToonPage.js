const sideBarbtn = document.querySelector(".sideBar");
const section = document.querySelector(".moreInfo-icon");
const label = document.querySelector(".moreInfo");


// 클릭 시 사이드 메뉴 생성, 사이드버튼 사라짐
sideBarbtn.addEventListener("click", function () {
  section.style.left = 0;
  label.style.opacity = 0;
});

// 포커스 아웃 시 사이드 메뉴 사라짐, 사이드바 버튼 생성
sideBarbtn.addEventListener("blur", function () {
  section.style.left = "-100%";
  label.style.opacity = 1;
});



//요일별, 신작별, 완결별 버튼을 클릭시 그분야 웹툰 페이지로 이동하는 함수 생성
const transMon = () => {
  location.href ='../../Components/월요웹툰/monWebToonPage.html';
}
const transTues = () => {
  location.href ='../../Components/화요웹툰/tueWebToonPage.html';
}
const transWedns = () => {
  location.href ='../../Components/수요웹툰/wednsWebToonPage.html';
}
const transThurs = () => {
  location.href ='../../Components/목요웹툰/thursWebToonPage.html';
}
const transFri = () => {
  location.href ='../../Components/금요웹툰/friWebToonPage.html';
}
const transSatur = () => {
  location.href ='../../Components/토요웹툰/saturWebToonPage.html';
}
const transSun = () => {
  location.href ='../../Components/일요웹툰/sunWebToonPage.html';
}
const transNew = () => {
  location.href ='../../Components/신작웹툰/newWebToonPage.html';
}
const transEnd = () => {
  location.href ='../../Components/완결웹툰/endWebToonPage.html';
}