// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background opacity on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.4)';
        navbar.style.borderBottom = '1px solid rgba(148, 163, 184, 0.2)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
        navbar.style.borderBottom = '1px solid rgba(148, 163, 184, 0.1)';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in-up class to elements we want to animate
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.education-item, .experience-item, .project-item, .skill-category, .languages');
    animateElements.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple form validation
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show success message (in a real app, you'd send this to a server)
        showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
        
        // Reset form
        this.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show message function
function showMessage(text, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = text;
    
    // Style the message
    messageDiv.style.cssText = `
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 8px;
        font-weight: 500;
        text-align: center;
        ${type === 'success' 
            ? 'background: rgba(34, 197, 94, 0.2); color: #15803d; border: 1px solid rgba(34, 197, 94, 0.3);' 
            : 'background: rgba(239, 68, 68, 0.2); color: #dc2626; border: 1px solid rgba(239, 68, 68, 0.3);'
        }
    `;
    
    // Insert message after form
    contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// Add typing effect to hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        // Delay the typing effect to start after the fade-in animation
        setTimeout(() => {
            typeWriter(heroSubtitle, originalText, 100);
        }, 1000);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        const speed = scrolled * 0.5;
        heroContent.style.transform = `translateY(${speed}px)`;
    }
});

// Add smooth reveal animation for skills
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('skill-animate');
    });
}

// CSS for skill animation (added dynamically)
const skillStyles = `
.skill-animate {
    animation: skillSlideIn 0.6s ease forwards;
    opacity: 0;
    transform: translateX(-20px);
}

@keyframes skillSlideIn {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
`;

// Add skill animation styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = skillStyles;
document.head.appendChild(styleSheet);

// Trigger skill animation when skills section is visible
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    skillsObserver.observe(skillsSection);
}

// Add scroll-to-top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    z-index: 1000;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll-to-top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.transform = 'translateY(0)';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.transform = 'translateY(100px)';
    }
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to scroll-to-top button
scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.background = '#1d4ed8';
    scrollTopBtn.style.transform = 'translateY(0) scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.background = '#2563eb';
    scrollTopBtn.style.transform = 'translateY(0) scale(1)';
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Prevent flash of unstyled content
document.documentElement.style.visibility = 'visible';

// Particle System
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.resize();
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    init() {
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Mouse interaction
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                particle.vx += dx * 0.00001;
                particle.vy += dy * 0.00001;
            }
            
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Boundary check
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Draw particle
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fillStyle = '#60a5fa';
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
        });
        
        // Draw connections
        this.particles.forEach((p1, i) => {
            this.particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    this.ctx.globalAlpha = (100 - distance) / 100 * 0.1;
                    this.ctx.strokeStyle = '#60a5fa';
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Interactive Terminal
class InteractiveTerminal {
    constructor() {
        this.commands = [
            { cmd: 'whoami', output: ['guo.zenan - Software Engineer', 'Currently studying at Taylor\'s University'] },
            { cmd: 'skills --list', output: ['├── Java Development ✓', '├── Data Science & Analytics ✓', '└── Android Frontend Development ✓'] },
            { cmd: 'status', output: ['Status: Available for opportunities', 'Location: Kuala Lumpur, Malaysia', 'Currently: WBL Internship at YTL Communications'] },
            { cmd: 'contact --info', output: ['Email: g2540652486@gmail.com', 'GitHub: github.com/blakezenan', 'LinkedIn: linkedin.com/in/zenan-guo'] }
        ];
        this.currentCommand = 0;
        this.currentChar = 0;
        this.isTyping = false;
        this.terminalText = document.getElementById('terminal-text');
        this.terminalOutput = document.getElementById('terminal-output');
        
        this.startTyping();
    }
    
    async startTyping() {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Initial delay
        
        while (this.currentCommand < this.commands.length) {
            await this.typeCommand();
            await this.showOutput();
            await new Promise(resolve => setTimeout(resolve, 3000)); // Delay between commands
            this.currentCommand++;
            this.currentChar = 0;
        }
        
        // Loop back to beginning
        this.currentCommand = 0;
        this.terminalOutput.innerHTML = '';
        this.startTyping();
    }
    
    async typeCommand() {
        const command = this.commands[this.currentCommand].cmd;
        this.terminalText.textContent = '';
        
        for (let i = 0; i <= command.length; i++) {
            this.terminalText.textContent = command.substring(0, i);
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
    
    async showOutput() {
        const output = this.commands[this.currentCommand].output;
        
        for (const line of output) {
            const outputLine = document.createElement('div');
            outputLine.className = 'output-line';
            
            if (line.includes('✓')) {
                outputLine.className += ' output-success';
            } else if (line.includes('github.com') || line.includes('linkedin.com') || line.includes('@gmail.com')) {
                outputLine.className += ' output-highlight';
            }
            
            outputLine.textContent = line;
            this.terminalOutput.appendChild(outputLine);
            
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
}

// GitHub API Integration
class GitHubActivity {
    constructor(username = 'blakezenan') {
        this.username = username;
        this.apiUrl = `https://api.github.com/users/${username}`;
        this.reposUrl = `https://api.github.com/users/${username}/repos`;
        this.eventsUrl = `https://api.github.com/users/${username}/events`;
        
        this.loadGitHubData();
    }
    
    async loadGitHubData() {
        try {
            // Load user data
            const userResponse = await fetch(this.apiUrl);
            const userData = await userResponse.json();
            
            // Load repositories
            const reposResponse = await fetch(this.reposUrl);
            const reposData = await reposResponse.json();
            
            // Update stats
            this.updateStats(userData, reposData);
            
            // Load recent activity (limited by CORS, so we'll simulate)
            this.loadRecentActivity();
            
        } catch (error) {
            console.log('GitHub API limit reached or CORS issue, using sample data');
            this.loadSampleData();
        }
    }
    
    updateStats(userData, reposData) {
        document.getElementById('github-repos').textContent = userData.public_repos || '5+';
        document.getElementById('github-followers').textContent = userData.followers || '10+';
        
        // Calculate total stars
        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        document.getElementById('github-stars').textContent = totalStars || '15+';
        
        // Estimate commits (this would need GitHub GraphQL API for accurate data)
        document.getElementById('github-commits').textContent = '200+';
    }
    
    loadSampleData() {
        document.getElementById('github-repos').textContent = '8';
        document.getElementById('github-commits').textContent = '150+';
        document.getElementById('github-stars').textContent = '12';
        document.getElementById('github-followers').textContent = '15';
        
        this.loadRecentActivity();
    }
    
    loadRecentActivity() {
        const recentCommits = [
            { message: 'Implement employee management system backend', date: '2 days ago', repo: 'employee-management' },
            { message: 'Add authentication middleware', date: '5 days ago', repo: 'employee-management' },
            { message: 'Update portfolio design', date: '1 week ago', repo: 'portfolio' },
            { message: 'Fix responsive layout issues', date: '1 week ago', repo: 'portfolio' }
        ];
        
        const activityContainer = document.getElementById('recent-commits');
        activityContainer.innerHTML = '<h4>Recent Activity</h4>';
        
        recentCommits.forEach(commit => {
            const commitDiv = document.createElement('div');
            commitDiv.className = 'commit-item';
            commitDiv.innerHTML = `
                <div class="commit-message">${commit.message}</div>
                <div class="commit-meta">${commit.repo} • ${commit.date}</div>
            `;
            activityContainer.appendChild(commitDiv);
        });
    }
}

// Animated Skill Progress Bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.getAttribute('data-progress');
                
                setTimeout(() => {
                    progressBar.style.width = progress + '%';
                }, Math.random() * 500); // Random delay for staggered effect
                
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// Loading Screen Manager
class LoadingManager {
    constructor() {
        this.loadingScreen = document.getElementById('loading-screen');
        this.progress = 0;
        this.resources = [
            'particles',
            'terminal', 
            'github',
            'skills',
            'animations'
        ];
        
        this.init();
    }
    
    init() {
        this.simulateLoading();
    }
    
    async simulateLoading() {
        for (let i = 0; i < this.resources.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 600));
            this.progress = ((i + 1) / this.resources.length) * 100;
        }
        
        await new Promise(resolve => setTimeout(resolve, 500));
        this.hideLoading();
    }
    
    hideLoading() {
        this.loadingScreen.classList.add('hidden');
        document.body.classList.add('loaded');
        
        // Initialize page transitions
        this.initPageTransitions();
        
        setTimeout(() => {
            this.loadingScreen.remove();
        }, 800);
    }
    
    initPageTransitions() {
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            section.classList.add('page-transition');
            setTimeout(() => {
                section.classList.add('loaded');
            }, index * 200);
        });
        
        // Initialize scroll reveal
        this.initScrollReveal();
    }
    
    initScrollReveal() {
        const revealElements = document.querySelectorAll('.experience-item, .project-card, .skill-category, .github-activity');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-reveal', 'revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        revealElements.forEach(el => {
            el.classList.add('scroll-reveal');
            observer.observe(el);
        });
    }
}


// Initialize all systems
document.addEventListener('DOMContentLoaded', () => {
    // Initialize loading screen
    new LoadingManager();
    
    
    // Initialize particle system after loading
    setTimeout(() => {
        const canvas = document.getElementById('particles-canvas');
        if (canvas) {
            new ParticleSystem(canvas);
        }
        
        // Initialize terminal
        if (document.getElementById('terminal-text')) {
            new InteractiveTerminal();
        }
        
        // Initialize GitHub activity
        if (document.getElementById('github-repos')) {
            new GitHubActivity();
        }
        
        // Initialize skill bar animations
        animateSkillBars();
    }, 3000);
});
