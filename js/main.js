// ============================================
// BHOLENATH MOBILE - MAIN APPLICATION JS
// ============================================

// DOM Elements
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const searchClose = document.getElementById('searchClose');
const sortSelect = document.getElementById('sortSelect');
const filterBtns = document.querySelectorAll('.filter-btn');
const productModal = document.getElementById('productModal');
const productClose = document.getElementById('productClose');
const categoriesModal = document.getElementById('categoriesModal');
const categoriesClose = document.getElementById('categoriesClose');
const needCards = document.querySelectorAll('.need-card');

// ============================================
// HEADER & NAVIGATION
// ============================================

// Mobile Menu Toggle
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', menuToggle.classList.contains('active'));
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking on a link
navMenu.querySelectorAll('a, button').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
    });
});

// Dropdown Menu Toggle
const navDropdown = document.querySelector('.nav-dropdown');
const navDropdownToggle = document.querySelector('.nav-dropdown-toggle');

if (navDropdownToggle) {
    navDropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        navDropdown.classList.toggle('active');
        const isExpanded = navDropdown.classList.contains('active');
        navDropdownToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!navDropdown.contains(e.target)) {
            navDropdown.classList.remove('active');
            navDropdownToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Category filter buttons in dropdown
document.querySelectorAll('.category-filter').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const category = btn.dataset.category;
        updateFilterBtns(category);
        filterProducts(category);
        if (searchInput) searchInput.value = '';
        if (navDropdown) navDropdown.classList.remove('active');
        if (navDropdownToggle) navDropdownToggle.setAttribute('aria-expanded', 'false');

        setTimeout(() => {
            const productsSection = document.getElementById('products');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    });
});

// Sticky Header Effect
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 100) {
        header.style.boxShadow = 'var(--shadow-md)';
    } else {
        header.style.boxShadow = 'var(--shadow-sm)';
    }

    lastScrollTop = scrollTop;
});

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        searchBar.classList.add('active');
        searchInput.focus();
    });
}

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchBar.classList.remove('active');
        searchInput.value = '';
        filterProducts('all');
        updateFilterBtns('all');
    });
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        searchProducts(query);
    });

    // Search on Enter
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchProducts(searchInput.value);
        }
    });
}

// Close search on escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (searchBar) searchBar.classList.remove('active');
        if (productModal) {
            productModal.classList.remove('active');
            productModal.setAttribute('aria-hidden', 'true');
        }
        if (categoriesModal) {
            categoriesModal.classList.remove('active');
            categoriesModal.setAttribute('aria-hidden', 'true');
        }
    }
});

// ============================================
// PRODUCT FILTERING
// ============================================

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        if (filter === 'more') {
            openCategoriesModal();
            return;
        }

        updateFilterBtns(filter);
        filterProducts(filter);
        if (searchInput) searchInput.value = '';

        setTimeout(() => {
            const productsSection = document.getElementById('products');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    });
});

function updateFilterBtns(activeFilter) {
    filterBtns.forEach(btn => {
        if (btn.dataset.filter === activeFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ============================================
// SORTING
// ============================================

if (sortSelect) {
    sortSelect.addEventListener('change', () => {
        sortProducts();
    });
}

// ============================================
// SHOP BY NEED CARDS
// ============================================

needCards.forEach(card => {
    card.addEventListener('click', handleNeedCardClick);
    
    // Keyboard accessibility
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleNeedCardClick.call(card);
        }
    });
});

function handleNeedCardClick() {
    const categories = this.dataset.category.split(',');
    const primaryCategory = categories[0].trim();

    updateFilterBtns(primaryCategory);
    filterProducts(primaryCategory);
    if (searchInput) searchInput.value = '';

    setTimeout(() => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
}

// ============================================
// MODALS
// ============================================

// Close Product Modal
if (productClose) {
    productClose.addEventListener('click', closeProductModal);
}

if (productModal) {
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            closeProductModal();
        }
    });
}

// Close Categories Modal
if (categoriesClose) {
    categoriesClose.addEventListener('click', () => {
        if (categoriesModal) {
            categoriesModal.classList.remove('active');
            categoriesModal.setAttribute('aria-hidden', 'true');
        }
    });
}

if (categoriesModal) {
    categoriesModal.addEventListener('click', (e) => {
        if (e.target === categoriesModal) {
            categoriesModal.classList.remove('active');
            categoriesModal.setAttribute('aria-hidden', 'true');
        }
    });
}

// Open Categories Modal
function openCategoriesModal() {
    const categoriesGrid = document.getElementById('categoriesGrid');

    if (!categoriesGrid) return;

    categoriesGrid.innerHTML = categories.map(cat => `
        <div 
            class="category-item" 
            role="button"
            tabindex="0" 
            onclick="selectCategory('${cat.id}')" 
            onkeypress="if(event.key==='Enter' || event.key===' ') { event.preventDefault(); selectCategory('${cat.id}'); }"
        >
            <div class="category-item-icon" aria-hidden="true">${cat.icon}</div>
            <div class="category-item-name">${cat.name}</div>
        </div>
    `).join('');

    if (categoriesModal) {
        categoriesModal.classList.add('active');
        categoriesModal.setAttribute('aria-hidden', 'false');
    }
}

function selectCategory(categoryId) {
    updateFilterBtns(categoryId);
    filterProducts(categoryId);
    if (searchInput) searchInput.value = '';
    if (categoriesModal) {
        categoriesModal.classList.remove('active');
        categoriesModal.setAttribute('aria-hidden', 'true');
    }

    setTimeout(() => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
}

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (searchBtn) searchBtn.click();
        if (searchInput) searchInput.focus();
    }

    // Escape to close modals
    if (e.key === 'Escape') {
        if (productModal) {
            productModal.classList.remove('active');
            productModal.setAttribute('aria-hidden', 'true');
        }
        if (categoriesModal) {
            categoriesModal.classList.remove('active');
            categoriesModal.setAttribute('aria-hidden', 'true');
        }
        if (searchBar) searchBar.classList.remove('active');
    }
});

// ============================================
// ANIMATIONS ON SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.section-header, .feature-card, .need-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ============================================
// LAZY LOADING FOR IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// RESPONSIVE BEHAVIOR
// ============================================

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        if (menuToggle) menuToggle.classList.remove('active');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        if (navMenu) navMenu.classList.remove('active');
        if (navDropdown) navDropdown.classList.remove('active');
    }
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

// Log when page is ready
window.addEventListener('load', () => {
    console.log('🔱 Bholenath Mobile - Website Loaded Successfully');
    
    // Performance timing
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page loaded in ${pageLoadTime}ms`);
});

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Check if device is mobile
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🔱 Bholenath Mobile - Initialization Started');
    
    // Initialize products
    initializeProductsGrid();
    
    // Initialize enquiry bag
    loadEnquiryBag();
    
    // Set active filter
    updateFilterBtns('all');
    
    console.log('✓ All systems ready!');
});