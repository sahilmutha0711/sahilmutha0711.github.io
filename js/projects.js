/*===========================
    Projects JavaScript File
============================*/

// (function() {
//     'use strict';
    
//     // Check if current page is a project page
//     const isProjectPage = document.body.classList.contains('project-page');
    
//     // Project data (in a real implementation, this could be fetched from a backend or JSON file)
//     const projectsData = [
//         {
//             id: 'project1',
//             title: 'Modern E-commerce Platform',
//             category: 'Web Development',
//             date: 'January 2025',
//             description: 'A fully responsive e-commerce website with product filtering, cart functionality, and payment integration. This project features a modern UI design, seamless shopping experience, and robust admin dashboard for managing products, orders, and customer data.',
//             images: [
//                 'images/projects/project1.png',
//                 'images/projects/project2.png',
//                 'images/projects/project3.jpg',
//                 'images/projects/project4.png'
//             ],
//             technologies: [
//                 { name: 'React.js', icon: 'fab fa-react' },
//                 { name: 'Node.js', icon: 'fab fa-node-js' },
//                 { name: 'MongoDB', icon: 'fas fa-database' },
//                 { name: 'Express.js', icon: 'fab fa-node' },
//                 { name: 'Redux', icon: 'fas fa-code' },
//                 { name: 'Stripe API', icon: 'fas fa-credit-card' }
//             ],
//             features: [
//                 { name: 'User Authentication', icon: 'fas fa-user-shield' },
//                 { name: 'Product Filtering', icon: 'fas fa-filter' },
//                 { name: 'Shopping Cart', icon: 'fas fa-shopping-cart' },
//                 { name: 'Payment Integration', icon: 'fas fa-money-bill-wave' },
//                 { name: 'Order Tracking', icon: 'fas fa-truck-moving' },
//                 { name: 'Admin Dashboard', icon: 'fas fa-chart-line' }
//             ],
//             challenges: 'One of the main challenges was implementing a real-time inventory management system that would update across multiple user sessions. I solved this by using Socket.io to create a WebSocket connection for live updates. Another challenge was optimizing the site performance with a large product database. To address this, I implemented lazy loading, pagination, and MongoDB indexing to improve query efficiency.',
//             demo: 'https://ecommerce-demo.example.com',
//             github: 'https://github.com/sahilmutha0711/ecommerce-platform',
//             prev: 'project6',
//             next: 'project2'
//         },
//         {
//             id: 'project2',
//             title: 'Task Management App',
//             category: 'Mobile App',
//             date: 'November 2024',
//             description: 'A productivity app to manage tasks with features like reminders, prioritization, and collaborative workspaces. This cross-platform application helps users organize their personal and professional tasks with an intuitive interface and powerful collaborative features.',
//             images: [
//                 'images/projects/project2.png',
//                 'images/projects/project2.png',
//                 'images/projects/project2.png',
//                 'images/projects/project2.png'
//             ],
//             technologies: [
//                 { name: 'React Native', icon: 'fab fa-react' },
//                 { name: 'Firebase', icon: 'fas fa-fire' },
//                 { name: 'Redux', icon: 'fas fa-code' },
//                 { name: 'Cloud Functions', icon: 'fas fa-cloud' },
//                 { name: 'Expo', icon: 'fas fa-mobile-alt' }
//             ],
//             features: [
//                 { name: 'Task Creation', icon: 'fas fa-tasks' },
//                 { name: 'Push Notifications', icon: 'fas fa-bell' },
//                 { name: 'Team Collaboration', icon: 'fas fa-users' },
//                 { name: 'Calendar Integration', icon: 'fas fa-calendar-alt' },
//                 { name: 'Progress Tracking', icon: 'fas fa-chart-pie' },
//                 { name: 'Offline Mode', icon: 'fas fa-wifi' }
//             ],
//             challenges: 'The biggest challenge was designing a truly intuitive user experience that would make task management easier, not more complicated. I conducted extensive user testing with different UI prototypes to find the most intuitive approach. Another challenge was implementing reliable notifications across both iOS and Android. I created a unified notification system that accounts for the platform-specific behaviors.',
//             demo: 'https://taskmanager-demo.example.com',
//             github: 'https://github.com/sahilmutha0711/task-manager-app',
//             prev: 'project1',
//             next: 'project3'
//         },
//         {
//             id: 'project3',
//             title: 'Portfolio Website Template',
//             category: 'UI/UX Design',
//             date: 'September 2024',
//             description: 'A customizable portfolio template for creatives and developers with modern design and animations. This template focuses on showcasing work in a visually stunning way while maintaining fast load times and excellent performance scores.',
//             images: [
//                 'images/projects/project3.jpg',
//                 'images/projects/project3.jpg',
//                 'images/projects/project3.jpg',
//                 'images/projects/project3.jpg'
//             ],
//             technologies: [
//                 { name: 'HTML5', icon: 'fab fa-html5' },
//                 { name: 'CSS3', icon: 'fab fa-css3-alt' },
//                 { name: 'JavaScript', icon: 'fab fa-js' },
//                 { name: 'GSAP', icon: 'fas fa-code' },
//                 { name: 'Figma', icon: 'fab fa-figma' }
//             ],
//             features: [
//                 { name: 'Responsive Design', icon: 'fas fa-mobile-alt' },
//                 { name: 'Smooth Animations', icon: 'fas fa-film' },
//                 { name: 'Project Showcase', icon: 'fas fa-project-diagram' },
//                 { name: 'Contact Form', icon: 'fas fa-envelope' },
//                 { name: 'Performance Optimized', icon: 'fas fa-tachometer-alt' },
//                 { name: 'Easy Customization', icon: 'fas fa-paint-brush' }
//             ],
//             challenges: "Creating animations that look great but don't impact performance was a significant challenge. I used GSAP with careful optimization to ensure smooth animations even on lower-end devices. Another challenge was making the template easily customizable for users with different technical backgrounds. I created detailed documentation and made the code structure intuitive with clear comments.",
//             demo: 'https://portfolio-template.example.com',
//             github: 'https://github.com/sahilmutha0711/portfolio-template',
//             prev: 'project2',
//             next: 'project4'
//         },
//         {
//             id: 'project4',
//             title: 'Weather Dashboard',
//             category: 'Web Development',
//             date: 'July 2024',
//             description: 'Real-time weather app with interactive maps, forecasts, and historical weather data visualization. This application pulls data from multiple weather APIs to provide accurate forecasts and beautiful visualizations of weather patterns.',
//             images: [
//                 'images/projects/project4.png',
//                 'images/projects/project4.png',
//                 'images/projects/project4.png',
//                 'images/projects/project4.png'
//             ],
//             technologies: [
//                 { name: 'Vue.js', icon: 'fab fa-vuejs' },
//                 { name: 'D3.js', icon: 'fas fa-chart-bar' },
//                 { name: 'OpenWeather API', icon: 'fas fa-cloud-sun' },
//                 { name: 'Mapbox API', icon: 'fas fa-map-marked-alt' },
//                 { name: 'Chart.js', icon: 'fas fa-chart-line' }
//             ],
//             features: [
//                 { name: 'Current Conditions', icon: 'fas fa-temperature-high' },
//                 { name: '7-Day Forecast', icon: 'fas fa-calendar-week' },
//                 { name: 'Interactive Maps', icon: 'fas fa-map' },
//                 { name: 'Historical Data', icon: 'fas fa-history' },
//                 { name: 'Weather Alerts', icon: 'fas fa-exclamation-circle' },
//                 { name: 'Location Search', icon: 'fas fa-search-location' }
//             ],
//             challenges: 'Integrating multiple weather data sources and resolving inconsistencies between them was challenging. I developed a data normalization layer that reconciles conflicts and improves accuracy. Creating interactive visualizations that are both informative and visually appealing required careful UX design. I conducted user testing to find the right balance between aesthetic appeal and data clarity.',
//             demo: 'https://weather-dashboard.example.com',
//             github: 'https://github.com/sahilmutha0711/weather-dashboard',
//             prev: 'project3',
//             next: 'project5'
//         },
//         {
//             id: 'project5',
//             title: 'Fitness Tracker',
//             category: 'Mobile App',
//             date: 'May 2024',
//             description: 'Personal fitness application for tracking workouts, nutrition, and progress with data visualization. This cross-platform mobile app helps users maintain their fitness goals by providing comprehensive tracking tools and insightful analytics.',
//             images: [
//                 'images/projects/project5.png',
//                 'images/projects/project5.png',
//                 'images/projects/project5.png',
//                 'images/projects/project5.png'
//             ],
//             technologies: [
//                 { name: 'Flutter', icon: 'fas fa-mobile-alt' },
//                 { name: 'Firebase', icon: 'fas fa-fire' },
//                 { name: 'Chart.js', icon: 'fas fa-chart-line' },
//                 { name: 'Dart', icon: 'fas fa-code' },
//                 { name: 'Health API', icon: 'fas fa-heartbeat' }
//             ],
//             features: [
//                 { name: 'Workout Tracking', icon: 'fas fa-dumbbell' },
//                 { name: 'Nutrition Logging', icon: 'fas fa-apple-alt' },
//                 { name: 'Progress Photos', icon: 'fas fa-camera' },
//                 { name: 'Goal Setting', icon: 'fas fa-bullseye' },
//                 { name: 'Custom Workouts', icon: 'fas fa-clipboard-list' },
//                 { name: 'Social Sharing', icon: 'fas fa-share-alt' }
//             ],
//             challenges: 'Creating accurate calorie and nutrient calculations that account for different activity levels and body types was complicated. I researched and implemented established formulas from sports science. Syncing with various health devices and APIs required extensive testing to ensure data accuracy across platforms.',
//             demo: 'https://fitness-tracker.example.com',
//             github: 'https://github.com/sahilmutha0711/fitness-tracker',
//             prev: 'project4',
//             next: 'project6'
//         }
//     ];
    
//     // Function to get project data by ID
//     function getProjectById(id) {
//         return projectsData.find(project => project.id === id);
//     }
    
//     // Function to create project cards on the home page
//     function createProjectCards() {
//         const projectsGrid = document.querySelector('.projects-grid');
        
//         if (!projectsGrid) return;
        
//         projectsGrid.innerHTML = '';
        
//         projectsData.forEach(project => {
//             const projectItem = document.createElement('div');
//             projectItem.className = 'project-item';
//             projectItem.dataset.category = project.category.toLowerCase().includes('web') ? 'web' : 
//                                           project.category.toLowerCase().includes('app') ? 'app' : 'design';
//             projectItem.dataset.aos = 'fade-up';
            
//             projectItem.innerHTML = `
//                 <div class="project-card">
//                     <div class="project-image">
//                         <img src="${project.images[0]}" alt="${project.title}">
//                         <div class="project-overlay">
//                             <a href="${project.id}.html" class="project-link">
//                                 <i class="fas fa-link"></i>
//                             </a>
//                             <a href="${project.github}" class="project-github" target="_blank">
//                                 <i class="fab fa-github"></i>
//                             </a>
//                         </div>
//                     </div>
//                     <div class="project-info">
//                         <h3 class="project-title">${project.title}</h3>
//                         <p class="project-description">${project.description.substring(0, 100)}...</p>
//                         <div class="project-tech">
//                             ${project.technologies.slice(0, 3).map(tech => `<span>${tech.name}</span>`).join('')}
//                         </div>
//                     </div>
//                 </div>
//             `;
            
//             projectsGrid.appendChild(projectItem);
//         });
//     }
    
//     // Create project detail page based on URL
//     function createProjectPage() {
//         if (!isProjectPage) return;
        
//         // Get project ID from URL
//         const urlParams = new URLSearchParams(window.location.search);
//         const projectId = urlParams.get('id') || window.location.pathname.split('/').pop().replace('.html', '');
        
//         // Get project data
//         const project = getProjectById(projectId);
        
//         if (!project) {
//             console.error('Project not found');
//             return;
//         }
        
//         // Set page title
//         document.title = `${project.title} | Sahil Mutha Portfolio`;
        
//         // Populate header
//         const headerTitle = document.querySelector('.project-header .project-title');
//         const projectMeta = document.querySelector('.project-meta');
        
//         if (headerTitle) headerTitle.textContent = project.title;
//         if (projectMeta) {
//             projectMeta.innerHTML = `
//                 <div class="project-category"><i class="fas fa-tag"></i> ${project.category}</div>
//                 <div class="project-date"><i class="fas fa-calendar-alt"></i> ${project.date}</div>
//             `;
//         }
        
//         // Populate carousel
//         const carousel = document.querySelector('.project-carousel');
        
//         if (carousel) {
//             carousel.innerHTML = `
//                 <div class="splide">
//                     <div class="splide__track">
//                         <ul class="splide__list">
//                             ${project.images.map(image => `
//                                 <li class="splide__slide">
//                                     <img src="${image}" alt="${project.title}">
//                                 </li>
//                             `).join('')}
//                         </ul>
//                     </div>
//                 </div>
//             `;
            
//             // Initialize Splide carousel
//             if (typeof Splide !== 'undefined') {
//                 new Splide('.splide', {
//                     type: 'loop',
//                     autoplay: true,
//                     interval: 5000,
//                     perPage: 1,
//                     arrows: true,
//                     pagination: true
//                 }).mount();
//             }
//         }
        
//         // Populate overview
//         const projectDescription = document.querySelector('.project-description');
//         if (projectDescription) projectDescription.textContent = project.description;
        
//         // Populate technologies
//         const techList = document.querySelector('.tech-list');
//         if (techList) {
//             techList.innerHTML = project.technologies.map(tech => `
//                 <li><i class="${tech.icon}"></i> ${tech.name}</li>
//             `).join('');
//         }
        
//         // Populate features
//         const featuresList = document.querySelector('.features-list');
//         if (featuresList) {
//             featuresList.innerHTML = project.features.map(feature => `
//                 <li><i class="${feature.icon}"></i> ${feature.name}</li>
//             `).join('');
//         }
        
//         // Populate challenges
//         const challengesContent = document.querySelector('.challenges-content');
//         if (challengesContent) challengesContent.textContent = project.challenges;
        
//         // Populate links
//         const demoLink = document.querySelector('.demo-link');
//         const githubLink = document.querySelector('.github-link');
        
//         if (demoLink) demoLink.href = project.demo;
//         if (githubLink) githubLink.href = project.github;
        
//         // Populate navigation
//         const prevProject = document.querySelector('.prev-project');
//         const nextProject = document.querySelector('.next-project');
        
//         if (prevProject) prevProject.href = `${project.prev}.html`;
//         if (nextProject) nextProject.href = `${project.next}.html`;
//     }
    
//     // Dynamic project page creation
//     function dynamicProjectPages() {
//         const projectLinks = document.querySelectorAll('.project-link');
        
//         projectLinks.forEach(link => {
//             link.addEventListener('click', function(e) {
//                 e.preventDefault();
                
//                 // Get project ID
//                 const projectId = this.getAttribute('href').replace('.html', '');
//                 const project = getProjectById(projectId);
                
//                 if (!project) return;
                
//                 // Create the project page dynamically
//                 const template = document.getElementById('project-page-template');
//                 const projectPage = document.createElement('div');
//                 projectPage.className = 'project-page-content';
//                 projectPage.innerHTML = template.innerHTML;
                
//                 // Replace main content
//                 const main = document.querySelector('main');
//                 const originalContent = main.innerHTML;
//                 main.innerHTML = '';
//                 main.appendChild(projectPage);
                
//                 // Populate project data
//                 createProjectPage();
                
//                 // Update URL without reloading
//                 window.history.pushState({ projectId }, project.title, `${projectId}.html`);
//                 document.title = `${project.title} | Sahil Mutha Portfolio`;
                
//                 // Scroll to top
//                 window.scrollTo(0, 0);
                
//                 // Add back button handler
//                 const allProjects = document.querySelector('.all-projects');
//                 if (allProjects) {
//                     allProjects.addEventListener('click', function(e) {
//                         e.preventDefault();
                        
//                         // Restore original content
//                         main.innerHTML = originalContent;
                        
//                         // Update URL
//                         window.history.pushState({}, 'Portfolio', '/');
//                         document.title = 'Sahil Mutha | Portfolio';
                        
//                         // Scroll to projects section
//                         const projectsSection = document.getElementById('projects');
//                         if (projectsSection) {
//                             window.scrollTo({
//                                 top: projectsSection.offsetTop - 90,
//                                 behavior: 'smooth'
//                             });
//                         }
//                     });
//                 }
//             });
//         });
        
//         // Handle browser back button
//         window.addEventListener('popstate', function(e) {
//             if (e.state && e.state.projectId) {
//                 createProjectPage();
//             } else {
//                 window.location.reload();
//             }
//         });
//     }
    
//     // Initialize project functions
//     createProjectCards();
//     createProjectPage();
    
//     // Initialize dynamic page creation if template exists
//     if (document.getElementById('project-page-template')) {
//         dynamicProjectPages();
//     }
    
// })();