let page = "home";

function drawPage(){
    document.getElementById('app').innerHTML = /*HTML*/`
        <header>${header()}</header>
        <main>${createMainContent()}</main>
        <footer>${footer()}</footer>
    `;
}

function createMainContent(){
    if(page == "home") return mainPage();
    else return errorPage();
}

function changePage(newPage){
    page = newPage;
    drawPage();
}
