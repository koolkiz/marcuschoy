// Smooth Scrolling and Scroll-to-Top Functions

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    var scrollToTopButton = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Header Animation
const animatedHeader = document.querySelector('.animated-header');
const animatedText = document.querySelector('.animated-text');

function animateHeader() {
    if (animatedHeader) {
        animatedHeader.style.transform = `translateY(${Math.sin(Date.now() / 750) * 20}px)`;
    }
    if (animatedText) {
        animatedText.style.transform = `translateY(${Math.cos(Date.now() / 750) * 20}px)`;
    }
    requestAnimationFrame(animateHeader);
}

animateHeader();
