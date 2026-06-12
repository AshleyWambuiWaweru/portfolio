// Animated Counters

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (count < target) {

            counter.innerText = count + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }
    };

    updateCounter();

});

// Scroll Reveal Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

        }

    });

}, {
    threshold: 0.1
});

document.querySelectorAll(
    '.timeline-item, .clinical-card, .cert-card, .stat-card'
).forEach((el) => {

    observer.observe(el);

});

// Navbar Background on Scroll

window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {

        navbar.classList.add('scrolled');

    } else {

        navbar.classList.remove('scrolled');

    }

});
