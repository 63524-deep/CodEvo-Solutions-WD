// script.js
document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.getElementsByClassName('close')[0];
    const contactForm = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    // Lightbox functionality
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightbox.style.display = "block";
            lightboxImg.src = item.dataset.src;
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target == lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Lazy loading functionality
    const lazyLoadImages = document.querySelectorAll('.lazy-load');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: "0px 0px 50px 0px"
    });

    lazyLoadImages.forEach(image => {
        observer.observe(image);
    });

    // Contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate form submission process
        setTimeout(() => {
            contactForm.style.display = 'none';
            thankYouMessage.style.display = 'block';
        }, 500); // Simulate a delay for form submission
    });
});
