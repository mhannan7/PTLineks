// document.addEventListener('DOMContentLoaded', function () {

//     // 1. LOADING SCREEN (10 DETIK)
//     const loader = document.getElementById('loading-screen');
//     setTimeout(() => {
//         loader.style.opacity = '0';
//         loader.style.visibility = 'hidden';

//         // Init AOS setelah loading selesai
//         if (typeof AOS !== 'undefined') {
//             AOS.init({
//                 once: false,
//                 offset: 50,
//                 duration: 800
//             });
//         }
//     }, 10000);

//     // 2. HAMBURGER MENU TOGGLE
//     const hamburger = document.querySelector('.hamburger');
//     const navLinks = document.querySelector('.nav-links');
//     const navItems = document.querySelectorAll('.nav-item');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('active');
//         navLinks.classList.toggle('active');
//     });

//     navItems.forEach(item => {
//         item.addEventListener('click', () => {
//             hamburger.classList.remove('active');
//             navLinks.classList.remove('active');
//         });
//     });

//     // 3. AUTO SLIDERS
//     function setupSlider(selector, intervalTime) {
//         const slides = document.querySelectorAll(selector);
//         let index = 0;
//         if (slides.length > 0) {
//             setInterval(() => {
//                 slides[index].classList.remove('active');
//                 index = (index + 1) % slides.length;
//                 slides[index].classList.add('active');
//             }, intervalTime);
//         }
//     }

//     setupSlider('.gallery-slide', 4000); // Gallery
//     setupSlider('.cp-slide', 5000); // Company Profile

//     // 4. EMAILJS FORM
//     const contactForm = document.getElementById('contact-form');
//     if (contactForm) {
//         contactForm.addEventListener('submit', function (e) {
//             e.preventDefault();
//             const btn = this.querySelector('.submit-btn');
//             const originalText = btn.innerText;

//             btn.innerText = 'Mengirim...';
//             btn.disabled = true;

//             emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
//                 .then(() => {
//                     btn.innerText = 'Terkirim!';
//                     btn.style.background = '#28a745';
//                     this.reset();
//                     setTimeout(() => {
//                         btn.innerText = originalText;
//                         btn.style.background = '';
//                         btn.disabled = false;
//                     }, 3000);
//                 }, (err) => {
//                     btn.innerText = 'Gagal';
//                     btn.style.background = '#dc3545';
//                     console.error(err);
//                     setTimeout(() => {
//                         btn.innerText = originalText;
//                         btn.style.background = '';
//                         btn.disabled = false;
//                     }, 3000);
//                 });
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function () {

    // 1. LOADING SCREEN (10 DETIK)
    const loader = document.getElementById('loading-screen');
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';

        // Init AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                once: false,
                offset: 60,
                duration: 1000,
                easing: 'ease-out-cubic'
            });
        }
    }, 10000);

    // 2. NAVBAR SCROLL EFFECT
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(15, 23, 42, 0.7)';
        }
    });

    // 3. HAMBURGER MENU
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

    // 4. AUTO SLIDERS
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
    setupSlider('.gallery-slide', 4000);
    setupSlider('.cp-slide', 5000);

    // 5. EMAILJS FORM
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = this.querySelector('.submit-btn');
            const originalHTML = btn.innerHTML;

            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim...';
            btn.disabled = true;

            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(() => {
                    btn.innerHTML = '<i class="fa-solid fa-check"></i> Terkirim!';
                    btn.style.background = '#10b981';
                    this.reset();
                    setTimeout(() => {
                        btn.innerHTML = originalHTML;
                        btn.style.background = '';
                        btn.disabled = false;
                    }, 3000);
                }, (err) => {
                    btn.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Gagal';
                    btn.style.background = '#ef4444';
                    console.error(err);
                    setTimeout(() => {
                        btn.innerHTML = originalHTML;
                        btn.style.background = '';
                        btn.disabled = false;
                    }, 3000);
                });
        });
    }
});