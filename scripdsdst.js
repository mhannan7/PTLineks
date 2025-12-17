document.addEventListener('DOMContentLoaded', function () {

    // 1. LOADING SCREEN (10 DETIK)
    const loader = document.getElementById('loading-screen');
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';

        // Init AOS setelah loading selesai
        if (typeof AOS !== 'undefined') {
            AOS.init({
                once: false,
                offset: 50,
                duration: 800
            });
        }
    }, 10000);

    // 2. HAMBURGER MENU TOGGLE
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 3. AUTO SLIDERS
    function setupSlider(selector, intervalTime) {
        const slides = document.querySelectorAll(selector);
        let index = 0;
        if (slides.length > 0) {
            setInterval(() => {
                slides[index].classList.remove('active');
                index = (index + 1) % slides.length;
                slides[index].classList.add('active');
            }, intervalTime);
        }
    }

    setupSlider('.gallery-slide', 4000); // Gallery
    setupSlider('.cp-slide', 5000); // Company Profile

    // 4. EMAILJS FORM
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = this.querySelector('.submit-btn');
            const originalText = btn.innerText;

            btn.innerText = 'Mengirim...';
            btn.disabled = true;

            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(() => {
                    btn.innerText = 'Terkirim!';
                    btn.style.background = '#28a745';
                    this.reset();
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.style.background = '';
                        btn.disabled = false;
                    }, 3000);
                }, (err) => {
                    btn.innerText = 'Gagal';
                    btn.style.background = '#dc3545';
                    console.error(err);
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.style.background = '';
                        btn.disabled = false;
                    }, 3000);
                });
        });
    }
});