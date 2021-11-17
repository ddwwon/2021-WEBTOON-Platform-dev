function Write(){
    const title =document.querySelector('.form-control');
    const content =document.querySelector('#contentInput');
   
    if(title.value == ""){
        alert("제목을 작성해주세요.")
    }
    else if(content.value == "" ){
        alert("내용을 작성해주세요.")
    }
    else{
        location.href ='../Components/notice.html'
    }
}