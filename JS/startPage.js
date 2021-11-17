//시작 화면에서 0.4초마다 아이콘 변경
let index = 0;
window.onload = function() {
    slideShow();
}

const slideShow = () => {
    let i;
    let image = document.getElementsByClassName("icon-image"); //class명이 icon-image인 dom 참조
    for(i = 0; i < image.length; i++){
        image[i].style.display = "none"; //처음에는 display를 none으로
    }
    index++;
    if(index >  image.length) {
        index = 1; //인덱스가 초과되면(아이콘이 한 바퀴 돌면) 1로 다시 초기화
    }

    image[index-1].style.display = "block"; //해당 인덱스의 display는 block으로
    setTimeout(slideShow, 400); //함수를 0.4초마다 호출
}

//시작 화면에서 2초 후 메인화면으로 이동
setTimeout(() => {
    location.href = "./Components/main.html";
}, 2000);