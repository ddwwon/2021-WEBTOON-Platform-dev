const sideBarbtn = document.querySelector(".sideBar");
const closesideBarBtn = document.querySelector(".closesideBar");
const section = document.querySelector(".moreInfo-icon");
const label = document.querySelector(".moreInfo");

// 클릭 시 사이드 메뉴 생성, 사이드버튼 사라짐
sideBarbtn.addEventListener("click", function () {
    section.style.left = 0;
});
  
// 포커스 아웃 시 사이드 메뉴 사라짐, 사이드바 버튼 생성
closesideBarBtn.addEventListener("click", function () {
    section.style.left = "-100%";
});
  

function Rogin(){
    const id =document.querySelector('#roginIdInput');
    const pw =document.querySelector('#roginPasswordInput');

    if(id.value == "manager" ||pw.value == "123456"){
        location.href = 'succeedJoin.html'
    }
    else if(id.value == ""){
        alert("아이디를 입력해 주세요.")
    }
    else if(pw.value == ""){
        alert("비밀번호를 입력해 주세요.")
    }
    else
    alert("정보가 옳지 않습니다.")
}