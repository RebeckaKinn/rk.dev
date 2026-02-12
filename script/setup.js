function drawPage(){
    document.getElementById('app').innerHTML = /*HTML*/`
        <header>${header()}</header>
        <main>${createMainContent()}</main>
        <footer>${footer()}</footer>
    `;
}

function createMainContent(){
    return mainPage();
}