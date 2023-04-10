let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                let link = document.querySelector('header nav a[href*="' + id + '"]');
                if (link !== null) {
                    link.classList.add('active');
                }
            });
        };
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    
    });

};


ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-container h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-container p, .about-content', {origin: 'right'});

const tyepd = new Typed('.multiple-text', {
    strings: ['Frontend Develover!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})