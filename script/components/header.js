function header(){
    return /*HTML*/`
    <section>
        <div class="header-logo">
            <div class="logo-image click" onclick="changePage('home')">
                <img src="./img/logo/main_logo_light.svg" loading="lazy" alt="">
            </div>
            <h1 class="statement-font remove-margin">Rebecka Kinn</h1>
        </div>


        <ul class="button-container">
            <li>
                <button onclick="changePage('resume')" class="link_tag click">resume</button>
            </li>
            <span class="link_tag">&#124;&#124;</span>
            <li>
                <button onclick="changePage('coverLetter')" class="link_tag click">cover letter</button>
            </li>
        </ul>
    </section>
    `;
}
