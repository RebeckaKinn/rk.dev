function projectCards(){
    const data = getProjectData();
    return data.map(project => /*HTML*/`
        <article id="${project.id}" class="project_card">
            <div>
                <img src=${project.thumbnail} alt="" loading="lazy">
            </div>
            <div class="card_information">
                <h1>${project.title}</h1>
                <p>${project.description}</p>
                <div class="button-container">
                    <a class="button glow click center" href=${project.repoLink} target="_blank">View the code</a>
                    <a class="button glow click center" href=${project.demoLink} target="_blank">Open demo</a>
                </div>
            </div>
        </article>
    `).join("");
}