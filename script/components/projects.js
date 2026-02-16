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
                <div class="button-container bottom">
                    <a class="link_tag click center" href=${project.repoLink} target="_blank">View the code</a>
                    <span class="link_tag">&#124;&#124;</span>
                    <a class="link_tag click center" href=${project.demoLink} target="_blank">Open demo</a>
                </div>
            </div>
        </article>
    `).join("");
}