//랜덤웹툰추천 함수 구현
const randomWebToon = () => {
    // 1 ~ 108 까지의 난수 생성 (메인홈페이지의 웹툰은 총 108개 이기에)
    const randomNumber = Math.floor(Math.random() * 108) + 1;
    //월요웹툰
    if(randomNumber === 1) { // 난수에 따라 각기다른 웹툰 추천
        // 랜덤박스 이미지를 각기다른 웹툰 이미지로 변경
        document.getElementById("randomBox").src ="../../CSS/월요웹툰/mainWebtoonImages/결혼생활그림일기.png"; 
        // 웹툰제목을 변경
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "결혼생활 그림일기";
        // 랜덤웹툰추천버튼 글씨를 다시돌리기로 변경
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        // 이미지를 클릭시 추천해준 웹툰으로 가는 함수 정의
        const transformToWebtoon = () => {
            location.href="../../Components/월요웹툰/결혼생활그림일기/결혼생활그림일기.html"
        };
        // 웹툰 정보를 표기
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#옴니버스 #일상";
        // 웹툰 정보를 보이도록 수정
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        // 웹툰 이미지 클릭시 그 웹툰으로 이동
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 2) { 
        document.getElementById("randomBox").src ="../../CSS/월요웹툰/mainWebtoonImages/더블클릭.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "더블클릭";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/월요웹툰/더블클릭/더블클릭.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 3) { 
        document.getElementById("randomBox").src ="../../CSS/월요웹툰/mainWebtoonImages/만렙돌파.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "만렙돌파";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/월요웹툰/만렙돌파/만렙돌파.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 4) { 
        document.getElementById("randomBox").src ="../../CSS/월요웹툰/mainWebtoonImages/말박왕.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "말박왕";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/월요웹툰/말박왕/말박왕.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 5) { 
        document.getElementById("randomBox").src ="../../CSS/월요웹툰/mainWebtoonImages/백수세끼.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "백수세끼";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/월요웹툰/백수세끼/백수세끼.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 6) { 
        document.getElementById("randomBox").src ="../../CSS/월요웹툰/mainWebtoonImages/삼매경.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "삼매경";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/월요웹툰/삼매경/삼매경.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 7) { 
        document.getElementById("randomBox").src ="../../CSS/월요웹툰/mainWebtoonImages/소녀의세계.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "소녀의 세계";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/월요웹툰/소녀의세계/소녀의세계.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 8) { 
        document.getElementById("randomBox").src ="../../CSS/월요웹툰/mainWebtoonImages/이터널스.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "이터널스";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/월요웹툰/이터널스/이터널스.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 9) { 
        document.getElementById("randomBox").src ="../../CSS/월요웹툰/mainWebtoonImages/잔불의기사.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "잔불의 기사";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/월요웹툰/잔불의기사/잔불의기사.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 10) { 
        document.getElementById("randomBox").src ="../../CSS/월요웹툰/mainWebtoonImages/참교육.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "참교육";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/월요웹툰/참교육/참교육.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 11) { 
        document.getElementById("randomBox").src ="../../CSS/월요웹툰/mainWebtoonImages/파이게임.jpeg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "파이게임";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/월요웹툰/파이게임/파이게임.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #스릴러";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 12) { 
        document.getElementById("randomBox").src ="../../CSS/월요웹툰/mainWebtoonImages/팔이피플.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "팔이피플";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/월요웹툰/팔이피플/팔이피플.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    // 화요웹툰
    else if(randomNumber === 13) { 
        document.getElementById("randomBox").src ="../../CSS/화요웹툰/mainWebtoonImages/김부장.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "김부장";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/화요웹툰/김부장/김부장.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 14) { 
        document.getElementById("randomBox").src ="../../CSS/화요웹툰/mainWebtoonImages/나의플랏메이트.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "나의 플랏메이트";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/화요웹툰/나의플랏메이트/나의플랏메이트.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 15) { 
        document.getElementById("randomBox").src ="../../CSS/화요웹툰/mainWebtoonImages/달콤살벌한부부.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "달콤살벌한 부부";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/화요웹툰/달콤살벌한부부/달콤살벌한부부.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 16) { 
        document.getElementById("randomBox").src ="../../CSS/화요웹툰/mainWebtoonImages/몬스터.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "몬스터";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/화요웹툰/몬스터/몬스터.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 17) { 
        document.getElementById("randomBox").src ="../../CSS/화요웹툰/mainWebtoonImages/사신소년.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "사신소년";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/화요웹툰/사신소년/사신소년.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 18) { 
        document.getElementById("randomBox").src ="../../CSS/화요웹툰/mainWebtoonImages/성인초딩.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "성인초딩";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/화요웹툰/성인초딩/성인초딩.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 19) { 
        document.getElementById("randomBox").src ="../../CSS/화요웹툰/mainWebtoonImages/여신강림.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "여신강림";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/화요웹툰/여신강림/여신강림.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 20) { 
        document.getElementById("randomBox").src ="../../CSS/화요웹툰/mainWebtoonImages/위아더좀비.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "위아더좀비";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/화요웹툰/위아더좀비/위아더좀비.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 21) { 
        document.getElementById("randomBox").src ="../../CSS/화요웹툰/mainWebtoonImages/중증외상센터골든아워.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "중증외상센터 : 골든아워";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/화요웹툰/중증외상센터골든아워/중증외상센터골든아워.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 22) { 
        document.getElementById("randomBox").src ="../../CSS/화요웹툰/mainWebtoonImages/하루만네가되고싶어.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "하루만 네가 되고싶어";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/화요웹툰/하루만네가되고싶어/하루만네가되고싶어.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 23) { 
        document.getElementById("randomBox").src ="../../CSS/화요웹툰/mainWebtoonImages/한림체육관.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "한림체육관";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/화요웹툰/한림체육관/한림체육관.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#에피소드 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 24) { 
        document.getElementById("randomBox").src ="../../CSS/화요웹툰/mainWebtoonImages/호랑이들어와요.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "호랑이 들어와요";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/화요웹툰/호랑이들어와요/호랑이들어와요.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#에피소드 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    // 수요웹툰
    else if(randomNumber === 25) { 
        document.getElementById("randomBox").src ="../../CSS/수요웹툰/mainWebToonImages/나쁜사람.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "나쁜사람";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/수요웹툰/나쁜사람/나쁜사람.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#에피소드 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 26) { 
        document.getElementById("randomBox").src ="../../CSS/수요웹툰/mainWebToonImages/내남편과결혼해줘.png";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "내남편과 결혼해줘";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/수요웹툰/내남편과결혼해줘/내남편과결혼해줘.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 27) { 
        document.getElementById("randomBox").src ="../../CSS/수요웹툰/mainWebToonImages/미래의골동품가게.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "미래의 골동품 가게";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/수요웹툰/미래의골동품가게/미래의골동품가게.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #스릴러";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 28) { 
        document.getElementById("randomBox").src ="../../CSS/수요웹툰/mainWebToonImages/변방의외노자.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "변방의 외노자";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/수요웹툰/변방의외노자/변방의외노자.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 29) { 
        document.getElementById("randomBox").src ="../../CSS/수요웹툰/mainWebToonImages/빌드업.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "빌드업";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/수요웹툰/빌드업/빌드업.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #스포츠";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 30) { 
        document.getElementById("randomBox").src ="../../CSS/수요웹툰/mainWebToonImages/세상은돈과권력.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "세상은 돈과 권력";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/수요웹툰/세상은돈과권력/세상은돈과권력.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#에피소드 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 31) { 
        document.getElementById("randomBox").src ="../../CSS/수요웹툰/mainWebToonImages/여주실격!.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "여주실격!";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/수요웹툰/여주실격!/여주실격!.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 32) { 
        document.getElementById("randomBox").src ="../../CSS/수요웹툰/mainWebToonImages/일렉시드.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "일렉시드";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/수요웹툰/일렉시드/일렉시드.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 33) { 
        document.getElementById("randomBox").src ="../../CSS/수요웹툰/mainWebToonImages/전지적독자시점.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "전지적 독자 시점";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/수요웹툰/전지적독자시점/전지적독자시점.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 34) { 
        document.getElementById("randomBox").src ="../../CSS/수요웹툰/mainWebToonImages/캐슬.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "캐슬";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/수요웹툰/캐슬/캐슬.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 35) { 
        document.getElementById("randomBox").src ="../../CSS/수요웹툰/mainWebToonImages/튜토리얼 탑의 고인물.png";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "튜토리얼 탑의 고인물";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/수요웹툰/튜토리얼탑의고인물/튜토리얼탑의고인물.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 36) { 
        document.getElementById("randomBox").src ="../../CSS/수요웹툰/mainWebToonImages/화산귀환.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "화산귀환";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/수요웹툰/화산귀환/화산귀환.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #시대극";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    // 목요웹툰
    else if(randomNumber === 37) { 
        document.getElementById("randomBox").src ="../../CSS/목요웹툰/mainWebToonImages/나노마신.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "나노마신";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/목요웹툰/나노마신/나노마신.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 38) { 
        document.getElementById("randomBox").src ="../../CSS/목요웹툰/mainWebToonImages/나혼자네크로맨서.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "나혼자 네크로맨서";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/목요웹툰/나혼자네크로맨서/나혼자네크로맨서.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 39) { 
        document.getElementById("randomBox").src ="../../CSS/목요웹툰/mainWebToonImages/노답소녀.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "노답소녀";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/목요웹툰/노답소녀/노답소녀.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 40) { 
        document.getElementById("randomBox").src ="../../CSS/목요웹툰/mainWebToonImages/더복서.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "더복서";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/목요웹툰/더복서/더복서.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 41) { 
        document.getElementById("randomBox").src ="../../CSS/목요웹툰/mainWebToonImages/던전씹어먹는아티팩트.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "던전 씹어먹는 아티팩트";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/목요웹툰/던전씹어먹는아티팩트/던전씹어먹는아티팩트.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 42) { 
        document.getElementById("randomBox").src ="../../CSS/목요웹툰/mainWebToonImages/무사만리행.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "무사만리행";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/목요웹툰/무사만리행/무사만리행.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 43) { 
        document.getElementById("randomBox").src ="../../CSS/목요웹툰/mainWebToonImages/묵시의인플루언서.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "묵시의 인플루언서";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/목요웹툰/묵시의인플루언서/묵시의인플루언서.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #스릴러";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 44) { 
        document.getElementById("randomBox").src ="../../CSS/목요웹툰/mainWebToonImages/별을삼킨너에게.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "별을 삼킨 너에게";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/목요웹툰/별을삼킨너에게/별을삼킨너에게.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 45) { 
        document.getElementById("randomBox").src ="../../CSS/목요웹툰/mainWebToonImages/오빠세끼.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "오빠세끼";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/목요웹툰/오빠세끼/오빠세끼.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#에피소드 #일상";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 46) { 
        document.getElementById("randomBox").src ="../../CSS/목요웹툰/mainWebToonImages/이두나!.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "이두나!";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/목요웹툰/이두나!/이두나!.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 47) { 
        document.getElementById("randomBox").src ="../../CSS/목요웹툰/mainWebToonImages/정글쥬스.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "정글쥬스";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/목요웹툰/정글쥬스/정글쥬스.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 48) { 
        document.getElementById("randomBox").src ="../../CSS/목요웹툰/mainWebToonImages/포식동물.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "포식동물";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/목요웹툰/포식동물/포식동물.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #스릴러";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    // 금요웹툰
    else if(randomNumber === 49) { 
        document.getElementById("randomBox").src ="../../CSS/금요웹툰/mainWebToonImages/1초.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "1초";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/금요웹툰/1초/1초.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 50) { 
        document.getElementById("randomBox").src ="../../CSS/금요웹툰/mainWebToonImages/개를낳았다.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "개를 낳았다";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/금요웹툰/개를낳았다/개를낳았다.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 51) { 
        document.getElementById("randomBox").src ="../../CSS/금요웹툰/mainWebToonImages/걸어서30분.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "걸어서 30분";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/금요웹툰/걸어서30분/걸어서30분.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 52) { 
        document.getElementById("randomBox").src ="../../CSS/금요웹툰/mainWebToonImages/나혼자만렙뉴비.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "나혼자 만렙뉴비";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/금요웹툰/나혼자만렙뉴비/나혼자만렙뉴비.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 53) { 
        document.getElementById("randomBox").src ="../../CSS/금요웹툰/mainWebToonImages/낙향문사전.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "낙향문사전";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/금요웹툰/낙향문사전/낙향문사전.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 54) { 
        document.getElementById("randomBox").src ="../../CSS/금요웹툰/mainWebToonImages/내과박원장.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "내과 박원장";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/금요웹툰/내과박원장/내과박원장.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #개그";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 55) { 
        document.getElementById("randomBox").src ="../../CSS/금요웹툰/mainWebToonImages/데드퀸.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "데드퀸";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/금요웹툰/데드퀸/데드퀸.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 56) { 
        document.getElementById("randomBox").src ="../../CSS/금요웹툰/mainWebToonImages/매지컬메디컬.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "매지컬메디컬";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/금요웹툰/매지컬메디컬/매지컬메디컬.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 57) { 
        document.getElementById("randomBox").src ="../../CSS/금요웹툰/mainWebToonImages/삼국지톡.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "삼국지톡";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/금요웹툰/삼국지톡/삼국지톡.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#에피소드 #시대극";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 58) { 
        document.getElementById("randomBox").src ="../../CSS/금요웹툰/mainWebToonImages/상남자.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "상남자";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/금요웹툰/상남자/상남자.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 59) { 
        document.getElementById("randomBox").src ="../../CSS/금요웹툰/mainWebToonImages/세기말풋사과보습학원.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "세기말 풋사과 보습학원";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/금요웹툰/세기말풋사과보습학원/세기말풋사과보습학원.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 60) { 
        document.getElementById("randomBox").src ="../../CSS/금요웹툰/mainWebToonImages/죽지않으려면.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "죽지 않으려면";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/금요웹툰/죽지않으려면/죽지않으려면.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    // 토요웹툰
    else if(randomNumber === 61) { 
        document.getElementById("randomBox").src ="../../CSS/토요웹툰/mainWebToonImages/광장.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "광장";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/토요웹툰/광장/광장.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 62) { 
        document.getElementById("randomBox").src ="../../CSS/토요웹툰/mainWebToonImages/반드시해피엔딩.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "반드시 해피엔딩";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/토요웹툰/반드시해피엔딩/반드시해피엔딩.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 63) { 
        document.getElementById("randomBox").src ="../../CSS/토요웹툰/mainWebToonImages/스터디그룹.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "스터디그룹";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/토요웹툰/스터디그룹/스터디그룹.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 64) { 
        document.getElementById("randomBox").src ="../../CSS/토요웹툰/mainWebToonImages/어글리후드.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "어글리후드";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/토요웹툰/어글리후드/어글리후드.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 65) { 
        document.getElementById("randomBox").src ="../../CSS/토요웹툰/mainWebToonImages/엑스애쉬.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "엑스애쉬";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/토요웹툰/엑스애쉬/엑스애쉬.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 66) { 
        document.getElementById("randomBox").src ="../../CSS/토요웹툰/mainWebToonImages/조조코믹스.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "조조코믹스";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/토요웹툰/조조코믹스/조조코믹스.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#옴니버스 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 67) { 
        document.getElementById("randomBox").src ="../../CSS/토요웹툰/mainWebToonImages/존잘주의.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "존잘주의";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/토요웹툰/존잘주의/존잘주의.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 68) { 
        document.getElementById("randomBox").src ="../../CSS/토요웹툰/mainWebToonImages/청춘블라썸.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "청춘블라썸";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/토요웹툰/청춘블라썸/청춘블라썸.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#옴니버스 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 69) { 
        document.getElementById("randomBox").src ="../../CSS/토요웹툰/mainWebToonImages/초인의시대.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "초인의시대";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/토요웹툰/초인의시대/초인의시대.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 70) { 
        document.getElementById("randomBox").src ="../../CSS/토요웹툰/mainWebToonImages/최면학교.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "최면학교";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/토요웹툰/최면학교/최면학교.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #개그";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 71) { 
        document.getElementById("randomBox").src ="../../CSS/토요웹툰/mainWebToonImages/취사병전설이되다.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "취사병 전설이 되다";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/토요웹툰/취사병전설이되다/취사병전설이되다.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 72) { 
        document.getElementById("randomBox").src ="../../CSS/토요웹툰/mainWebToonImages/힙한남자.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "힙한남자";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/토요웹툰/힙한남자/힙한남자.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    // 일요웹툰
    else if(randomNumber === 73) { 
        document.getElementById("randomBox").src ="../../CSS/일요웹툰/mainWebToonImages/곱게키웠더니,짐승.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "곱게 키웠더니, 짐승";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/일요웹툰/곱게키웠더니,짐승/곱게키웠더니,짐승.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#에피소드 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 74) { 
        document.getElementById("randomBox").src ="../../CSS/일요웹툰/mainWebToonImages/나만보여!.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "나만 보여!";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/일요웹툰/나만보여!/나만보여!.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 75) { 
        document.getElementById("randomBox").src ="../../CSS/일요웹툰/mainWebToonImages/살아남은로맨스.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "살아남은 로맨스";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/일요웹툰/살아남은로맨스/살아남은로맨스.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 76) { 
        document.getElementById("randomBox").src ="../../CSS/일요웹툰/mainWebToonImages/소녀재판.png";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "소녀재판";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/일요웹툰/소녀재판/소녀재판.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 77) { 
        document.getElementById("randomBox").src ="../../CSS/일요웹툰/mainWebToonImages/수희0(tngmlek0).jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "수희0(tngmlek0)";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/일요웹툰/수희0(tngmlek0)/수희0(tngmlek0).html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 78) { 
        document.getElementById("randomBox").src ="../../CSS/일요웹툰/mainWebToonImages/싸움독학.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "싸움독학";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/일요웹툰/싸움독학/싸움독학.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 79) { 
        document.getElementById("randomBox").src ="../../CSS/일요웹툰/mainWebToonImages/약한영웅.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "약한영웅";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/일요웹툰/약한영웅/약한영웅.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#에피소드 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 80) { 
        document.getElementById("randomBox").src ="../../CSS/일요웹툰/mainWebToonImages/어느날갑자기서울은.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "어느날 갑자기 서울은";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/일요웹툰/어느날갑자기서울은/어느날갑자기서울은.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #스릴러";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 81) { 
        document.getElementById("randomBox").src ="../../CSS/일요웹툰/mainWebToonImages/이번생도잘부탁해.png";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "이번생도 잘부탁해";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/일요웹툰/이번생도잘부탁해/이번생도잘부탁해.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 82) { 
        document.getElementById("randomBox").src ="../../CSS/일요웹툰/mainWebToonImages/입학용병.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "입학용병";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/일요웹툰/입학용병/입학용병.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 83) { 
        document.getElementById("randomBox").src ="../../CSS/일요웹툰/mainWebToonImages/테러대부활.png";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "테러대부활";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/일요웹툰/테러대부활/테러대부활.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 84) { 
        document.getElementById("randomBox").src ="../../CSS/일요웹툰/mainWebToonImages/투신전생기.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "투신전생기";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/일요웹툰/투신전생기/투신전생기.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    // 신작웹툰
    else if(randomNumber === 85) { 
        document.getElementById("randomBox").src ="../../CSS/신작웹툰/mainWebToonImages/그해우리는-초여름이좋아!.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "그 해 우리는 - 초여름이 좋아!";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/신작웹툰/그해우리는-초여름이좋아!/그해우리는-초여름이좋아!.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 86) { 
        document.getElementById("randomBox").src ="../../CSS/신작웹툰/mainWebToonImages/만능잡캐.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "만능잡캐";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/신작웹툰/만능잡캐/만능잡캐.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 87) { 
        document.getElementById("randomBox").src ="../../CSS/신작웹툰/mainWebToonImages/미혼남녀의효율적만남.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "미혼남녀의 효율적 만남";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/신작웹툰/미혼남녀의효율적만남/미혼남녀의효율적만남.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 88) { 
        document.getElementById("randomBox").src ="../../CSS/신작웹툰/mainWebToonImages/봐선안되는것.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "봐선 안되는 것";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/신작웹툰/봐선안되는것/봐선안되는것.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#옴니버스 #스릴러";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 89) { 
        document.getElementById("randomBox").src ="../../CSS/신작웹툰/mainWebToonImages/신군.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "신군";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/신작웹툰/신군/신군.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 90) { 
        document.getElementById("randomBox").src ="../../CSS/신작웹툰/mainWebToonImages/온에어.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "온에어";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/신작웹툰/온에어/온에어.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #스릴러";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 91) { 
        document.getElementById("randomBox").src ="../../CSS/신작웹툰/mainWebToonImages/재난소년.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "재난소년";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/신작웹툰/재난소년/재난소년.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 92) { 
        document.getElementById("randomBox").src ="../../CSS/신작웹툰/mainWebToonImages/존망코인.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "존망코인";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/신작웹툰/존망코인/존망코인.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #스릴러";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 93) { 
        document.getElementById("randomBox").src ="../../CSS/신작웹툰/mainWebToonImages/헤어지면죽음.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "헤어지면 죽음";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/신작웹툰/헤어지면죽음/헤어지면죽음.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 94) { 
        document.getElementById("randomBox").src ="../../CSS/신작웹툰/mainWebToonImages/현실퀘스트.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "현실퀘스트";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/신작웹툰/현실퀘스트/현실퀘스트.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 95) { 
        document.getElementById("randomBox").src ="../../CSS/신작웹툰/mainWebToonImages/후궁스캔들.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "후궁스캔들";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/신작웹툰/후궁스캔들/후궁스캔들.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 96) { 
        document.getElementById("randomBox").src ="../../CSS/신작웹툰/mainWebToonImages/희란국연가.jpg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "희란국연가";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/신작웹툰/희란국연가/희란국연가.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    // 완결웹툰
    else if(randomNumber === 97) { 
        document.getElementById("randomBox").src ="../../CSS/완결웹툰/mainWebtoonImages/AI가세상을지배한다면.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "AI가 세상을 지배한다면";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/완결웹툰/AI가세상을지배한다면/AI가세상을지배한다면.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#옴니버스 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 98) { 
        document.getElementById("randomBox").src ="../../CSS/완결웹툰/mainWebtoonImages/D.P개의날.png";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "D.P 개의날";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/완결웹툰/D.P개의날/D.P개의날.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 99) { 
        document.getElementById("randomBox").src ="../../CSS/완결웹툰/mainWebtoonImages/롭플롭.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "롭플롭";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/완결웹툰/롭플롭/롭플롭.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 100) { 
        document.getElementById("randomBox").src ="../../CSS/완결웹툰/mainWebtoonImages/비밀상자.jpeg";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "비밀상자";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/완결웹툰/비밀상자/비밀상자.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 101) { 
        document.getElementById("randomBox").src ="../../CSS/완결웹툰/mainWebtoonImages/수상한비밀상담부.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "수상한 비밀 상담부";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/완결웹툰/수상한비밀상담부/수상한비밀상담부.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#에피소드 #스릴러";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 102) { 
        document.getElementById("randomBox").src ="../../CSS/완결웹툰/mainWebtoonImages/언메이크.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "언메이크";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/완결웹툰/언메이크/언메이크.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 103) { 
        document.getElementById("randomBox").src ="../../CSS/완결웹툰/mainWebtoonImages/용감한시민.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "용감한 시민";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/완결웹툰/용감한시민/용감한시민.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #액션";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 104) { 
        document.getElementById("randomBox").src ="../../CSS/완결웹툰/mainWebtoonImages/원수를사랑하라.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "원수를 사랑하라";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/완결웹툰/원수를사랑하라/원수를사랑하라.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #로맨스";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 105) { 
        document.getElementById("randomBox").src ="../../CSS/완결웹툰/mainWebtoonImages/웰캄투실버라이프.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "웰캄투실버라이프";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/완결웹툰/웰캄투실버라이프/웰캄투실버라이프.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#에피소드 #일상";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 106) { 
        document.getElementById("randomBox").src ="../../CSS/완결웹툰/mainWebtoonImages/인문학적감수성.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "인문학적 감수성";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/완결웹툰/인문학적감수성/인문학적감수성.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #드라마";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 107) { 
        document.getElementById("randomBox").src ="../../CSS/완결웹툰/mainWebtoonImages/조선홍보대행사조대박.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "조선홍보대행사 조대박";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/완결웹툰/조선홍보대행사조대박/조선홍보대행사조대박.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #개그";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
    else if(randomNumber === 108) { 
        document.getElementById("randomBox").src ="../../CSS/완결웹툰/mainWebtoonImages/해귀.jfif";
        document.getElementsByClassName("randomBoxInfo")[0].innerText = "해귀";
        document.getElementsByClassName("randomWebtoonRecommand")[0].innerText = "다시돌리기";
        const transformToWebtoon = () => {
            location.href="../../Components/완결웹툰/해귀/해귀.html"
        }
        document.getElementsByClassName("webtoonInfo")[0].innerText = "#스토리 #판타지";
        document.getElementsByClassName("webtoonInfo")[0].style.visibility = "visible";
        document.getElementById("randomBox").addEventListener("click", transformToWebtoon);
    }
}

//메인홈페이지로 돌아가는 함수 구현
const backToBegin = () => {
    location.href="../../Components/월요웹툰/index.html";
}