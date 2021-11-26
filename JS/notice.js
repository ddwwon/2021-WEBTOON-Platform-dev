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
    const now = new Date();
    const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'];
    const week = weekDay[now.getDay()];
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



//게시물을 누르면
$('.post').click(function(){
    location.href ='../Components/terms_of_service.html'
});

//글쓰기 버튼을 누르면
$('.write').click(function(){
    location.href ='../Components/writenotice.html'
});



//pagination
function Paging(totalpostsSize, selectpage){
    const ShowLinksOnPage = 5;
    const ShowContentsOnPage = 5;
    const totalPageSize = Math.ceil(totalpostsSize/ShowContentsOnPage);  // 총 페이지 수
    const startPageNum = selectpage -  Math.round(ShowLinksOnPage / 2) + 1;// pagination이 보여주고 있는 첫 페이지
    const endPageNum = selectpage +  Math.floor(ShowLinksOnPage / 2);   // pagination이 보여주고 있는 마지막 페이지
    
   if (selectpage == undefined){        //처음 "다음" 키 누를 때
        Paging(280,ShowLinksOnPage);
        return[ShowLinksOnPage -  Math.round(ShowLinksOnPage / 2) +1, ShowLinksOnPage + Math.round(ShowLinksOnPage / 2) -1, ShowContentsOnPage, ShowLinksOnPage];
    }
    else if (selectpage < Math.round(ShowLinksOnPage /2) ){     //1보다 작은 수가 나올 수 없도록
        Paging(280, Math.round(ShowLinksOnPage / 2));
        return [1, ShowLinksOnPage, ShowContentsOnPage];
    }
    else if (selectpage > totalPageSize - Math.floor(ShowLinksOnPage / 2)){  //전체 페이지 수를 넘기지 않도록
        Paging(280,totalPageSize - Math.floor(ShowLinksOnPage / 2));
        return [totalPageSize - ShowLinksOnPage + 1 , totalPageSize, ShowContentsOnPage];
    }
    else{       //그 외
        
        //페이지네이션 변경
        let id =1;
        while(id <= ShowLinksOnPage){
            for(let j = startPageNum ; j <= endPageNum; j++){
                const num = document.getElementById(id);
                num.innerText = j;
                id++;
            } 
            break;
        }
        return [startPageNum, endPageNum, ShowContentsOnPage];
    }
    
}

function post(selectpage, totalpostsSize, ShowContentsOnPage){
    //게시물 변경
     let postNumId = ShowContentsOnPage;
     const startpostNum = totalpostsSize - ShowContentsOnPage*(selectpage-1);
     const EndpostNum = startpostNum-ShowContentsOnPage + 1;
    while( postNumId >= 1){
        for (let j = EndpostNum; j <= startpostNum;j++){
            const postNum = document.getElementById("postNum"+ postNumId);
            postNum.innerText = j;
            postNumId--;
        }
        break;
    }
}


//전체 게시물 수
const totalpostsSize = 50;
//pagination 사용
let preNum;
$('.page-item').click(function(){

const num = this.innerText; //.page-item의 내용

if(num === "다음" && preNum ==undefined){           //처음 "다음" 키 누를 때
    preNum = Paging(totalpostsSize);
    post(preNum[3],totalpostsSize, preNum[2]);
}
else if(num === "이전" && preNum ==undefined){      //처음 "이전" 키 누를 때 (바로 "다음" 키를 누를 수 있게 하기 위해)
    preNum = Paging(totalpostsSize,1);
    post(1,totalpostsSize, preNum[2]);
}
else if(num === "다음" && preNum !== undefined){    //이후 "다음" 키 누를 때
    preNum = Paging(totalpostsSize, preNum[1]);
    post(preNum[1],totalpostsSize, preNum[2]);
}
else if(num ==="이전"  && preNum !== undefined){    //이후 "이전" 키 누를 때
    preNum = Paging(totalpostsSize, preNum[0]);
    post(preNum[0],totalpostsSize, preNum[2]);
}
else {                                              // 숫자 누를 때
    preNum = Paging(totalpostsSize,Number(num)); 
    post(Number(num),totalpostsSize, preNum[2]);
}
});

