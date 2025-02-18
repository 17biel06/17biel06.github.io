// Preloader handler with check
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Menu data
const menuData = {
    entrantes: [
        {
            title: 'Carpaccio de Pulpo',
            description: 'Finas láminas de pulpo con aceite de oliva virgen extra, pimentón y sal marina',
            price: '18€',
            image: 'https://images.unsplash.com/photo-1599321955726-e048426594af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Tartar de Atún',
            description: 'Atún rojo marinado con aguacate, mango y vinagreta de soja',
            price: '22€',
            image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Burrata con Tomates',
            description: 'Burrata cremosa con tomates cherry confitados y pesto de albahaca',
            price: '16€',
            image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    ],
    principales: [
        {
            title: 'Lubina Salvaje',
            description: 'Lubina a la plancha con verduras de temporada y salsa de cítricos',
            price: '32€',
            image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Solomillo Wellington',
            description: 'Solomillo de ternera envuelto en hojaldre con duxelle de setas',
            price: '38€',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Risotto de Trufa',
            description: 'Risotto cremoso con trufa negra y parmesano reggiano',
            price: '28€',
            image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    ],
    postres: [
        {
            title: 'Tarta de Chocolate',
            description: 'Tarta de chocolate belga con helado de vainilla bourbon',
            price: '12€',
            image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Crème Brûlée',
            description: 'Crema catalana con azúcar caramelizado y frutos rojos',
            price: '10€',
            image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Tiramisú',
            description: 'Tiramisú tradicional con café espresso y cacao',
            price: '11€',
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    ],
    vinos: [
        {
            title: 'Vega Sicilia Único',
            description: 'Ribera del Duero, 2010',
            price: '320€',
            image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Château Margaux',
            description: 'Bordeaux, 2015',
            price: '890€',
            image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Pingus',
            description: 'Ribera del Duero, 2018',
            price: '950€',
            image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    ]
};

// Gallery data
const galleryData = [
    {
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Interior del Restaurante'
    },
    {
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Platos Especiales'
    },
    {
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Ambiente'
    },
    {
        image: 'https://images.unsplash.com/photo-1551218372-a8789b81b253?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Cocina'
    },
    {
        image: 'https://images.unsplash.com/photo-1507914372368-b2b085b925a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Terraza'
    },
    {
        image: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Eventos Especiales'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');

    // Initialize menu
    const menuGrid = document.querySelector('.menu-grid');
    const menuNavItems = document.querySelectorAll('.menu-nav-item');
    
    if (!menuGrid) {
        console.error('Menu grid not found!');
        return;
    }

    if (!menuNavItems.length) {
        console.error('Menu navigation items not found!');
        return;
    }

    console.log('Menu elements found, initializing...');

    function showMenuCategory(category) {
        console.log('Showing category:', category);
        if (!menuData[category]) {
            console.error('Category not found:', category);
            return;
        }

        menuGrid.innerHTML = '';
        menuData[category].forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="menu-item-image" onerror="this.src='placeholder.jpg'">
                <div class="menu-item-content">
                    <h3 class="menu-item-title">${item.title}</h3>
                    <p class="menu-item-description">${item.description}</p>
                    <p class="menu-item-price">${item.price}</p>
                </div>
            `;
            menuGrid.appendChild(menuItem);
        });
    }

    // Event listeners for menu navigation
    menuNavItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            console.log('Menu item clicked:', category);
            menuNavItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            showMenuCategory(category);
        });
    });

    // Show initial category
    console.log('Setting initial category');
    showMenuCategory('entrantes');

    // Initialize gallery with modal functionality
    const galleryGrid = document.querySelector('.gallery-grid');
    const modal = document.querySelector('.gallery-modal');
    const modalImage = document.querySelector('.modal-image');
    const modalClose = document.querySelector('.modal-close');

    if (galleryGrid && modal && modalImage) {
        console.log('Initializing gallery with modal');
        galleryData.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="gallery-image" onerror="this.src='placeholder.jpg'">
                <div class="gallery-overlay">
                    <span class="gallery-icon">🔍</span>
                </div>
            `;
            
            // Add click event to open modal
            galleryItem.addEventListener('click', () => {
                modalImage.src = item.image;
                modalImage.alt = item.title;
                modal.classList.add('active');
            });
            
            galleryGrid.appendChild(galleryItem);
        });

        // Close modal when clicking outside image or on close button
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target === modalClose) {
                modal.classList.remove('active');
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll to top button
    const scrollTopButton = document.querySelector('.scroll-top-button');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form submission
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Gracias por su reserva. Nos pondremos en contacto con usted pronto.');
            reservationForm.reset();
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your newsletter subscription logic here
            alert('Gracias por suscribirse a nuestro newsletter.');
            newsletterForm.reset();
        });
    }

});