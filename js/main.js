document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');
    const overlay = document.querySelector('.sidebar-overlay');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navUl.classList.toggle('open');
            if (overlay) {
                overlay.classList.toggle('active');
            }
        });

        if (overlay) {
            overlay.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navUl.classList.remove('open');
                overlay.classList.remove('active');
            });
        }

        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navUl.classList.remove('open');
                if (overlay) {
                    overlay.classList.remove('active');
                }
            });
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hamburger.classList.remove('active');
                navUl.classList.remove('open');
                if (overlay) {
                    overlay.classList.remove('active');
                }
            }
        });
    }
});
