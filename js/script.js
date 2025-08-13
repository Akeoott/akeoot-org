/*
    © 2025 Akeoott. All rights reserved.
*/

console.info(
    '%c © 2025 Akeoott.\nAll rights reserved.',
    'font-size: 20pt',
)

const {
  pathname: PATHNAME
} = window.location

console.info(`Current Location ${PATHNAME}`)
console.log('')

const sidebar = "sidebar"

function loadHTML(initialPath, elementId) {
    console.info(`Attempting to load ${elementId}`)
    
    let finalPath = initialPath;

    if (elementId.includes(sidebar)) {
        console.debug(`Picking ${elementId}`)
        finalPath = `/includes/sidebars/${elementId}.html`;
    }
    
    loadHTMLpage(finalPath, elementId)
}

let sidebarLogicInitialized = false;
function loadHTMLpage(pathname, elementId) {
    console.debug(`Loading ${pathname}`)
    fetch(pathname)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.text();
        })
        .then(data => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
                // Add sidebar class if this is a sidebar
                if (elementId.startsWith('sidebar-')) {
                    element.classList.add('sidebar');
                }
                // Re-initialize sidebar logic after loading sidebar content
                if (element.classList.contains('sidebar')) {
                    sidebarLogicInitialized = false;
                    initSidebarLogic();
                }
                console.info(`Finished loading ${elementId}`)
            } else {
                console.error(`Error: Element with ID "${elementId}" not found.`)
            }
        })
        .catch(error => console.error(`Error loading HTML: ${error}`))
    console.log('')
}

// Sidebar expand/contract logic for mobile
function initSidebarLogic() {
    if (sidebarLogicInitialized) return;
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');
    if (!sidebar) {
        console.warn('[Sidebar] Sidebar element not found.');
        return;
    }
    if (!toggleBtn) {
        console.warn('[Sidebar] Sidebar toggle button not found.');
        return;
    }

    // Helper to check if mobile
    function isMobile() {
        return window.innerWidth <= 900;
    }

    function expandSidebar() {
        sidebar.classList.add('sidebar-expanded');
        toggleBtn.setAttribute('aria-label', 'Close sidebar');
        toggleBtn.innerText = '×';
        document.body.style.overflow = 'hidden';
        console.info('[Sidebar] Sidebar expanded.');
    }
    function contractSidebar() {
        sidebar.classList.remove('sidebar-expanded');
        toggleBtn.setAttribute('aria-label', 'Open sidebar');
        toggleBtn.innerText = '☰';
        document.body.style.overflow = '';
        console.info('[Sidebar] Sidebar contracted.');
    }

    // Prevent multiple listeners
    if (!toggleBtn.hasAttribute('data-sidebar-listener')) {
        toggleBtn.addEventListener('click', function () {
            if (sidebar.classList.contains('sidebar-expanded')) {
                console.debug('[Sidebar] Toggle button clicked: contracting sidebar.');
                contractSidebar();
            } else {
                console.debug('[Sidebar] Toggle button clicked: expanding sidebar.');
                expandSidebar();
            }
        });
        toggleBtn.setAttribute('data-sidebar-listener', 'true');
    }

    // Add close button handler (delegated, since sidebar is loaded dynamically)
    if (!sidebar.hasAttribute('data-sidebar-listener')) {
        sidebar.addEventListener('click', function (e) {
            const closeBtn = e.target.closest('#sidebar-close');
            if (closeBtn) {
                console.debug('[Sidebar] Close button clicked inside sidebar.');
                contractSidebar();
            }
        });
        sidebar.setAttribute('data-sidebar-listener', 'true');
    }

    // Hide sidebar if not mobile
    function handleResize() {
        if (!isMobile()) {
            if (sidebar.classList.contains('sidebar-expanded')) {
                console.debug('[Sidebar] Resizing to desktop: contracting sidebar.');
            }
            contractSidebar();
            sidebar.classList.remove('sidebar-expanded');
            toggleBtn.style.display = 'none';
            sidebar.style.left = '';
            document.body.style.overflow = '';
            console.info('[Sidebar] Sidebar hidden (desktop mode).');
        } else {
            toggleBtn.style.display = 'flex';
            contractSidebar();
            console.info('[Sidebar] Sidebar ready for mobile.');
        }
    }
    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();

    // Close sidebar when clicking outside (on overlay)
    if (!document.body.hasAttribute('data-sidebar-outside-listener')) {
        document.addEventListener('click', function (e) {
            if (!isMobile()) return;
            if (sidebar.classList.contains('sidebar-expanded')) {
                if (!sidebar.contains(e.target) && e.target !== toggleBtn) {
                    console.debug('[Sidebar] Clicked outside sidebar, contracting.');
                    contractSidebar();
                }
            }
        });
        document.body.setAttribute('data-sidebar-outside-listener', 'true');
    }

    // Optional: close on ESC
    if (!document.body.hasAttribute('data-sidebar-esc-listener')) {
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && sidebar.classList.contains('sidebar-expanded')) {
                console.debug('[Sidebar] ESC pressed, contracting sidebar.');
                contractSidebar();
            }
        });
        document.body.setAttribute('data-sidebar-esc-listener', 'true');
    }

    sidebarLogicInitialized = true;
    console.info('[Sidebar] Sidebar logic initialized.');
}

// Call initSidebarLogic after DOMContentLoaded and after sidebar is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Try to initialize immediately (for static sidebar)
    initSidebarLogic();
});