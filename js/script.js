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

function loadHTMLpage(pathname, elementId) {
    console.debug(`Loading ${pathname}`)
    
    fetch(pathname)
        .then(response => response.text())
        .then(data => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
                console.info(`Finished loading ${elementId}`)
            } else {
                console.error(`Error: Element with ID "${elementId}" not found.`)
            }
        })
        .catch(error => console.error(`Error loading HTML: ${error}`))

    console.log('')
}