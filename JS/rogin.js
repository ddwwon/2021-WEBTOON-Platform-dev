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