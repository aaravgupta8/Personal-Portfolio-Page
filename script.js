document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get the ID from the href
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

