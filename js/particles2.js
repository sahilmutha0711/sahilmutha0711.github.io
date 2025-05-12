// Advanced Scroll Animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Create scroll progress indicator
    const body = document.body;
    const progressContainer = document.createElement('div');
    progressContainer.className = 'scroll-progress-container';
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    progressContainer.appendChild(progressBar);
    body.appendChild(progressContainer);
    
    // Track scroll progress
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercentage + '%';
        
        // Create floating elements on scroll
        if (scrollTop % 150 === 0 || scrollTop % 175 === 0 || scrollTop % 200 === 0) {
            createFloatingElement();
        }
    });

    // Section reveal animation on scroll
    const revealSections = document.querySelectorAll('section');
    revealSections.forEach(section => {
        section.classList.add('section-reveal');
    });
    
    // Observer for section reveal
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Create bubbles when section comes into view
                createSectionBubbles(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '-50px'
    });
    
    revealSections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Create floating elements randomly
    function createFloatingElement() {
        const element = document.createElement('div');
        
        // Randomly decide type of element
        const elementTypes = ['bubble', 'square', 'triangle'];
        const elementType = elementTypes[Math.floor(Math.random() * elementTypes.length)];
        
        element.className = `floating-element ${elementType}`;
        
        const size = Math.random() * 50 + 20; // Between 20px and 70px
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        
        // Position initially near the current scroll position
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        
        element.style.left = `${Math.random() * viewportWidth}px`;
        element.style.top = `${window.scrollY + Math.random() * viewportHeight}px`;
        
        // Set random opacity
        element.style.opacity = (Math.random() * 0.3 + 0.1).toString();
        
        // Random color from the site's color scheme
        const colors = [
            'rgba(67, 97, 238, 0.3)',      // primary
            'rgba(255, 107, 107, 0.3)',    // secondary
            'rgba(54, 209, 220, 0.3)',     // accent-1
            'rgba(91, 134, 229, 0.3)',     // accent-2
            'rgba(252, 70, 107, 0.3)'      // accent-3
        ];
        
        element.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Add element to body
        document.body.appendChild(element);
        
        // Animate floating upward and to the side
        const destinationX = parseInt(element.style.left, 10) + (Math.random() * 200 - 100);
        const destinationY = parseInt(element.style.top, 10) - (Math.random() * 200 + 100);
        
        element.animate([
            { transform: 'translate(0, 0) rotate(0deg)' },
            { transform: `translate(${destinationX - parseInt(element.style.left, 10)}px, ${destinationY - parseInt(element.style.top, 10)}px) rotate(${Math.random() * 360}deg)` }
        ], {
            duration: Math.random() * 5000 + 3000,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        });
        
        // Remove element after animation
        setTimeout(() => {
            element.remove();
        }, 8000);
    }
    
    // Create bubbles specific to a section
    function createSectionBubbles(section) {
        // Number of bubbles based on section size
        const sectionHeight = section.offsetHeight;
        const bubbleCount = Math.floor(sectionHeight / 100);
        
        // Define bubble colors based on section ID
        let bubbleColorRGB;
        
        switch(section.id) {
            case 'home':
                bubbleColorRGB = '67, 97, 238'; // primary blue
                break;
            case 'about':
                bubbleColorRGB = '255, 107, 107'; // secondary red
                break;
            case 'skills':
                bubbleColorRGB = '54, 209, 220'; // accent teal
                break;
            case 'projects':
                bubbleColorRGB = '91, 134, 229'; // accent blue
                break;
            case 'experience':
                bubbleColorRGB = '252, 70, 107'; // accent pink
                break;
            case 'achievements':
                bubbleColorRGB = '155, 106, 237'; // purple
                break;
            case 'contact':
                bubbleColorRGB = '67, 97, 238'; // primary blue
                break;
            default:
                bubbleColorRGB = '67, 97, 238'; // default primary
        }
        
        // Create each bubble with animation
        for (let i = 0; i < bubbleCount; i++) {
            setTimeout(() => {
                const bubble = document.createElement('div');
                bubble.className = 'scroll-bubble';
                bubble.style.setProperty('--bubble-color-rgb', bubbleColorRGB);
                
                // Random size between 30px and 100px
                const size = Math.random() * 70 + 30;
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                
                // Position within the section
                const sectionRect = section.getBoundingClientRect();
                const sectionTop = window.scrollY + sectionRect.top;
                const posX = Math.random() * section.offsetWidth;
                const posY = sectionTop + Math.random() * sectionHeight;
                
                bubble.style.left = `${posX}px`;
                bubble.style.top = `${posY}px`;
                
                // Set random movement variables for animation
                const riseHeight = Math.random() * 300 + 200;
                const xTravel = Math.random() * 200 - 100;
                
                bubble.style.setProperty('--rise-height', `${riseHeight}px`);
                bubble.style.setProperty('--x-travel', `${xTravel}px`);
                
                document.body.appendChild(bubble);
                
                // Remove bubble after animation completes
                setTimeout(() => {
                    bubble.remove();
                }, 10000);
                
            }, i * 300); // Stagger bubble creation
        }
    }
    
    // Enhanced preloader with dynamic content
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        const loaderBar = document.querySelector('.loader-bar');
        const percentEl = document.querySelector('.percent');
        
        // Create dynamic welcome message
        const welcomeText = document.querySelector('.welcome-text');
        if (welcomeText) {
            const welcomeMessages = [
                "Welcome to Sahil's World",
                "Loading Creative Experience",
                "Preparing Something Special",
                "Crafting Digital Excellence"
            ];
            const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
            welcomeText.textContent = randomMessage;
        }
        
        // Simulate loading with smoother progression
        let loaded = 0;
        const interval = setInterval(() => {
            loaded += Math.floor(Math.random() * 3) + 1; // Slower increment for smoother feel
            if (loaded > 100) loaded = 100;
            
            loaderBar.style.width = loaded + '%';
            percentEl.textContent = loaded + '%';
            
            if (loaded === 100) {
                clearInterval(interval);
                // Create enhanced bubble transition after loading completes
                createEnhancedBubbleTransition();
            }
        }, 30);
        
        // Force complete after 2.5 seconds
        setTimeout(() => {
            if (loaded < 100) {
                loaded = 100;
                loaderBar.style.width = '100%';
                percentEl.textContent = '100%';
                clearInterval(interval);
                
                // Create enhanced bubble transition
                createEnhancedBubbleTransition();
            }
        }, 2500);
    }
    
    // Enhanced bubble transition
    function createEnhancedBubbleTransition() {
        // Create multiple bubbles for a more dynamic effect
        for (let i = 0; i < 5; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'transition-bubble';
            
            // Position bubbles slightly off-center for a more natural feel
            const offsetX = (Math.random() * 20) - 10;
            const offsetY = (Math.random() * 20) - 10;
            
            bubble.style.top = `calc(50% + ${offsetY}px)`;
            bubble.style.left = `calc(50% + ${offsetX}px)`;
            
            // Slight delay between bubbles
            bubble.style.transitionDelay = `${i * 0.1}s`;
            
            document.body.appendChild(bubble);
            
            // Only the main bubble (first one) fully expands
            if (i === 0) {
                setTimeout(() => {
                    bubble.classList.add('expand');
                    
                    // After bubble animation completes, hide preloader and show content
                    setTimeout(() => {
                        const preloader = document.querySelector('.preloader');
                        if (preloader) {
                            preloader.classList.add('hide');
                        }
                        bubble.classList.add('hide');
                        initAnimations();
                        
                        // Remove bubble after animation
                        setTimeout(() => {
                            bubble.remove();
                        }, 1000);
                    }, 800);
                }, 300);
            } else {
                // Secondary bubbles have a smaller expansion and quicker fade
                setTimeout(() => {
                    bubble.style.transform = `translate(-50%, -50%) scale(${10 - i * 2})`;
                    bubble.style.opacity = '0.7';
                    
                    setTimeout(() => {
                        bubble.style.opacity = '0';
                        // Remove bubble after animation
                        setTimeout(() => {
                            bubble.remove();
                        }, 500);
                    }, 600);
                }, 300 + i * 150);
            }
        }
    }
    
    // Initialize animations
    function initAnimations() {
        // Hero section animations with enhanced timing
        gsap.to('.hero-text', {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out'
        });
        
        gsap.to('.hero-image', {
            opacity: 1,
            x: 0,
            duration: 1.2,
            delay: 0.3,
            ease: 'power3.out'
        });
        
        // Stagger animate hero taglines
        gsap.from('.tagline-first, .tagline-second, .tagline-third', {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.5
        });
        
        // Hero buttons animation
        gsap.from('.hero-buttons .btn', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            delay: 1.2
        });
        
        // Initialize AOS animations with enhanced settings
        AOS.init({
            duration: 900,
            offset: 100,
            once: true,
            easing: 'ease-in-out-cubic',
            delay: 100,
            anchorPlacement: 'top-bottom'
        });
        
        // Initialize Typed.js with expanded professions
        if (document.querySelector('.profession')) {
            const typed = new Typed('.profession', {
                strings: [
                    'Generative AI',
                    'Machine Learning Engineer',
                    'Data Scientist',
                    'Data Engineer',
                    'Software Developer',
                    'NLP Specialist',
                    'AI Solutions Architect'
                ],
                typeSpeed: 70,
                backSpeed: 40,
                backDelay: 2000,
                loop: true,
                smartBackspace: true
            });
        }
        
        // Initialize particles background with enhanced settings
        if (document.getElementById('particles-js')) {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 60,
                        "density": {
                            "enable": true,
                            "value_area": 900
                        }
                    },
                    "color": {
                        "value": "#4361ee"
                    },
                    "shape": {
                        "type": ["circle", "triangle", "polygon"],
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
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 4,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 10,
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
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": true,
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
        
        // Create initial background elements
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                createFloatingElement();
            }, i * 400);
        }
        
        // Enhanced skill section interactions
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                // Subtle popup effect
                gsap.to(this, {
                    y: -10,
                    scale: 1.05,
                    duration: 0.4,
                    ease: 'power2.out'
                });
                
                // Animate the skill logo
                const logo = this.querySelector('.skill-logo');
                if (logo) {
                    gsap.to(logo, {
                        rotate: 360,
                        backgroundColor: 'var(--primary-color)',
                        color: 'white',
                        duration: 0.5,
                        ease: 'power2.inOut'
                    });
                }
            });
            
            item.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    y: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                });
                
                // Reset the skill logo
                const logo = this.querySelector('.skill-logo');
                if (logo) {
                    gsap.to(logo, {
                        rotate: 0,
                        backgroundColor: 'rgba(67, 97, 238, 0.1)',
                        color: 'var(--primary-color)',
                        duration: 0.5,
                        ease: 'power2.inOut'
                    });
                }
            });
        });
    }
    
    // Initialize horizontal timeline scroll with enhanced interaction
    const timelineContainer = document.querySelector('.experience-timeline-container');
    if (timelineContainer) {
        // Mouse wheel scroll
        timelineContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            timelineContainer.scrollLeft += e.deltaY;
            
            // Create particle effect in direction of scroll
            if (Math.abs(e.deltaY) > 10) {
                const particleCount = Math.min(Math.abs(Math.floor(e.deltaY / 10)), 5);
                
                for (let i = 0; i < particleCount; i++) {
                    setTimeout(() => {
                        createScrollParticle(e.clientX, e.clientY, e.deltaY > 0);
                    }, i * 50);
                }
            }
        });
        
        // Touch scroll for mobile
        let isDown = false;
        let startX;
        let scrollLeft;
        
        timelineContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            timelineContainer.style.cursor = 'grabbing';
            startX = e.pageX - timelineContainer.offsetLeft;
            scrollLeft = timelineContainer.scrollLeft;
        });
        
        timelineContainer.addEventListener('mouseleave', () => {
            isDown = false;
            timelineContainer.style.cursor = 'grab';
        });
        
        timelineContainer.addEventListener('mouseup', () => {
            isDown = false;
            timelineContainer.style.cursor = 'grab';
        });
        
        timelineContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - timelineContainer.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed multiplier
            timelineContainer.scrollLeft = scrollLeft - walk;
            
            // Add subtle particle effect on drag
            if (Math.abs(walk) > 5 && Math.random() > 0.7) {
                createScrollParticle(e.clientX, e.clientY, walk < 0);
            }
        });
        
        // Initial setup
        timelineContainer.style.cursor = 'grab';
        
        // Auto scroll hint animation
        const scrollHint = document.querySelector('.timeline-scroll-hint');
        if (scrollHint) {
            gsap.to(scrollHint, {
                x: 10,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });
            
            // Hide hint after user interaction
            timelineContainer.addEventListener('scroll', () => {
                if (scrollHint.style.opacity !== '0') {
                    gsap.to(scrollHint, {
                        opacity: 0,
                        duration: 0.5,
                        onComplete: () => {
                            scrollHint.style.display = 'none';
                        }
                    });
                }
            }, { once: true });
        }
    }
    
    // Create scroll direction particles
    function createScrollParticle(x, y, isRight) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '6px';
        particle.style.height = '6px';
        particle.style.backgroundColor = 'var(--primary-color)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '100';
        particle.style.opacity = '0.6';
        
        // Position at mouse pointer
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        document.body.appendChild(particle);
        
        // Animate the particle
        const xMove = isRight ? 30 : -30;
        
        gsap.to(particle, {
            x: xMove,
            y: Math.random() * 20 - 10,
            opacity: 0,
            duration: 0.8,
            ease: 'power1.out',
            onComplete: () => {
                particle.remove();
            }
        });
    }
    
    // Enhanced cursor effect
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (cursor && cursorFollower) {
        document.addEventListener('mousemove', function(e) {
            // Use GSAP for smoother cursor following
            gsap.to(cursor, {
                left: e.clientX,
                top: e.clientY,
                duration: 0.1,
                ease: 'power1.out'
            });
            
            gsap.to(cursorFollower, {
                left: e.clientX,
                top: e.clientY,
                duration: 0.3,
                ease: 'power1.out'
            });
        });
        
        // Enhanced active states
        document.addEventListener('mousedown', function() {
            cursor.classList.add('active');
            cursorFollower.classList.add('active');
            
            // Add pulsing effect on click
            gsap.to(cursorFollower, {
                scale: 0.8,
                duration: 0.2,
                ease: 'power1.out',
                yoyo: true,
                repeat: 1
            });
        });
        
        document.addEventListener('mouseup', function() {
            cursor.classList.remove('active');
            cursorFollower.classList.remove('active');
        });
        
        // Enhanced hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .filter-btn, .tab-btn, .project-card, input, textarea');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', function() {
                cursor.classList.add('active');
                cursorFollower.classList.add('active');
                
                // Magnetic effect - attract cursor toward center of element
                el.addEventListener('mousemove', magneticEffect);
            });
            
            el.addEventListener('mouseleave', function() {
                cursor.classList.remove('active');
                cursorFollower.classList.remove('active');
                
                // Remove magnetic effect
                el.removeEventListener('mousemove', magneticEffect);
                
                // Reset element position
                gsap.to(el, {
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: 'elastic.out(1, 0.3)'
                });
            });
        });
        
        // Magnetic cursor effect for interactive elements
        function magneticEffect(e) {
            const bounds = this.getBoundingClientRect();
            const magnetismStrength = 0.3; // Adjust strength of effect
            
            // Calculate center of element
            const centerX = bounds.left + bounds.width / 2;
            const centerY = bounds.top + bounds.height / 2;
            
            // Calculate distance from mouse to center
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;
            
            // Apply subtle pull toward mouse
            gsap.to(this, {
                x: deltaX * magnetismStrength,
                y: deltaY * magnetismStrength,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    }
    
    // Enhanced progress bars animation
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.skill-progress');
        
        progressBars.forEach(bar => {
            const progress = bar.dataset.progress;
            
            // First reset to 0
            gsap.set(bar, { width: 0 });
            
            // Animate with easing
            gsap.to(bar, {
                width: progress + '%',
                duration: 1.8,
                ease: 'power3.out',
                onStart: () => {
                    // Add glow effect during animation
                    bar.style.boxShadow = '0 0 10px rgba(67, 97, 238, 0.5)';
                },
                onComplete: () => {
                    // Reduce glow after animation completes
                    gsap.to(bar, {
                        boxShadow: '0 0 5px rgba(67, 97, 238, 0.3)',
                        duration: 0.5
                    });
                }
            });
        });
    }
    
    // Observer for skill tab switching
    const skillsContainer = document.querySelector('.skills-list-container');
    if (skillsContainer) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (mutation.target.classList.contains('active')) {
                        // When tab becomes active, animate progress bars
                        animateProgressBars();
                        
                        // Also create some particles
                        for (let i = 0; i < 5; i++) {
                            setTimeout(() => {
                                const rect = mutation.target.getBoundingClientRect();
                                createTabSwitchParticle(
                                    rect.left + Math.random() * rect.width,
                                    rect.top + Math.random() * rect.height
                                );
                            }, i * 100);
                        }
                    }
                }
            });
        });
        
        // Observe all skill lists
        document.querySelectorAll('.skills-list').forEach(list => {
            observer.observe(list, { attributes: true });
        });
    }
    
    // Create particles when switching tabs
    function createTabSwitchParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.backgroundColor = 'var(--primary-color)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '10';
        particle.style.opacity = '0.7';
        
        // Position
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        document.body.appendChild(particle);
        
        // Animate the particle
        gsap.to(particle, {
            y: y - 50 - Math.random() * 50,
            x: x + (Math.random() * 60 - 30),
            opacity: 0,
            duration: 1,
            ease: 'power1.out',
            onComplete: () => {
                particle.remove();
            }
        });
    }
    
    // Initialize tab buttons with enhanced effects
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = btn.dataset.target;
            
            // Update active tab button with animation
            tabBtns.forEach(otherBtn => {
                if (otherBtn !== btn && otherBtn.classList.contains('active')) {
                    // Animate deactivation
                    gsap.to(otherBtn, {
                        backgroundColor: 'transparent',
                        color: 'var(--text-color)',
                        boxShadow: 'none',
                        duration: 0.3,
                        onComplete: () => {
                            otherBtn.classList.remove('active');
                        }
                    });
                }
            });
            
            // Animate activation of clicked button
            gsap.to(btn, {
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                boxShadow: '0 4px 10px rgba(67, 97, 238, 0.3)',
                duration: 0.3,
                ease: 'power1.out',
                onStart: () => {
                    btn.classList.add('active');
                }
            });
            
            // Show corresponding skills list with fade transition
            const skillsLists = document.querySelectorAll('.skills-list');
            skillsLists.forEach(list => {
                if (list.id === target) {
                    // First set to hidden but keep display property
                    gsap.set(list, { display: 'block', opacity: 0, y: 20 });
                    list.classList.add('active');
                    
                    // Then fade in
                    gsap.to(list, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                } else if (list.classList.contains('active')) {
                    // Fade out inactive lists
                    gsap.to(list, {
                        opacity: 0,
                        y: -20,
                        duration: 0.3,
                        ease: 'power2.in',
                        onComplete: () => {
                            list.classList.remove('active');
                            list.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
    
    // Enhanced countUp animation
    function countUp() {
        const stats = document.querySelectorAll('.count-up');
        
        stats.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            let count = 0;
            
            // Create more natural counting speed (faster at beginning, slower at end)
            const duration = 2000; // 2 seconds
            const frameDuration = 1000 / 60; // 60fps
            const totalFrames = Math.round(duration / frameDuration);
            
            // Use easeOutQuint for counting
            const easeOutQuint = t => 1 + (--t) * t * t * t * t;
            
            let frame = 0;
            const counter = setInterval(() => {
                frame++;
                
                // Calculate progress with easing
                const progress = easeOutQuint(frame / totalFrames);
                const currentCount = Math.round(progress * target);
                
                if (currentCount >= target) {
                    stat.textContent = target;
                    clearInterval(counter);
                    
                    // Add small pulse animation when count completes
                    gsap.to(stat, {
                        scale: 1.2,
                        duration: 0.2,
                        yoyo: true,
                        repeat: 1,
                        ease: 'power1.out'
                    });
                } else {
                    stat.textContent = currentCount;
                }
            }, frameDuration);
        });
    }
    
    // Initialize countUp when element is in viewport
    const aboutStats = document.querySelector('.about-stats');
    if (aboutStats) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Stagger animation for stat items
                    const statItems = aboutStats.querySelectorAll('.stat-item');
                    gsap.from(statItems, {
                        y: 50,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: 'power2.out',
                        onComplete: countUp
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(aboutStats);
    }
    
    // Initialize on first load if no preloader
    if (!document.querySelector('.preloader')) {
        initAnimations();
    }
});