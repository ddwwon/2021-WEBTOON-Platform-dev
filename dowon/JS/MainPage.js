const sideBarbtn = document.querySelector(".sideBar");
const section = document.querySelector(".moreInfo-icon");
const label = document.querySelector(".moreInfo");

// 웹툰 메인페이지 광고 부분에 점 클릭시 이미지 전환
const changeAd = (idx) => {
  if (idx == 1) {
    document.getElementById("webToonAd").src = "../Background/홀로그램.jpg";
    console.log("1");
  } else if (idx == 2) {
    document.getElementById("webToonAd").src = "../Background/sea.jpg";
    console.log("2");
  } else if (idx == 3) {
    document.getElementById("webToonAd").src = "../Background/sky.jpg";
    console.log("3");
  }
};

// 클릭 시 사이드 메뉴 생성, 사이드버튼 사라짐
sideBarbtn.addEventListener("click", function () {
  console.log("hi");
  section.style.left = 0;
  label.style.opacity = 0;
});

// 포커스 아웃 시 사이드 메뉴 사라짐, 사이드바 버튼 생성
sideBarbtn.addEventListener("blur", function () {
  section.style.left = "-100%";
  label.style.opacity = 1;
});
