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
        <section class="page-margin top-margin main-page info-page-width-cap">
            <div>
                <h1>${docs.title}</h1>
                <p>${docs.description}</p>
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
            title: "Resume",
            description: "A clear overview of my experience, technical skills, and professional background as a Front-End Developer. Here you’ll find the tools I work with, projects I’ve contributed to, and the experience that has shaped my approach to building user-friendly web solutions."
        };
}

function getCoverLetterData(){
    return {
            link: "./documents/Rebecka_Kinn_Cover_Letter_2026.pdf",
            title: "Cover Letter",
            description: "A short introduction to who I am as a developer, what motivates me, and the value I bring to a team. This letter highlights my passion for front-end development, my work style, and the mindset I bring to new opportunities."
        };
}