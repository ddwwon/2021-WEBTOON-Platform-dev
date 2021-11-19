const sideBarbtn = document.querySelector(".sideBar");
const section = document.querySelector(".moreInfo-icon");
const label = document.querySelector(".moreInfo");
const like_btn = document.querySelector(".Like_webtoon");
const img = document.querySelector(".thumbNail");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
let flag = new Array(8);
flag = [0, 0, 0, 0, 0, 0, 0, 0];
let btns = new Array(8);
btns = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8];

//접속 요일을 얻는 함수
const getWeekDayToday = () => {
  let now = new Date();
  const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let week = weekDay[now.getDay()];
  return week;
};

//접속 요일에 따른 메인 화면 세팅
const setMainforweekDay = () => {
  if (getWeekDayToday() == "Sun") {
    location.href = "../../Components/일요웹툰/sunWebToonPage.html";
  } else if (getWeekDayToday() == "Mon") {
    location.href = "../../Components/월요웹툰/monWebToonPage.html";
  } else if (getWeekDayToday() == "Tue") {
    location.href = "../../Components/화요웹툰/tueWebToonPage.html";
  } else if (getWeekDayToday() == "Wed") {
    location.href = "../../Components/수요웹툰/wednsWebToonPage.html";
  } else if (getWeekDayToday() == "Thu") {
    location.href = "../../Components/목요웹툰/thursWebToonPage.html";
  } else if (getWeekDayToday() == "Fri") {
    location.href = "../../Components/금요웹툰/friWebToonPage.html";
  } else if (getWeekDayToday() == "Sat") {
    location.href = "../../Components/토요웹툰/saturWebToonPage.html";
  }
};

// 알림설정 클릭시
btn1.addEventListener("click", function () {
  if (flag[0] === 0) {
    alert("알림 설정이 완료되었습니다");
    btn1.style.backgroundColor = "#454ade";
    btn1.style.color = "#fff";
    flag[0] = 1;
  } else if (flag[0] === 1) {
    btn1.style.backgroundColor = "transparent";
    btn1.style.color = "#1b1f3b";
    alert("알림 설정이 해제되었습니다.");
    flag[0] = 0;
  }
});
btn2.addEventListener("click", function () {
  if (flag[1] === 0) {
    alert("알림 설정이 완료되었습니다");
    btn2.style.backgroundColor = "#454ade";
    btn2.style.color = "#fff";
    flag[1] = 1;
  } else if (flag[1] === 1) {
    btn2.style.backgroundColor = "transparent";
    btn2.style.color = "#1b1f3b";
    alert("알림 설정이 해제되었습니다.");
    flag[1] = 0;
  }
});
btn3.addEventListener("click", function () {
  if (flag[2] === 0) {
    alert("알림 설정이 완료되었습니다");
    btn3.style.backgroundColor = "#454ade";
    btn3.style.color = "#fff";
    flag[2] = 1;
  } else if (flag[2] === 1) {
    btn3.style.backgroundColor = "transparent";
    btn3.style.color = "#1b1f3b";
    alert("알림 설정이 해제되었습니다.");
    flag[2] = 0;
  }
});
btn4.addEventListener("click", function () {
  if (flag[3] === 0) {
    alert("알림 설정이 완료되었습니다");
    btn4.style.backgroundColor = "#454ade";
    btn4.style.color = "#fff";
    flag[3] = 1;
  } else if (flag[3] === 1) {
    btn4.style.backgroundColor = "transparent";
    btn4.style.color = "#1b1f3b";
    alert("알림 설정이 해제되었습니다.");
    flag[3] = 0;
  }
});
btn5.addEventListener("click", function () {
  if (flag[4] === 0) {
    alert("알림 설정이 완료되었습니다");
    btn5.style.backgroundColor = "#454ade";
    btn5.style.color = "#fff";
    flag[4] = 1;
  } else if (flag[4] === 1) {
    btn5.style.backgroundColor = "transparent";
    btn5.style.color = "#1b1f3b";
    alert("알림 설정이 해제되었습니다.");
    flag[4] = 0;
  }
});
btn6.addEventListener("click", function () {
  if (flag[5] === 0) {
    alert("알림 설정이 완료되었습니다");
    btn6.style.backgroundColor = "#454ade";
    btn6.style.color = "#fff";
    flag[5] = 1;
  } else if (flag[5] === 1) {
    btn6.style.backgroundColor = "transparent";
    btn6.style.color = "#1b1f3b";
    alert("알림 설정이 해제되었습니다.");
    flag[5] = 0;
  }
});
btn7.addEventListener("click", function () {
  if (flag[6] === 0) {
    alert("알림 설정이 완료되었습니다");
    btn7.style.backgroundColor = "#454ade";
    btn7.style.color = "#fff";
    flag[6] = 1;
  } else if (flag[6] === 1) {
    btn7.style.backgroundColor = "transparent";
    btn7.style.color = "#1b1f3b";
    alert("알림 설정이 해제되었습니다.");
    flag[61] = 0;
  }
});
btn8.addEventListener("click", function () {
  if (flag[7] === 0) {
    alert("알림 설정이 완료되었습니다");
    btn8.style.backgroundColor = "#454ade";
    btn8.style.color = "#fff";
    flag[7] = 1;
  } else if (flag[7] === 1) {
    btn8.style.backgroundColor = "transparent";
    btn8.style.color = "#1b1f3b";
    alert("알림 설정이 해제되었습니다.");
    flag[7] = 0;
  }
});

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

// 하트 버튼 클릭시 보관함의 모든 웹툰의 알림설정
like_btn.addEventListener("click", function () {
  for (let i = 0; i < flag.length; i++) {
    if (flag[i] === 0) {
      flag[i] == 1;
      btns[i].style.backgroundColor = "#454ade";
      btns[i].style.color = "#fff";
    }
  }
});
