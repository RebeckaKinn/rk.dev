function mainPage(){
    return /*HTML*/`
    ${banner()}
    <section class="main-page">
        <div class="info-page-width-cap">
            <h1>Projects</h1>
            <p>Here is some of my larger projects. Feel free to check them out. Or visit my GitHub to view some of my other work:</p>
            <a href="https://github.com/RebeckaKinn" target="_blank" class="button glow click center">github.com/RebeckaKinn</a>
        </div>
        <div class="project-list page-margin">
            ${projectCards()}
        </div>
    </section>
    `;
}

function banner(){
    return /*HTML*/`
    <section class="banner">
        <div class="banner-content fullSize page-margin">
            <div class="banner-information">
                <h1 class="heading"><span>Frontend developer</span> with passion for creativity and functionality</h1>
                <p>I design and build modern, user-friendly web experiences that combine creativity with functionality.</p>
                <p>Explore my projects and feel free to reach out!</p>
                <button onclick="changePage('about')" class="button glow click center">< get to know me /></button>
            </div>
                <div class="profile-circle center click">
                    <img src="./img/profile/profile_1.jfif" alt="Profile image - an image of Rebecka Kinn" loading="lazy">
                </div>
        </div>
    </section>
    `;
}

