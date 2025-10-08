// Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('.nav-menu');
       
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
       
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
       
        // Initialize Swiper
        const swiper = new Swiper('.interviewSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
       
        // Counter Animation
        function animateCounter() {
            const counters = document.querySelectorAll('.counter-number');
            const speed = 200;
           
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target') || +counter.innerText;
                const count = +counter.innerText;
                const increment = target / speed;
               
                if(count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(animateCounter, 1);
                } else {
                    counter.innerText = target;
                }
            });
        }
       
        // Start counter animation when the element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
       
        const counterSection = document.querySelector('.counter');
        observer.observe(counterSection);