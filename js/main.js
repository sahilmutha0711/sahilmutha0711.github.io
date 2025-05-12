/*===========================
    Main JavaScript File
============================*/

(function() {
    'use strict';
    
   // Preloader
    const preloader = document.querySelector('.preloader');
    const loaderBar = document.querySelector('.loader-bar');
    const percentEl = document.querySelector('.percent');

    // Simulate loading progress - faster now
    let loaded = 0;
    const interval = setInterval(() => {
        loaded += Math.floor(Math.random() * 10) + 5; // Faster increment
        if (loaded > 100) loaded = 100;
        
        loaderBar.style.width = loaded + '%';
        percentEl.textContent = loaded + '%';
        
        if (loaded === 100) {
            clearInterval(interval);
            // Create bubble transition after loading completes
            createBubbleTransition();
        }
    }, 50); // Faster interval from 100ms to 50ms

    // Force complete after 3 seconds instead of 5
    setTimeout(() => {
        if (loaded < 100) {
            loaded = 100;
            loaderBar.style.width = '100%';
            percentEl.textContent = '100%';
            clearInterval(interval);
            
            // Create bubble transition after loading completes
            createBubbleTransition();
        }
    }, 3000);

    // Function to create bubble transition
    function createBubbleTransition() {
        // Create bubble element
        const bubble = document.createElement('div');
        bubble.className = 'transition-bubble';
        document.body.appendChild(bubble);
        
        // Animate the bubble
        setTimeout(() => {
            bubble.classList.add('expand');
            
            // After bubble animation completes, hide preloader and show content
            setTimeout(() => {
                preloader.classList.add('hide');
                bubble.classList.add('hide');
                initAnimations();
                
                // Remove bubble after animation
                setTimeout(() => {
                    bubble.remove();
                }, 1000);
            }, 800);
        }, 300);
    }
    
    
    // Initialize animations after preloader
    function initAnimations() {
        // Hero section animations
        gsap.to('.hero-text', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        });
        
        gsap.to('.hero-image', {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out'
        });
        
        // Initialize AOS animations
        AOS.init({
            duration: 800,
            offset: 100,
            once: true,
            easing: 'ease-in-out',
            delay: 100
        });
        
        // Initialize Typed.js
        if (document.querySelector('.profession')) {
            const typed = new Typed('.profession', {
                strings: ['Generative AI', 'Data Science', 'Data Engineering', 'Data Analysis', 'Machine Learning', 'Natural Language Processing', 'Artificial Intelligence'],
                typeSpeed: 60,
                backSpeed: 40,
                backDelay: 3500,
                loop: true
            });
        }
        
        // Initialize particles background
        if (document.getElementById('particles-js')) {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 70,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#4361ee"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#4361ee",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 3,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        }

        const scrollReveal = () => {
            const elements = document.querySelectorAll('.scroll-reveal');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
            
            // Add floating bubbles on scroll
            const scrollPosition = window.scrollY;
            if (scrollPosition > 300 && scrollPosition % 200 === 0) {
                createFloatingBubble();
            }
        };
        
        window.addEventListener('scroll', scrollReveal);
        scrollReveal(); // Initial check

        // Create floating bubbles on scroll
    function createFloatingBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'floating-bubble';
        
        const size = Math.random() * 80 + 20; // 20-100px
        const section = document.querySelector('section:nth-of-type(' + (Math.floor(Math.random() * 5) + 1) + ')');
        
        if (!section) return;
        
        const sectionRect = section.getBoundingClientRect();
        
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * (sectionRect.width - size) + 'px';
        bubble.style.top = (window.scrollY + sectionRect.top + Math.random() * (sectionRect.height - size)) + 'px';
        bubble.style.opacity = Math.random() * 0.3 + 0.1; // 0.1-0.4
        bubble.style.animationDuration = (Math.random() * 10 + 5) + 's'; // 5-15s
        bubble.style.animationDelay = (Math.random() * 2) + 's'; // 0-2s
        
        document.body.appendChild(bubble);
        
        // Remove bubble after animation
        setTimeout(() => {
            bubble.remove();
        }, 15000);
    }
    
    // Initialize horizontal timeline scroll
    const timelineContainer = document.querySelector('.experience-timeline-container');
    if (timelineContainer) {
        timelineContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            timelineContainer.scrollLeft += e.deltaY;
        });
    }

    }
    
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        // Direct style manipulation for instant movement
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', function() {
        cursor.classList.add('active');
        cursorFollower.classList.add('active');
    });
    
    document.addEventListener('mouseup', function() {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('active');
    });
    
    const links = document.querySelectorAll('a, button, .filter-btn, .tab-btn, .project-card');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            cursor.classList.add('active');
            cursorFollower.classList.add('active');
        });
        
        link.addEventListener('mouseleave', function() {
            cursor.classList.remove('active');
            cursorFollower.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.hero-section');
    
    function headerScroll() {
        const scrollPosition = window.scrollY;
        const heroHeight = heroSection.offsetHeight;
        
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', headerScroll);
    window.addEventListener('load', headerScroll);
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('show');
    });
    
    // Close mobile menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('show');
        });
    });
    
    // Active nav link on scroll
    function activeNavlink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    activeNavlink();
    
    // Skills tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const skillsLists = document.querySelectorAll('.skills-list');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = btn.dataset.target;
            
            // Update active tab button
            tabBtns.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');
            
            // Show corresponding skills list
            skillsLists.forEach(list => list.classList.remove('active'));
            document.getElementById(target).classList.add('active');
            
            // Animate progress bars
            animateProgressBars();
        });
    });
    
    // Animate skill progress bars
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.skill-progress');
        
        progressBars.forEach(bar => {
            const progress = bar.dataset.progress;
            
            gsap.to(bar, {
                width: progress + '%',
                duration: 1.5,
                ease: 'power3.out'
            });
        });
    }
    
    // Initialize progress bars animation
    window.addEventListener('load', function() {
        setTimeout(() => {
            animateProgressBars();
        }, 1000);
    });
    
    // Count up statistics
    function countUp() {
        const stats = document.querySelectorAll('.count-up');
        
        stats.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            let count = 0;
            const duration = 2000; // 2 seconds
            const step = Math.ceil(target / (duration / 30)); // 30 fps
            
            const counter = setInterval(() => {
                count += step;
                if (count >= target) {
                    stat.textContent = target;
                    clearInterval(counter);
                } else {
                    stat.textContent = count;
                }
            }, 30);
        });
    }
    
    // Initialize countUp when element is in viewport
    const aboutStats = document.querySelector('.about-stats');
    
    if (aboutStats) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    countUp();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(aboutStats);
    }
    
    // Project filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active filter button
            filterBtns.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            // Filter projects
            projectItems.forEach(item => {
                const category = item.dataset.category;
                
                if (filter === 'all' || filter === category) {
                    gsap.to(item, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: 'power3.out',
                        onStart: () => {
                            item.classList.remove('hide');
                        }
                    });
                } else {
                    gsap.to(item, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.5,
                        ease: 'power3.out',
                        onComplete: () => {
                            item.classList.add('hide');
                        }
                    });
                }
            });
        });
    });
    
    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            
            if (nameInput.value.trim() === '') {
                alert('Please enter your name');
                return;
            }
            
            if (emailInput.value.trim() === '') {
                alert('Please enter your email');
                return;
            }
            
            if (subjectInput.value.trim() === '') {
                alert('Please enter a subject');
                return;
            }
            
            if (messageInput.value.trim() === '') {
                alert('Please enter your message');
                return;
            }
            
            // Show sending indicator
            const button = document.querySelector('.send-message');
            const originalText = button.innerHTML;
            button.innerHTML = '<span class="btn-text">Sending...</span><i class="fas fa-spinner fa-spin"></i>';
            button.disabled = true;
            
            // Use EmailJS to send the email
            emailjs.send('service_91qvjbg', 'template_0xo36pm', {
                from_name: nameInput.value,
                reply_to: emailInput.value,
                subject: subjectInput.value,
                message: messageInput.value
            })
            .then(function() {
                alert('Message sent successfully!');
                contactForm.reset();
                button.innerHTML = originalText;
                button.disabled = false;
            })
            .catch(function(error) {
                alert('Failed to send message. Please try again later.');
                console.error('EmailJS error:', error);
                button.innerHTML = originalText;
                button.disabled = false;
            });
        });
    }
    
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize Google Maps (you'll need to add your API key)
    function initMap() {
        if (document.getElementById('map')) {
            const location = { lat: 19.0760, lng: 72.8777 }; // Mumbai coordinates
            
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: location,
                styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#444444"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#4361ee"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    }
                ]
            });
            
            const marker = new google.maps.Marker({
                position: location,
                map: map,
                title: 'Sahil Mutha',
                animation: google.maps.Animation.DROP
            });
        }
    }
    
    // Fallback if Google Maps API is not loaded
    window.initMap = initMap;
    
    // Detect if Google Maps API is loaded
    if (typeof google !== 'undefined') {
        initMap();
    }
    
    // Create scroll progress indicator
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
            
            // Change progress bar gradient based on scroll position
            const hue1 = 240 + (scrollPercent * 0.5);
            const hue2 = 280 + (scrollPercent * 0.7);
            progressBar.style.background = `linear-gradient(to right, hsl(${hue1}, 70%, 60%), hsl(${hue2}, 80%, 65%))`;
        });
    };

    // Create floating particles
    const createParticles = () => {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        document.body.appendChild(particlesContainer);
        
        const numParticles = 15;
        const gradients = [
            'linear-gradient(135deg, #6d5dfc 0%, #a16bfe 100%)',
            'linear-gradient(135deg, #0ea5e9 0%, #4f46e5 100%)',
            'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
            'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)'
        ];
        
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 50 + 20; // 20-70px
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 200}vh`;
            
            // Random animation duration and delay
            const duration = Math.random() * 30 + 20;
            const delay = Math.random() * 5;
            
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            
            // Random gradient
            particle.style.background = gradients[Math.floor(Math.random() * gradients.length)];
            
            particlesContainer.appendChild(particle);
        }
    };

    // Create gradient blobs for each section
    const createGradientBlobs = () => {
        const sections = document.querySelectorAll('section');
        const gradients = [
            'linear-gradient(135deg, #6d5dfc 0%, #a16bfe 100%)',
            'linear-gradient(135deg, #ff6b6b 0%, #ff0844 100%)',
            'linear-gradient(135deg, #0ea5e9 0%, #4f46e5 100%)',
            'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
            'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)'
        ];
        
        sections.forEach((section, index) => {
            const blob = document.createElement('div');
            blob.className = 'gradient-blob';
            
            const size = Math.random() * 300 + 200; // 200-500px
            blob.style.width = `${size}px`;
            blob.style.height = `${size}px`;
            
            // Position within section
            blob.style.left = `${Math.random() * 70}%`;
            blob.style.top = `${Math.random() * 70}%`;
            
            // Random gradient
            blob.style.background = gradients[index % gradients.length];
            
            // Random animation delay
            blob.style.animationDelay = `${Math.random() * 2}s`;
            
            section.appendChild(blob);
        });
    };

    // Magnetic effect for buttons
    const createMagneticButtons = () => {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // Limit the movement to avoid extreme shifts
                const maxMove = 15;
                const moveX = Math.min(Math.max(x / 8, -maxMove), maxMove);
                const moveY = Math.min(Math.max(y / 8, -maxMove), maxMove);
                
                button.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    };

    // Implement 3D tilt effect on cards
    const create3DTiltEffect = () => {
        const cards = document.querySelectorAll('.skill-item, .project-card, .achievement-card, .contact-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // Calculate rotation values
                const tiltX = -(y / rect.height) * 10; // Max 10 degrees
                const tiltY = (x / rect.width) * 10;
                
                card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    };

    // Parallax scrolling effect
    const createParallaxEffect = () => {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;
        
        const layer1 = document.createElement('div');
        layer1.className = 'parallax-layer';
        layer1.style.backgroundImage = 'radial-gradient(circle, rgba(109, 93, 252, 0.1) 0%, transparent 70%)';
        layer1.style.transform = 'translateZ(-10px) scale(2)';
        
        const layer2 = document.createElement('div');
        layer2.className = 'parallax-layer';
        layer2.style.backgroundImage = 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 20%, transparent 70%)';
        layer2.style.transform = 'translateZ(-5px) scale(1.5)';
        
        heroSection.appendChild(layer1);
        heroSection.appendChild(layer2);
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            layer1.style.transform = `translateY(${scrollY * 0.5}px) translateZ(-10px) scale(2)`;
            layer2.style.transform = `translateY(${scrollY * 0.3}px) translateZ(-5px) scale(1.5)`;
        });
    };

    // Scroll animations for sections
    const createScrollAnimations = () => {
        const sections = document.querySelectorAll('section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.opacity = '1';
                } else {
                    entry.target.style.transform = 'translateY(20px)';
                    entry.target.style.opacity = '0.8';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '-100px 0px'
        });
        
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            observer.observe(section);
        });
    };

    // Initialize all animations and effects
    document.addEventListener('DOMContentLoaded', () => {
        // Wait for initial animations to complete
        setTimeout(() => {
            createScrollProgress();
            createParticles();
            createGradientBlobs();
            createMagneticButtons();
            create3DTiltEffect();
            createParallaxEffect();
            createScrollAnimations();
        }, 2000); // Wait for preloader to finish
    });
})();   