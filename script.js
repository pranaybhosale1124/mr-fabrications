// Define all routes and their HTML file paths
const routes = {
    "/home": "pages/home/index.html",
    "/about": "pages/about/index.html",
    "/specialities": "pages/specialities/index.html",
    "/projects": "pages/projects/index.html"
};

// Function to load the correct page based on URL hash
function loadPage() {
    let path = location.hash.replace("#", "") || "/home";
    const file = routes[path];

    fetch(file)
        .then(response => response.text())
        .then(content => {
            document.getElementById("content").innerHTML = content;
        })
        .catch(() => {
            document.getElementById("content").innerHTML = "<h2>404 - Page Not Found</h2>";
        });
}

// Listen for hash URL changes
window.addEventListener("hashchange", loadPage);

// Load correct page on first visit
window.addEventListener("load", loadPage);

function scrollToFooter() {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    highlightContactInfo();
}