// ============ GLOBAL STATE ============
let cart = [];
let favorites = [];
let isDarkMode = false;
let currentFilter = 'all';

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    
    // Only render menu/gallery/offers/reviews on main page
    if (document.getElementById('menuGrid')) {
        renderMenu();
    }
    if (document.getElementById('galleryGrid')) {
        renderGallery();
    }
    if (document.getElementById('offersContainer')) {
        renderOffers();
    }
    if (document.getElementById('reviewsGrid')) {
        renderReviews();
    }
    
    setupEventListeners();
    
    // Only animate statistics on main page
    if (document.querySelector('.stat-number')) {
        animateStatistics();
    }
    
    loadCartAndFavorites();
});

// ============ THEME MANAGEMENT ============
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    }
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    isDarkMode ? disableDarkMode() : enableDarkMode();
}

function enableDarkMode() {
    isDarkMode = true;
    document.body.classList.add('dark-mode');
    document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    isDarkMode = false;
    document.body.classList.remove('dark-mode');
    document.getElementById('themeToggle').innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
}

// ============ MENU RENDERING & FILTERING ============
function renderMenu(filter = 'all') {
    const menuGrid = document.getElementById('menuGrid');
    let filteredMenu = restaurantData.menu;

    if (filter !== 'all') {
        filteredMenu = restaurantData.menu.filter(item => item.category === filter);
    }

    menuGrid.innerHTML = filteredMenu.map(item => `
        <div class="menu-card">
            <img src="${item.image}" alt="${item.name}" class="menu-card-image">
            <div class="menu-card-content">
                <div class="menu-card-category">${capitalizeFirst(item.category)}</div>
                <div class="menu-card-header">
                    <h3 class="menu-card-name">${item.name}</h3>
                </div>
                <p class="menu-card-description">${item.description}</p>
                <div class="menu-card-rating">
                    <i class="fas fa-star"></i>
                    <span>${item.rating}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <span class="menu-card-price">₹${item.price}</span>
                </div>
                <div class="menu-card-footer">
                    <button class="cart-btn" onclick="addToCart(${item.id}, '${item.name}', ${item.price}, '${item.image}')">
                        <i class="fas fa-shopping-cart"></i> Add
                    </button>
                    <button class="fav-btn ${favorites.includes(item.id) ? 'active' : ''}" onclick="toggleFavorite(${item.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function setupMenuFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderMenu(currentFilter);
            // Re-apply search if it was active
            const searchInput = document.getElementById('searchInput');
            if (searchInput.value) {
                searchMenu();
            }
        });
    });
}

function setupMenuSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', searchMenu);
}

function searchMenu() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const menuGrid = document.getElementById('menuGrid');
    let filteredMenu = restaurantData.menu;

    if (currentFilter !== 'all') {
        filteredMenu = filteredMenu.filter(item => item.category === currentFilter);
    }

    filteredMenu = filteredMenu.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );

    if (filteredMenu.length === 0) {
        menuGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);">
                <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 1rem; display: block;"></i>
                <p>No menu items found matching "${searchTerm}"</p>
            </div>
        `;
        return;
    }

    menuGrid.innerHTML = filteredMenu.map(item => `
        <div class="menu-card">
            <img src="${item.image}" alt="${item.name}" class="menu-card-image">
            <div class="menu-card-content">
                <div class="menu-card-category">${capitalizeFirst(item.category)}</div>
                <div class="menu-card-header">
                    <h3 class="menu-card-name">${item.name}</h3>
                </div>
                <p class="menu-card-description">${item.description}</p>
                <div class="menu-card-rating">
                    <i class="fas fa-star"></i>
                    <span>${item.rating}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <span class="menu-card-price">₹${item.price}</span>
                </div>
                <div class="menu-card-footer">
                    <button class="cart-btn" onclick="addToCart(${item.id}, '${item.name}', ${item.price}, '${item.image}')">
                        <i class="fas fa-shopping-cart"></i> Add
                    </button>
                    <button class="fav-btn ${favorites.includes(item.id) ? 'active' : ''}" onclick="toggleFavorite(${item.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ============ GALLERY RENDERING ============
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = restaurantData.gallery.map(item => `
        <div class="gallery-item">
            <img src="${item.image}" alt="${item.title}" class="gallery-img">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
    `).join('');
}

// ============ OFFERS RENDERING ============
function renderOffers() {
    const offersContainer = document.getElementById('offersContainer');
    offersContainer.innerHTML = restaurantData.offers.map(offer => `
        <div class="offer-card">
            <div class="offer-content">
                <h3 class="offer-title">${offer.title}</h3>
                <p class="offer-description">${offer.description}</p>
                <div class="offer-code">${offer.code}</div>
                <p class="offer-validity">📅 ${offer.validity}</p>
            </div>
        </div>
    `).join('');
}

// ============ REVIEWS RENDERING ============
function renderReviews() {
    const reviewsGrid = document.getElementById('reviewsGrid');
    reviewsGrid.innerHTML = restaurantData.reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="reviewer-info">
                    <div class="reviewer-avatar">${review.avatar}</div>
                    <div class="reviewer-details">
                        <h4>${review.name}</h4>
                        <span class="reviewer-date">${formatDate(review.date)}</span>
                    </div>
                </div>
                <div class="review-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
                </div>
            </div>
            <h5 class="review-title">${review.title}</h5>
            <p class="review-text">${review.text}</p>
        </div>
    `).join('');
}

// ============ CART MANAGEMENT ============
function addToCart(itemId, itemName, itemPrice, itemImage) {
    const existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: itemId,
            name: itemName,
            price: itemPrice,
            image: itemImage,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showToast(`${itemName} added to cart!`);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartCount();
    renderCartModal();
}

function updateCartQuantity(itemId, quantity) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart();
        updateCartCount();
        renderCartModal();
    }
}

function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = cartCount;
}

function renderCartModal() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-cart" style="font-size: 2rem; margin-bottom: 1rem; display: block;"></i>Your cart is empty</div>';
        document.getElementById('subtotal').textContent = '₹0';
        document.getElementById('tax').textContent = '₹0';
        document.getElementById('total').textContent = '₹0';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    `).join('');

    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = `₹${subtotal}`;
    document.getElementById('tax').textContent = `₹${tax}`;
    document.getElementById('total').textContent = `₹${total}`;
}

// ============ FAVORITES MANAGEMENT ============
function toggleFavorite(itemId) {
    if (favorites.includes(itemId)) {
        favorites = favorites.filter(id => id !== itemId);
        showToast('Removed from favorites');
    } else {
        favorites.push(itemId);
        showToast('Added to favorites!');
    }
    saveFavorites();
    renderMenu(currentFilter);
}

// ============ LOCAL STORAGE ============
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function loadCartAndFavorites() {
    const savedCart = localStorage.getItem('cart');
    const savedFavorites = localStorage.getItem('favorites');

    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }

    if (savedFavorites) {
        favorites = JSON.parse(savedFavorites);
    }
}

// ============ BOOKING FORM ============
function setupBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            guests: document.getElementById('guests').value,
            occasion: document.getElementById('occasion').value,
            message: document.getElementById('message').value
        };

        // Save booking to localStorage
        let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        bookings.push(formData);
        localStorage.setItem('bookings', JSON.stringify(bookings));

        showToast('✓ Table booked successfully! We will confirm via email.');
        bookingForm.reset();
    });
}

// ============ CART MODAL ============
function setupCartModal() {
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    
    // Only setup if cart modal exists (on main page)
    if (!cartModal) return;
    
    const closeBtn = document.querySelector('.close-btn');

    cartBtn.addEventListener('click', () => {
        renderCartModal();
        cartModal.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });
}

// ============ FAVORITES BUTTON ============
function setupFavoriteButton() {
    const favoriteBtn = document.getElementById('favoriteBtn');
    
    // Only setup if favorites button exists
    if (!favoriteBtn) return;
    
    favoriteBtn.addEventListener('click', () => {
        showToast(`You have ${favorites.length} favorite items!`);
    });
}

// ============ STATISTICS ANIMATION ============
function animateStatistics() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateNumber = (element) => {
        const target = parseInt(element.dataset.target);
        let current = 0;
        const increment = target / 30;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 50);
    };

    // Animate when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    statNumbers.forEach(stat => observer.observe(stat));
}

// ============ TOAST NOTIFICATION ============
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// ============ UTILITY FUNCTIONS ============
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ============ HAMBURGER MENU ============
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ============ SETUP EVENT LISTENERS ============
function setupEventListeners() {
    setupThemeToggle();
    
    // Only setup menu-related listeners on main page
    if (document.querySelector('.filter-btn')) {
        setupMenuFilters();
    }
    if (document.getElementById('searchInput')) {
        setupMenuSearch();
    }
    
    setupCartModal();
    setupFavoriteButton();
    
    // Only setup booking form on booking page
    if (document.getElementById('bookingForm')) {
        setupBookingForm();
    }
    
    setupHamburgerMenu();

    // Smooth scroll for buttons
    const buttons = document.querySelectorAll('a[href^="#"]');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const href = button.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ============ LAZY LOADING IMAGES ============
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Images are already loaded, just ensure they're visible
                img.style.opacity = '1';
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.style.opacity = '1'; // Show immediately for this demo
        imageObserver.observe(img);
    });
});

// ============ HANDLE MISSING DATA ============
if (typeof restaurantData === 'undefined') {
    console.error('Restaurant data not loaded. Make sure data.js is included before script.js');
}
