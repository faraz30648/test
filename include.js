// Function to load external HTML into a div
async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const text = await response.text();
            document.getElementById(id).innerHTML = text;
            
            // Highlight active link based on current page
            highlightActiveLink();
        } else {
            console.error(`Error loading ${file}`);
        }
    } catch (err) {
        console.error(`Error: ${err}`);
    }
}

// Logic to highlight the current page in navigation
function highlightActiveLink() {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Execute on load
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('global-header', 'header.html');
    loadComponent('global-footer', 'footer.html');
});
