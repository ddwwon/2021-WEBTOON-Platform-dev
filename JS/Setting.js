const sideBarbtn = document.querySelector(".sideBar");
const section = document.querySelector(".moreInfo-icon");
const label = document.querySelector(".moreInfo");

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

// 탈퇴 버튼 클릭시 알림창
const secession = () => {
  alert("탈퇴가 완료되었습니다.");
};

// 비밀번호 변경시 알림창 및 일치 여부 확인
const change_password = () => {
  const pw1 = document.getElementById("change_pw1").value;
  const pw2 = document.getElementById("change_pw2").value;
  if (pw1 !== pw2) {
    alert("비밀번호가 일치 하지 않습니다.");
  } else {
    alert("비밀번호가 변경되었습니다.");
  }
};

// 닉네임 변경
const getName = () => {
  const name = document.getElementById("changingName").value;
  document.getElementById("name").innerHTML = name;
  alert("닉네임이 변경되었습니다.");
};

// 의견 보내기 버튼 클릭시
const send_comments = () => {
  alert("의견이 보내졌습니다.");
};
