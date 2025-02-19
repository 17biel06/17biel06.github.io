// Features Data
const features = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
    title: 'Advanced AI Processing',
    description: 'Leverage cutting-edge machine learning algorithms for intelligent decision-making and automation.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 0 0 8 11a4 4 0 1 1 8 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0 0 15.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 0 0 4 11c0 2.473.345 4.866.99 7.132m18.364 2.368A13.95 13.95 0 0 1 12 24a13.95 13.95 0 0 1-11.354-5.868M12 11c0 3.517 1.01 6.799 2.753 9.571m3.44-2.04l-.054-.09A13.916 13.916 0 0 1 16 11a4 4 0 1 0-8 0c0 1.017.07 2.019.203 3m2.118 6.844A21.88 21.88 0 0 1 8.83 17m-3.839 1.132C4.345 15.866 4 13.473 4 11a8 8 0 0 1 16 0c0 2.473-.345 4.866-.99 7.132M3.585 18.5A13.95 13.95 0 0 0 12 24a13.95 13.95 0 0 0 11.354-5.868"/></svg>`,
    title: 'Biometric Authentication',
    description: 'Secure access control with multi-factor authentication and biometric verification.',
    image: 'https://images.unsplash.com/photo-1535557597501-0fee0a500c57?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
    title: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions with our advanced analytics engine.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  }
];

// Populate Features
const featuresGrid = document.querySelector('.features .features-grid');
features.forEach(feature => {
  const featureCard = document.createElement('div');
  featureCard.className = 'feature-card';
  featureCard.innerHTML = `
    <div class="feature-image">
      <img src="${feature.image}" alt="${feature.title}" loading="lazy">
    </div>
    <div class="feature-content">
      <div class="feature-icon">${feature.icon}</div>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
      <button class="btn btn-primary">Learn More</button>
    </div>
  `;
  featuresGrid.appendChild(featureCard);
});

// Testimonials Data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechStart Inc",
    content: "Implementing this AI solution has transformed our workflow. We've seen a 40% increase in productivity within weeks.",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Michael Chen",
    role: "Director of Operations, GlobalTech",
    content: "The ROI has been incredible. We've reduced costs by 60% while improving our service quality.",
    image: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Emma Davis",
    role: "CEO, Innovation Labs",
    content: "Best decision we made this year. The AI accuracy is impressive and the support team is outstanding.",
    image: "https://i.pravatar.cc/150?img=9"
  }
];

// Populate Testimonials
const testimonialsGrid = document.querySelector('.testimonials-grid');
testimonials.forEach(testimonial => {
  const testimonialCard = document.createElement('div');
  testimonialCard.className = 'testimonial-card';
  testimonialCard.innerHTML = `
    <div class="flex items-center gap-4 mb-4">
      <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full">
      <div>
        <h4>${testimonial.name}</h4>
        <p class="text-sm text-gray-600">${testimonial.role}</p>
      </div>
    </div>
    <p>${testimonial.content}</p>
  `;
  testimonialsGrid.appendChild(testimonialCard);
});

// Theme Toggle System - Consolidado
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function setTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeToggle(isDark);
    
    // Update meta theme-color
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      isDark ? '#111827' : '#ffffff'
    );
  }

  function updateThemeToggle(isDark) {
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggle.innerHTML = `
      <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
      </svg>
      <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>
      </svg>
    `;
    
    // Add transition effect
    document.body.classList.add('theme-transition');
    setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 300);
  }

  // Initialize theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme === 'dark');
  } else {
    setTheme(true); // Default to dark theme
  }

  // Theme toggle click handler
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
    
    // Add click effect
    themeToggle.classList.add('theme-toggle-clicked');
    setTimeout(() => {
      themeToggle.classList.remove('theme-toggle-clicked');
    }, 300);
  });

  // System preference change handler
  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches);
    }
  });

  // Código para la cuenta regresiva (24 horas desde ahora)
  const countdownEl = document.getElementById('countdown');
  // Establecemos el plazo: 24 horas a partir de la carga
  const deadline = new Date(Date.now() + 24 * 60 * 60 * 1000);
  
  function updateCountdown() {
    const now = new Date();
    const diff = deadline - now;
    if (diff <= 0) {
      countdownEl.textContent = '00:00:00';
      clearInterval(timer);
      return;
    }
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    countdownEl.innerHTML = `
      <span class="time-block">${String(hours).padStart(2, '0')}</span>:
      <span class="time-block">${String(minutes).padStart(2, '0')}</span>:
      <span class="time-block">${String(seconds).padStart(2, '0')}</span>
    `;
  }
  
  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);

  // Código del Chat Widget
  const chatToggle = document.getElementById('chatToggle');
  const chatWidget = document.getElementById('chatWidget');
  const chatClose = document.getElementById('chatClose');
  
  if (chatToggle && chatWidget && chatClose) {
    chatToggle.addEventListener('click', () => {
      chatWidget.classList.toggle('hidden');
    });
  
    chatClose.addEventListener('click', () => {
      chatWidget.classList.add('hidden');
    });
  }
});

// Exit Intent
let exitIntentShown = false;

document.addEventListener('mouseleave', (e) => {
  if (e.clientY <= 0 && !exitIntentShown) {
    exitIntentShown = true;
    showExitIntent();
  }
});

function showExitIntent() {
  const exitIntent = document.createElement('div');
  exitIntent.className = 'exit-intent';
  exitIntent.innerHTML = `
    <div class="exit-intent-content">
      <h2>Wait! Don't Leave Yet</h2>
      <p>Get 20% off your first month when you sign up today!</p>
      <form>
        <input type="email" placeholder="Enter your email">
        <button class="btn btn-primary">Claim Offer</button>
      </form>
      <button class="exit-intent-close">&times;</button>
    </div>
  `;
  document.body.appendChild(exitIntent);

  exitIntent.querySelector('.exit-intent-close').addEventListener('click', () => {
    exitIntent.remove();
  });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Here you would typically send the form data to your server
  const formData = new FormData(contactForm);
  
  // Show success message
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
  
  // Simulate form submission
  setTimeout(() => {
    submitButton.textContent = 'Message Sent!';
    submitButton.classList.add('success');
    
    // Reset form
    contactForm.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      submitButton.classList.remove('success');
    }, 3000);
  }, 1500);
});

// Button Handlers
document.addEventListener('DOMContentLoaded', () => {
  // Get Started buttons
  const getStartedButtons = document.querySelectorAll('.btn-primary:not([type="submit"])');
  getStartedButtons.forEach(button => {
    if (button.textContent.trim().includes('Get Started')) {
      button.addEventListener('click', () => {
        document.querySelector('#pricing').scrollIntoView({ behavior: 'smooth' });
      });
    }
  });

  // Start Free Trial buttons
  const trialButtons = document.querySelectorAll('.btn:not([type="submit"])');
  trialButtons.forEach(button => {
    if (button.textContent.trim().includes('Free Trial')) {
      button.addEventListener('click', () => {
        showTrialModal();
      });
    }
  });

  // Schedule Demo buttons
  const demoButtons = document.querySelectorAll('.btn-secondary');
  demoButtons.forEach(button => {
    if (button.textContent.trim().includes('Demo')) {
      button.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        // Pre-select demo option in contact form
        const subjectSelect = document.querySelector('#subject');
        if (subjectSelect) {
          subjectSelect.value = 'demo';
        }
      });
    }
  });

  // Learn More buttons
  const learnMoreButtons = document.querySelectorAll('.feature-card .btn');
  learnMoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const featureTitle = e.target.closest('.feature-card').querySelector('h3').textContent;
      showFeatureModal(featureTitle);
    });
  });

  // Theme Toggle Enhancement
  // Set initial theme to dark
  if (!localStorage.getItem('theme')) {
    setTheme(true);
  }
  
  // Update theme toggle button icon
  function updateThemeToggleIcon() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeToggle.innerHTML = isDark ? `
      <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
      <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 A7 7 0 0 0 21 12.79z"/>
      </svg>
    ` : `
      <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    `;
  }

  // Override theme toggle click handler
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
    updateThemeToggleIcon();
  });

  // Initial icon update
  updateThemeToggleIcon();
});

// Trial Modal
function showTrialModal() {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal">
      <h2>Start Your Free Trial</h2>
      <form class="trial-form">
        <div class="form-group">
          <label for="trial-email">Work Email</label>
          <input type="email" id="trial-email" required placeholder="you@company.com">
        </div>
        <div class="form-group">
          <label for="trial-company">Company Name</label>
          <input type="text" id="trial-company" required placeholder="Your Company">
        </div>
        <button type="submit" class="btn btn-primary">Start Free Trial</button>
        <p class="trial-terms">By starting a trial, you agree to our <a href="#">Terms of Service</a></p>
      </form>
      <button class="modal-close">&times;</button>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.addEventListener('click', () => modal.remove());

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });

  const form = modal.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    modal.innerHTML = `
      <div class="modal">
        <h2>Thanks for signing up!</h2>
        <p>Check your email to complete your registration.</p>
        <button class="btn btn-primary modal-close">Close</button>
      </div>
    `;
  });
}

// Feature Modal
function showFeatureModal(featureTitle) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal">
      <h2>${featureTitle}</h2>
      <div class="feature-details">
        <p>Detailed information about ${featureTitle} coming soon...</p>
        <button class="btn btn-primary">Request a Demo</button>
      </div>
      <button class="modal-close">&times;</button>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.addEventListener('click', () => modal.remove());

  const demoBtn = modal.querySelector('.btn-primary');
  demoBtn.addEventListener('click', () => {
    modal.remove();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

// Enhanced Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  
  // Set initial theme to dark by default
  if (!localStorage.getItem('theme')) {
    setTheme(true);
  }
  
  function updateThemeToggle(isDark) {
    // Update toggle button
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggle.innerHTML = `
      <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
      </svg>
      <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>
      </svg>
    `;

    // Add transition class to body for smooth color transitions
    document.body.classList.add('theme-transition');
    setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 300);
  }

  // Enhanced theme toggle with animation
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
    updateThemeToggle(!isDark);
    
    // Add click effect
    themeToggle.classList.add('theme-toggle-clicked');
    setTimeout(() => {
      themeToggle.classList.remove('theme-toggle-clicked');
    }, 300);
  });

  // Update theme based on system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      const isDark = e.matches;
      setTheme(isDark);
      updateThemeToggle(isDark);
    }
  });

  // Initial theme toggle update
  updateThemeToggle(document.documentElement.getAttribute('data-theme') === 'dark');
});

// Enhanced setTheme function
function setTheme(isDark) {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // Update meta theme-color
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    'content',
    isDark ? '#111827' : '#ffffff'
  );
}

// Theme System
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  
  // Theme toggle function
  function toggleTheme() {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    // Update DOM
    root.setAttribute('data-theme', newTheme);
    
    // Update localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update meta theme-color
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', newTheme === 'dark' ? '#111827' : '#ffffff');
    
    // Update toggle button icons
    updateThemeToggleIcon(newTheme === 'dark');
    
    // Add transition effect
    document.body.classList.add('theme-transition');
    setTimeout(() => document.body.classList.remove('theme-transition'), 300);
  }

  // Update theme toggle icons
  function updateThemeToggleIcon(isDark) {
    themeToggle.innerHTML = `
      <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
      </svg>
      <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>
      </svg>
    `;
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  // Initialize theme
  function initializeTheme() {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    
    // If no saved theme, default to dark
    const initialTheme = savedTheme || 'dark';
    
    // Set initial theme
    root.setAttribute('data-theme', initialTheme);
    updateThemeToggleIcon(initialTheme === 'dark');
    
    // Update meta theme-color
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', initialTheme === 'dark' ? '#111827' : '#ffffff');
  }

  // Event Listeners
  themeToggle.addEventListener('click', () => {
    toggleTheme();
    
    // Add click animation
    themeToggle.classList.add('theme-toggle-clicked');
    setTimeout(() => themeToggle.classList.remove('theme-toggle-clicked'), 300);
  });

  // Initialize on load
  initializeTheme();
});

// Simplified Theme System
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  
  // Theme toggle function
  function toggleTheme() {
    const isDark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    
    // Update theme-color meta tag
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content', 
      isDark ? '#ffffff' : '#111827'
    );

    // Add transition class
    document.body.classList.add('theme-transition');
    setTimeout(() => document.body.classList.remove('theme-transition'), 300);
  }

  // Set initial theme
  function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    root.setAttribute('data-theme', savedTheme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      savedTheme === 'dark' ? '#111827' : '#ffffff'
    );
  }

  // Event listeners
  themeToggle.addEventListener('click', () => {
    toggleTheme();
    themeToggle.classList.add('theme-toggle-clicked');
    setTimeout(() => themeToggle.classList.remove('theme-toggle-clicked'), 300);
  });

  // Initialize theme
  initTheme();
});

// Remove any duplicate theme initialization code
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  // Simple function to toggle theme
  function toggleTheme() {
    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add animation class
    themeToggle.classList.add('theme-toggle-clicked');
    setTimeout(() => themeToggle.classList.remove('theme-toggle-clicked'), 300);
  }

  // Initialize theme - force dark theme by default
  function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
  }

  // Event listener for theme toggle
  themeToggle?.addEventListener('click', toggleTheme);

  // Initialize theme
  initTheme();
});

// Eliminar todo el código relacionado con el tema y reemplazarlo con esto:
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Aseguramos que el botón pueda recibir eventos de clic y tenga alto z-index
  themeToggle.style.pointerEvents = 'auto';
  themeToggle.style.zIndex = '2000';

  function setThemeIcon(isDark) {
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    if (sunIcon && moonIcon) {
      sunIcon.style.display = isDark ? 'block' : 'none';
      moonIcon.style.display = isDark ? 'none' : 'block';
    }
  }

  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setThemeIcon(newTheme === 'dark');
    
    themeToggle.classList.add('theme-toggle-clicked');
    setTimeout(() => themeToggle.classList.remove('theme-toggle-clicked'), 300);
  }

  // Inicialización: si no hay tema guardado, por defecto se usa dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  setThemeIcon(savedTheme === 'dark');

  // Único event listener para el botón de tema
  themeToggle.addEventListener('click', toggleTheme);
});