let page = "about"; //for testing. "home" for default

function drawPage(){
    document.getElementById('app').innerHTML = /*HTML*/`
        <header>${header()}</header>
        <main>${createMainContent()}</main>
        <footer>${footer()}</footer>
    `;
}

function createMainContent(){
    if(page == "home") return mainPage();
    else if(page == "about") return about();
    else if(page == "resume" || page == "coverLetter") return documentationPage(page)
    else return errorPage();
}

function changePage(newPage){
    page = newPage;
    drawPage();
}
