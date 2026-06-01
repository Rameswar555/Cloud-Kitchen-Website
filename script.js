// Menu Data
const menuData = [
    {
        id: 1,
        name: 'Hyderabadi Biryani',
        category: 'biryanis',
        price: 399,
        emoji: '🍛',
        description: 'Traditional biryani with fragrant basmati rice'
    },
    {
        id: 2,
        name: 'Chicken Biryani',
        category: 'biryanis',
        price: 349,
        emoji: '🍚',
        description: 'Tender chicken cooked with aromatic spices'
    },
    {
        id: 3,
        name: 'Mutton Curry',
        category: 'curries',
        price: 429,
        emoji: '🥘',
        description: 'Slow-cooked mutton in rich gravy'
    },
    {
        id: 4,
        name: 'Butter Chicken',
        category: 'curries',
        price: 349,
        emoji: '🍗',
        description: 'Tender chicken in creamy tomato sauce'
    },
    {
        id: 5,
        name: 'Tandoori Chicken',
        category: 'tandoori',
        price: 399,
        emoji: '🍖',
        description: 'Marinated chicken grilled to perfection'
    },
    {
        id: 6,
        name: 'Paneer Tikka',
        category: 'tandoori',
        price: 299,
        emoji: '🧀',
        description: 'Grilled paneer with vegetables'
    },
    {
        id: 7,
        name: 'Gulab Jamun',
        category: 'desserts',
        price: 99,
        emoji: '🍫',
        description: 'Soft dumplings in sweet syrup'
    },
    {
        id: 8,
        name: 'Kheer',
        category: 'desserts',
        price: 89,
        emoji: '🍮',
        description: 'Creamy rice pudding with dry fruits'
    },
    {
        id: 9,
        name: 'Fish Curry',
        category: 'curries',
        price: 379,
        emoji: '🐟',
        description: 'Fresh fish cooked in aromatic curry'
    },
    {
        id: 10,
        name: 'Seekh Kebab',
        category: 'tandoori',
        price: 279,
        emoji: '🍢',
        description: 'Minced meat kebab grilled on skewers'
    },
    {
        id: 11,
        name: 'Palak Paneer',
        category: 'curries',
        price: 289,
        emoji: '🥬',
        description: 'Paneer in creamy spinach gravy'
    },
    {
        id: 12,
        name: 'Jalebi',
        category: 'desserts',
        price: 79,
        emoji: '🍯',
        description: 'Crispy spirals soaked in sugar syrup'
    }
];

let currentFilter = 'all';

// Initialize the menu
function initializeMenu() {
    displayMenuItems(menuData);
    setupCategoryButtons();
    setupContactForm();
    setupMobileMenu();
}

// Display menu items
function displayMenuItems(items) {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;
    
    menuGrid.innerHTML = '';

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-image">${item.emoji}</div>
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-price">₹${item.price}</div>
                <button class="btn btn-secondary" onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Filter menu items by category
function filterMenuItems(category) {
    currentFilter = category;
    if (category === 'all') {
        displayMenuItems(menuData);
    } else {
        const filtered = menuData.filter(item => item.category === category);
        displayMenuItems(filtered);
    }
}

// Setup category buttons
function setupCategoryButtons() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            filterMenuItems(category);
        });
    });
}

// Add to cart functionality
function addToCart(itemName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: itemName, price: price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification(`${itemName} added to cart!`);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Setup contact form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Message sent successfully! We\'ll contact you soon.');
            contactForm.reset();
        });
    }
}

// Setup mobile menu
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.style.display = 'none';
            });
        });
    }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Add CSS animations
function addAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        addAnimations();
        initializeMenu();
        setupSmoothScrolling();
    });
} else {
    addAnimations();
    initializeMenu();
    setupSmoothScrolling();
}
