// Function to load HTML components without AJAX
function includeHTML() {
    const elements = document.getElementsByClassName('include-html');
    Array.from(elements).forEach(element => {
        const component = element.getAttribute('data-component');
        if (component === 'header') {
            // Check if we're in a subdirectory by looking at the page URL
            const isSubdirectory = window.location.pathname.includes('/pages/');
            const imagePath = isSubdirectory ? '../../images' : 'images';
            const pagesPath = isSubdirectory ? '../../pages' : 'pages';
            
            element.innerHTML = `
                <div class="top-bar">
                    <div class="phone-number">(720) 295-4853</div>
                    <div class="social-icons">
                        <a href="https://facebook.com/kattkd" target="_blank">
                            <img src="${imagePath}/facebook.svg" alt="Facebook">
                        </a>
                        <a href="https://youtube.com/kattkd" target="_blank">
                            <img src="${imagePath}/youtube.svg" alt="YouTube">
                        </a>
                        <a href="https://www.instagram.com/kat_tkdjj" target="_blank">
                            <img src="${imagePath}/instagram.svg" alt="Instagram">
                        </a>
                    </div>
                    <button class="hamburger" aria-label="Toggle navigation">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                </div>

                <nav class="main-nav">
                    <ul class="nav-items">
                        <li class="nav-item">
                            <a href="${isSubdirectory ? '../../index.html' : 'index.html'}" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Programs</a>
                            <ul class="dropdown">
                                <li><a href="${pagesPath}/programs/kids.html">Kids Program</a></li>
                                <li><a href="${pagesPath}/programs/adults.html">Adults Program</a></li>
                                <li><a href="${pagesPath}/programs/bjj.html">BJJ Program</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">About</a>
                            <ul class="dropdown">
                                <li><a href="${pagesPath}/about/school-history.html">School History</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Students</a>
                            <ul class="dropdown">
                                <li><a href="${pagesPath}/students/requirements.html">Requirements</a></li>
                                <li><a href="${pagesPath}/students/terminology.html">Terminology</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Taekwondo</a>
                            <ul class="dropdown">
                                <li><a href="${pagesPath}/taekwondo/biomechanics.html">Biomechanics</a></li>
                                <li><a href="${pagesPath}/taekwondo/books.html">Books</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            `;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    includeHTML();

    const hamburger = document.querySelector('.hamburger');
    const navItems = document.querySelector('.nav-items');
    const mainNav = document.querySelector('.main-nav');

    hamburger.addEventListener('click', () => {
        navItems.classList.toggle('active');
        mainNav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}); 