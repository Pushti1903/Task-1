document.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(90deg, #00a, #0a0)';
    } else {
        navbar.style.background = 'linear-gradient(90deg, #00f, #0ff)';
    }
});
