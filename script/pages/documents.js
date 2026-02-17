function documentationPage(docPage){
    let docs = {};
    if(docPage == "resume"){
        docs = getResumeData();
    }else if(docPage == "coverLetter"){
        docs = getCoverLetterData();
    }

    return /*HTML*/`
    
    `;
}

function getResumeData(){
    return {};
}

function getCoverLetterData(){
    return {};
}