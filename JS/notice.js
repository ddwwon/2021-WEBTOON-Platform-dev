//paging 구현을 못함
function Paging(totalContentsSize, ShowPagesOnPage, ShowContentsOnPage, selectpage){

    const totalPageSize = Math.ceil(totalContentsSize/ShowContentsOnPage);  // 총 페이지 수
    const currentPage = selectpage;
    const startPageNum = currentPage -  Math.round(ShowPagesOnPage / 2) +1;// pagination이 보여주고 있는 첫 페이지
    const endPageNum = currentPage +  Math.round(ShowPagesOnPage / 2) -1;   // pagination이 보여주고 있는 마지막 페이지

    if(endPageNum > totalPageSize) {
        endPageNum = totalPageSize
    }
    
    return {
        startPageNum,
        endPageNum,
        totalPageSize,
        totalContentsSize,
        ShowPagesOnPage,
        ShowContentsOnPage,
        currentPage
    }
}

const info = Paging(280, 5, 10, 21) 

for(let i = info. startPageNum ; i <= info.endPageNum; i++){
    i == info.currentPage ? console.log(`<li>cur : ${i}</li>`) : console.log(`<li>${i}</li>`)
}