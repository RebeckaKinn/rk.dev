function documentationPage(docPage){
    let docs = {};
    if(docPage == "resume"){
        docs = getResumeData();
    }else if(docPage == "coverLetter"){
        docs = getCoverLetterData();
    }else{
        changePage();
        return;
    }

    console.log(docs)
    return /*HTML*/`
        <section class="page-margin top-margin main-page">
            <div>
                <h1>${docs.title}</h1>
                <a href=${docs.link} download class="button glow click center">Download ${docs.title}</a>
            </div>
            <iframe src=${docs.link} width="100%" height="700px">
                Nettleseren støtter ikke preview.
            </iframe>
        </section>
    `;
}

function getResumeData(){
    return {
            link: "./documents/Rebecka_Kinn_Resume_2026.pdf",
            title: "Resume"
        };
}

function getCoverLetterData(){
    return {
            link: "./documents/Rebecka_Kinn_Cover_Letter_2026.pdf",
            title: "Cover Letter"
        };
}