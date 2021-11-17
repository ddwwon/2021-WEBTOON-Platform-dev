function Join(){
    const id =document.querySelector('#idInput');
    const pw =document.querySelector('#passwordInput');
    const re_pw =document.querySelector('#re-passwordInput');
    const nickname =document.querySelector('#NickNameInput');
    const name =document.querySelector('#NameInput');
    const e_mail =document.querySelector('#e-mailInput');
    const phone_num =document.querySelector('#PhoneNumInput');
    const agree = document.getElementById('check').checked;
    if(id.value == "" ||pw.value == "" ||re_pw.value == "" ||nickname.value == "" ||name.value == "" ||e_mail.value == "" ){
        alert(" * 을 채워주세요.")
    }
    else{
        if(pw.value !== re_pw.value){
            alert("비밀번호를 확인해주세요.")
        }
        else if(!agree){
            alert("이용약관에 동의해주세요.")
        }
        else{
            location.href = 'succeedJoin.html'
        }
    }
}