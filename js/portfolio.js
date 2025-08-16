class PortfolioPage {
    constructor() {
        this.skills = [
            'Python', 'C#','Git', 'Linux', 'Shell', 'UI/UX', 'APIs', 'Open Source', 'SVG', 'JavaScript', 'HTML5', 'CSS3',
        ];
        this.projects = [
            {
                title: 'My website: akeoot.org',
                desc: 'My own website and blog, built from scratch with custom design and features.',
                tags: ['Cloudflare', 'HTML', 'CSS', 'JS'],
                link: 'https://akeoot.org',
            },
            {
                title: 'Open Source Contributions',
                desc: 'Contributions to open source projects on GitHub.',
                tags: ['Open Source', 'Git', 'Collaboration'],
                link: 'https://github.com/Akeoott',
            },
            {
                title: 'Fern-AI (WIP)',
                desc: 'An LLM/MLM made for general purpouse tasks using agents.',
                tags: ['AI', 'Python', 'Automation', 'Agents'],
                link: 'https://github.com/Akeoott-Fern-AI/Fern-AI',
            },
        ];
    }

    renderSkills() {
        const skillsList = document.getElementById('skills-list');
        skillsList.innerHTML = '';
        this.skills.forEach(skill => {
            const el = document.createElement('span');
            el.className = 'skill';
            el.textContent = skill;
            el.tabIndex = 0;
            el.setAttribute('aria-label', skill);
            skillsList.appendChild(el);
        });
    }

    renderProjects() {
        const projectsSection = document.getElementById('projects');
        projectsSection.innerHTML = '';
        this.projects.forEach((project, idx) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.setAttribute('tabindex', 0);
            card.setAttribute('aria-label', project.title);
            card.style.animation = `fadeIn 0.7s ${0.1 + idx * 0.08}s both`;

            card.innerHTML = `
                <div class="project-title">${project.title}</div>
                <div class="project-desc">${project.desc}</div>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class='project-tag'>${tag}</span>`).join(' ')}
                </div>
                <hr class="hr-solid">
                <div class="project-link"><a href="${project.link}" target="_blank" rel="noopener">View</a></div>
            `;
            card.addEventListener('click', () => {
                window.open(project.link, '_blank');
            });
            card.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    window.open(project.link, '_blank');
                }
            });
            projectsSection.appendChild(card);
        });
    }

    animateOnScroll() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.15 });
        document.querySelectorAll('.about, .project-card').forEach(el => {
            observer.observe(el);
        });
    }

    init() {
        this.renderSkills();
        this.renderProjects();
        this.animateOnScroll();
    }
}

// Dark mode: set default to dark, allow toggle, persist in localStorage
function setDarkMode(enabled) {
    if (enabled) {
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', '1');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', '0');
    }
}
function updateGithubLogo() {
    const abt_githubImg = document.getElementById('about-github-logo-img');
    const soc_githubImg = document.getElementById('social-github-logo-img');
    const isDark = document.body.classList.contains('dark');
    if (abt_githubImg) {
        abt_githubImg.src = isDark ? abt_githubImg.getAttribute('data-dark') : abt_githubImg.getAttribute('data-light');
    }
    if (soc_githubImg) {
        soc_githubImg.src = isDark ? soc_githubImg.getAttribute('data-dark') : soc_githubImg.getAttribute('data-light');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Set default to dark mode unless user has preference
    const darkPref = localStorage.getItem('darkMode');
    if (darkPref === null || darkPref === '1') {
        setDarkMode(true);
    } else {
        setDarkMode(false);
    }
    updateGithubLogo();
    // Portfolio logic
    const page = new PortfolioPage();
    page.init();
    // Only one <details> open at a time in .info-details
    const infoDetails = document.querySelector('.info-details');
    if (infoDetails) {
        infoDetails.addEventListener('toggle', (e) => {
            if (e.target.tagName === 'DETAILS' && e.target.open) {
                infoDetails.querySelectorAll('details').forEach((el) => {
                    if (el !== e.target) el.open = false;
                });
            }
        }, true);
    }
    // Dark mode switch
    const switchBtn = document.getElementById('dark-switch');
    if (switchBtn) {
        switchBtn.addEventListener('click', () => {
            const isDark = document.body.classList.contains('dark');
            setDarkMode(!isDark);
            updateGithubLogo();
        });
    }
    // Gliter effect toggle
    const gliterBtn = document.getElementById('gliter-switch');
    const gliterOverlay = document.getElementById('gliter-overlay');
    const GLITER_KEY = 'gliterOn';
    function setGliter(on) {
        if (!gliterOverlay) return;
        if (on) {
            gliterOverlay.innerHTML = '<img src="/images/gliter.gif" alt="Gliter effect" draggable="false">';
            gliterOverlay.classList.add('active');
            gliterOverlay.style.display = 'block';
            localStorage.setItem(GLITER_KEY, '1');
        } else {
            gliterOverlay.innerHTML = '';
            gliterOverlay.classList.remove('active');
            gliterOverlay.style.display = 'none';
            localStorage.setItem(GLITER_KEY, '0');
        }
    }
    if (gliterBtn && gliterOverlay) {
        gliterBtn.addEventListener('click', () => {
            const isOn = gliterOverlay.classList.contains('active');
            setGliter(!isOn);
        });
        // On load, restore state: default ON if not set
        const gliterPref = localStorage.getItem(GLITER_KEY);
        if (gliterPref === null || gliterPref === '1') {
            setGliter(true);
        } else {
            setGliter(false);
        }
    }    
    // Back button
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = '/';
            }
        });
    }
});