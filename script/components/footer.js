function footer(){
    return /*HTML*/`
        <section class="center footer-section">
            <div class="footer-grid">
                <div>
                    <img src="./img/logo/logo_light.svg" alt="" loading="lazy">
                </div>
                <div>
                    <h3>Links</h3>
                    <ul class="footer-link-list">
                        <li>
                             <button onclick="changePage('resume')" class="link_tag click">resume</button> 
                             <span class="link_tag white">&#124;&#124;</span>
                             <a href=${getResumeData().link} class="link_tag click" download>download</a>
                        </li>
                        <li>
                            <button onclick="changePage('coverLetter')" class="link_tag click">cover letter</button>
                            <span class="link_tag white">&#124;&#124;</span>
                            <a href=${getCoverLetterData().link} class="link_tag click" download>download</a>
                        </li>
                        <li>
                             <a href="https://github.com/RebeckaKinn" target="_blank" class="link_tag click">github.com/RebeckaKinn</a>
                        </li>
                        <li>
                             <a href="https://www.linkedin.com/in/rebecka-sandbrekkene-kinn/" target="_blank" class="link_tag click">linkedin.com/in/rebecka-sandbrekkene-kinn</a>
                        </li>
                    </ul>
                </div>
            </div>
            <p class="footer-txt">&copy; 2026 Rebecka Kinn. All Rights Reserved.</p>
        </section>
    `;
}