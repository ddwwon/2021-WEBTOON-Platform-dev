const sideBarbtn = document.querySelector(".sideBar");
const section = document.querySelector(".moreInfo-icon");
const label = document.querySelector(".moreInfo");
const alarm_btn = document.querySelector(".btn");
let flag = 0;

// const popoverTriggerList = [].slice.call(
//   document.querySelectorAll('[data-bs-toggle="popover"]')
// );
// const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl);
// });

// 알림 설정 버튼 클릭시
const btn_click = () => {
  const alarm_btn = document.querySelector(".btn");
  const true_false = alarm_btn.getAttribute("checked");
  console.log("checked", true_false);
  if (flag === 0) {
    console.log("gi");
    alert("알림 설정이 완료되었습니다");
    alarm_btn.style.backgroundColor = "#454ade";
    alarm_btn.style.color = "#fff";
    console.log("ggi");
    return (flag = 1);
  } else if (flag === 1) {
    alarm_btn.style.backgroundColor = "transparent";
    alarm_btn.style.color = "#1b1f3b";
    alert("알림 설정이 해제되었습니다.");
    return (flag = 0);
  }
};

const side_btn_none = () => {
  section.style.left = 0;
  label.style.opacity = 0;
};

// alarm_btn.addEventListener("click", function () {
//   alarm_btn.style.backgroundColor = "#454ade";
//   alarm_btn.style.color = "#fff";
// });

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
