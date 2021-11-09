const sideBarbtn = document.querySelector(".sideBar");
const section = document.querySelector(".moreInfo-icon");
const label = document.querySelector(".moreInfo");


//메인홈페이지에서 각각의 웹툰에드버튼마다 다른 이미지를 보여주도록 하는 함수
const changeAd = (idx) => {
  if (idx === 1) {
    document.getElementById("webToonAd").src = "../../CSS/webtoonAd/1을줄게.jpg";
    console.log("1");
  } else if (idx === 2) {
    document.getElementById("webToonAd").src = "../../CSS/webtoonAd/2021최애캐 안녕, 잘 지내니.jpg";
    console.log("2");
  } else if (idx === 3) {
    document.getElementById("webToonAd").src = "../../CSS/webtoonAd/사신소년.jpg";
    console.log("3");
  }
  else if (idx === 4) {
    document.getElementById("webToonAd").src = "../../CSS/webtoonAd/여신강림.jpg";
    console.log("4");
  }
  else if (idx === 5) {
    document.getElementById("webToonAd").src = "../../CSS/webtoonAd/엽총소년.jpg";
    console.log("5");
  }
  else if (idx === 6) {
    document.getElementById("webToonAd").src = "../../CSS/webtoonAd/용사가돌아왔다.jpg";
    console.log("6");
  }
  else if (idx === 7) {
    document.getElementById("webToonAd").src = "../../CSS/webtoonAd/하루만네가되고싶어.jpg";
    console.log("7");
  }
  else if (idx === 8) {
    document.getElementById("webToonAd").src = "../../CSS/webtoonAd/한림체육관.jpg";
    console.log("8");
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


const className = 
const transFormButton = () => {
    
}