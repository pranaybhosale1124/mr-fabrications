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

    const contentDiv = document.getElementById("content");

    // Start fade-out before loading new page
    contentDiv.classList.remove("show");

    fetch(file)
        .then(response => response.text())
        .then(content => {
            contentDiv.innerHTML = content;

            // Fade-in after content loads
            setTimeout(() => {
                contentDiv.classList.add("show");
            }, 50);
        })
        .catch(() => {
            contentDiv.innerHTML = "<h2>404 - Page Not Found</h2>";
            contentDiv.classList.add("show");
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

function highlightActiveTab() {
    const currentHash = location.hash || "#/home";
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        if (link.getAttribute("href") === currentHash) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

window.addEventListener("hashchange", () => {
    loadPage();
    highlightActiveTab();
});

window.addEventListener("load", () => {
    loadPage();
    highlightActiveTab();
});