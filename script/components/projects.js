function projectCards(){
    const data = getProjectData();
    return data.map(project => /*HTML*/`
        <article id="${project.id}" class="project_card">
            <div class="card_information">
                <h1>${project.title}</h1>
                <p>${project.description}</p>
                <a class="button glow click center" href=${project.repoLink} target="_blank">View the code</a>
                <a class="button glow click center" href=${project.demoLink} target="_blank">Open demo</a>
            </div>
            <div>
                <img src=${project.thumbnail} alt="" loading="lazy">
            </div>
        </article>
    `).join("");
}