document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links a');

    // Toggle mobile navigation
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Function to apply the correct theme
    const applyTheme = (theme) => {
        if (theme === 'dark-mode') {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    };

    // Event listener for the theme toggle button
    themeToggle.addEventListener('click', () => {
        let newTheme = document.body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    // Check local storage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // If no theme is saved, we respect the initial class on the body (dark-mode)
        // and set it in local storage for future visits.
        localStorage.setItem('theme', 'dark-mode');
    }
});
