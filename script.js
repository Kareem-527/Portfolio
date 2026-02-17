// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio initialized!');
    
    // EMAILJS CONFIG - Initialize first
    emailjs.init('yjMSq1Xb5kSU3Ulek');
    console.log('✅ EmailJS initialized');
    
    // PROJECTS DATA
    const projects = [
    {
        title: "E-Commerce Platform",
        description: "A modern, responsive e-commerce website with product filtering, shopping cart functionality, and smooth checkout process.",
        techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
        githubLink: "https://github.com/Kareem-527",
        liveLink: "#"
    },
    {
        title: "Portfolio Dashboard",
        description: "Interactive analytics dashboard featuring real-time data visualization, responsive charts, and intuitive user interface.",
        techStack: ["HTML", "CSS", "JavaScript", "Chart.js"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        githubLink: "https://github.com/Kareem-527",
        liveLink: "#"
    },
    {
        title: "Task Management App",
        description: "Clean and efficient task management application with drag-and-drop functionality and local storage persistence.",
        techStack: ["HTML", "CSS", "JavaScript", "Drag & Drop API"],
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
        githubLink: "https://github.com/Kareem-527",
        liveLink: "#"
    },
    {
        title: "Restaurant Website",
        description: "Beautiful restaurant landing page with online menu, reservation system, and stunning food gallery.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
        githubLink: "https://github.com/Kareem-527",
        liveLink: "#"
    },
    {
        title: "Fitness Tracker",
        description: "Modern fitness tracking application with workout plans, progress monitoring, and calorie calculator.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
        githubLink: "https://github.com/Kareem-527",
        liveLink: "#"
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather application with 7-day forecast, location search, and beautiful weather animations.",
        techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
        githubLink: "https://github.com/Kareem-527",
        liveLink: "#"
    }
];

// RENDER PROJECTS
const projectsGrid = document.getElementById('projects-grid');

if (!projectsGrid) {
    console.error('❌ Projects grid not found!');
} else {
    console.log('✅ Rendering', projects.length, 'projects...');
    
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank" class="project-btn btn-primary">
                        <i class="fas fa-external-link-alt"></i>
                        Live Demo
                    </a>
                    <a href="${project.githubLink}" target="_blank" class="project-btn btn-secondary">
                        <i class="fab fa-github"></i>
                        GitHub
                    </a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
    
    console.log('✅ Projects rendered successfully!');
}

// NAVBAR SCROLL
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// MOBILE MENU
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// FLOATING CONTACT
const floatingBtn = document.getElementById('floating-btn');
const floatingContact = document.getElementById('floating-contact');
floatingBtn.addEventListener('click', () => {
    floatingContact.classList.toggle('active');
});

// CONTACT FORM
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        to_email: 'kareem.egy.52@gmail.com'
    };
    
    try {
        await emailjs.send('service_c7kw7hm', 'template_7lfo3ib', templateParams);
        successMessage.classList.add('show');
        contactForm.reset();
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    } catch (error) {
        alert('Failed to send message. Please try again or contact directly via email.');
    }
});

}); // End of DOMContentLoaded