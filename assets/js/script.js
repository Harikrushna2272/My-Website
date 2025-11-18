'use strict';

// ===================================
// MODERN PORTFOLIO - JAVASCRIPT
// ===================================

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Scroll Animations
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

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.fade-in-up, .stagger');
  animatedElements.forEach(el => observer.observe(el));
});

// Project Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0 && projectCards.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter projects
      const filterValue = button.dataset.filter;

      projectCards.forEach(card => {
        const category = card.dataset.category;

        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Contact Form Validation
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  const formInputs = contactForm.querySelectorAll('.form-input, .form-textarea');
  const submitBtn = contactForm.querySelector('.btn-primary');

  const validateForm = () => {
    let isValid = true;
    formInputs.forEach(input => {
      if (input.required && !input.value.trim()) {
        isValid = false;
      }
      if (input.type === 'email' && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          isValid = false;
        }
      }
    });

    if (submitBtn) {
      submitBtn.disabled = !isValid;
    }
  };

  formInputs.forEach(input => {
    input.addEventListener('input', validateForm);
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
    if (submitBtn) submitBtn.disabled = true;
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add loading animation on page load
window.addEventListener('load', () => {
  document.body.classList.add('loaded');

  // Trigger hero animations
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.classList.add('visible');
  }
});

// Typing effect for hero (optional)
const typeWriter = (element, text, speed = 50) => {
  let i = 0;
  element.textContent = '';

  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };

  type();
};

// Initialize typing effect if element exists
const typingElement = document.querySelector('.typing-text');
if (typingElement) {
  const text = typingElement.dataset.text || typingElement.textContent;
  typeWriter(typingElement, text);
}

// Parallax effect for hero background
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
  });
}

// Active navigation link based on current page
const setActiveNavLink = () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};

document.addEventListener('DOMContentLoaded', setActiveNavLink);

// Skills animation on scroll
const skillItems = document.querySelectorAll('.skill-item');
if (skillItems.length > 0) {
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 50);
      }
    });
  }, { threshold: 0.1 });

  skillItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.5s ease';
    skillObserver.observe(item);
  });
}

// Project cards hover effect enhancement
const projectCardElements = document.querySelectorAll('.project-card');
projectCardElements.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.zIndex = '10';
  });

  card.addEventListener('mouseleave', () => {
    card.style.zIndex = '1';
  });
});

// Console message
console.log('%cHey there! 👋', 'color: #06b6d4; font-size: 24px; font-weight: bold;');
console.log('%cThanks for checking out my portfolio!', 'color: #a1a1aa; font-size: 14px;');
