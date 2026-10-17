// ============================================
// BHOLENATH MOBILE - PRODUCTS DATA & MANAGEMENT
// ============================================

// Product Database - All 19 Products
const productsDatabase = [
    // Chargers
    {
        id: 1,
        name: "UBON TC-210 Fast Charger",
        model: "TC-210",
        category: "chargers",
        price: 599,
        originalPrice: 999,
        description: "Compact and powerful fast charger with dual USB ports for simultaneous charging of multiple devices.",
        image: "assets/products/placeholder.png",
        specs: {
            "Input": "AC 100-240V",
            "Output": "5V/2.4A",
            "Ports": "Dual USB",
            "Type": "Wall Charger"
        }
    },
    {
        id: 2,
        name: "UBON TC-320 Type-C Charger",
        model: "TC-320",
        category: "chargers",
        price: 899,
        originalPrice: 1499,
        description: "Fast Type-C charger with intelligent chip protection for all modern devices.",
        image: "assets/products/placeholder.png",
        specs: {
            "Input": "AC 100-240V",
            "Output": "5V/3A Type-C",
            "Charging Speed": "Fast",
            "Type": "Wall Charger"
        }
    },

    // Earbuds
    {
        id: 3,
        name: "UBON Earbuds Pro True Wireless",
        model: "UB-EPT-100",
        category: "earbuds",
        price: 1299,
        originalPrice: 2199,
        description: "Premium true wireless earbuds with active noise cancellation and 24-hour total battery.",
        image: "assets/products/placeholder.png",
        specs: {
            "Type": "TWS",
            "Driver": "10mm",
            "Battery": "24+ Hours",
            "Features": "ANC, Touch Control"
        }
    },
    {
        id: 4,
        name: "UBON Earbuds Lite Wireless",
        model: "UB-EBL-50",
        category: "earbuds",
        price: 799,
        originalPrice: 1299,
        description: "Lightweight true wireless earbuds with crisp sound quality and comfortable fit.",
        image: "assets/products/placeholder.png",
        specs: {
            "Type": "TWS",
            "Driver": "8mm",
            "Battery": "16+ Hours",
            "Features": "Sweat Resistant"
        }
    },

    // Headphones
    {
        id: 5,
        name: "UBON Headphones Studio Over-Ear",
        model: "UB-HPS-200",
        category: "headphones",
        price: 1899,
        originalPrice: 3199,
        description: "Professional studio-grade over-ear headphones with rich bass and passive noise isolation.",
        image: "assets/products/placeholder.png",
        specs: {
            "Type": "Over-Ear",
            "Driver": "40mm",
            "Connectivity": "Bluetooth 5.0",
            "Battery": "30 Hours"
        }
    },
    {
        id: 6,
        name: "UBON Headphones Compact On-Ear",
        model: "UB-HPO-100",
        category: "headphones",
        price: 1199,
        originalPrice: 1999,
        description: "Portable on-ear headphones with lightweight design and excellent sound quality.",
        image: "assets/products/placeholder.png",
        specs: {
            "Type": "On-Ear",
            "Driver": "32mm",
            "Connectivity": "Bluetooth 4.2",
            "Battery": "20 Hours"
        }
    },

    // Neckbands
    {
        id: 7,
        name: "UBON Neckband Wireless Audio",
        model: "UB-NB-150",
        category: "neckbands",
        price: 899,
        originalPrice: 1499,
        description: "Comfortable neckband design with retractable earbuds and extended battery life.",
        image: "assets/products/placeholder.png",
        specs: {
            "Type": "Neckband",
            "Design": "Retractable",
            "Battery": "18+ Hours",
            "Connectivity": "Bluetooth 5.0"
        }
    },

    // Power Banks
    {
        id: 8,
        name: "UBON Power Bank 10000mAh",
        model: "UB-PB-10K",
        category: "power-banks",
        price: 699,
        originalPrice: 1199,
        description: "Compact 10000mAh power bank with dual USB and Type-C output ports.",
        image: "assets/products/placeholder.png",
        specs: {
            "Capacity": "10000mAh",
            "Output": "Dual USB + Type-C",
            "Weight": "Lightweight",
            "Features": "LED Indicator"
        }
    },
    {
        id: 9,
        name: "UBON Power Bank 20000mAh Fast",
        model: "UB-PB-20K",
        category: "power-banks",
        price: 1199,
        originalPrice: 1999,
        description: "High-capacity 20000mAh power bank with 65W fast charging support.",
        image: "assets/products/placeholder.png",
        specs: {
            "Capacity": "20000mAh",
            "Output": "Multi-port",
            "Charging": "65W Fast",
            "Features": "LED Screen"
        }
    },

    // Speakers
    {
        id: 10,
        name: "UBON Speaker Portable Mini",
        model: "UB-SP-MN-100",
        category: "speakers",
        price: 599,
        originalPrice: 999,
        description: "Compact portable Bluetooth speaker with punchy bass and 12-hour battery.",
        image: "assets/products/placeholder.png",
        specs: {
            "Type": "Portable",
            "Power": "5W",
            "Battery": "12 Hours",
            "Range": "10 Meters"
        }
    },
    {
        id: 11,
        name: "UBON Speaker Wireless Mega Bass",
        model: "UB-SP-MB-250",
        category: "speakers",
        price: 1299,
        originalPrice: 2199,
        description: "Powerful wireless speaker with thundering bass and 20-hour battery life.",
        image: "assets/products/placeholder.png",
        specs: {
            "Type": "Wireless",
            "Power": "15W",
            "Bass": "Mega Bass",
            "Battery": "20 Hours"
        }
    },

    // Soundbars
    {
        id: 12,
        name: "UBON Soundbar Compact TV",
        model: "UB-SB-COMP-100",
        category: "soundbars",
        price: 2499,
        originalPrice: 4199,
        description: "Sleek soundbar designed for TV and home cinema with immersive sound.",
        image: "assets/products/placeholder.png",
        specs: {
            "Channels": "2.0",
            "Power": "20W",
            "Connectivity": "HDMI, Bluetooth",
            "Length": "Compact"
        }
    },

    // Data Cables
    {
        id: 13,
        name: "UBON USB Type-C Cable 1M",
        model: "UB-CB-TC-1M",
        category: "cables",
        price: 199,
        originalPrice: 349,
        description: "Durable Type-C cable with fast data transfer and charging capability.",
        image: "assets/products/placeholder.png",
        specs: {
            "Type": "USB Type-C",
            "Length": "1 Meter",
            "Speed": "Fast Charging",
            "Material": "Reinforced"
        }
    },
    {
        id: 14,
        name: "UBON Lightning Cable Premium",
        model: "UB-CB-LT-1M",
        category: "cables",
        price: 249,
        originalPrice: 449,
        description: "Premium Lightning cable for iPhones with certified compatibility.",
        image: "assets/products/placeholder.png",
        specs: {
            "Type": "Lightning",
            "Length": "1 Meter",
            "Certification": "MFi",
            "Material": "Nylon Braided"
        }
    },

    // Microphones
    {
        id: 15,
        name: "UBON Microphone Condenser USB",
        model: "UB-MIC-USB-100",
        category: "microphones",
        price: 999,
        originalPrice: 1699,
        description: "Professional USB condenser microphone for streaming and recording.",
        image: "assets/products/placeholder.png",
        specs: {
            "Type": "Condenser",
            "Connection": "USB",
            "Frequency": "20Hz-20kHz",
            "Features": "Cardioid Pattern"
        }
    },

    // Smartwatches
    {
        id: 16,
        name: "UBON Smartwatch Fitness Pro",
        model: "UB-SW-FIT-100",
        category: "smartwatches",
        price: 1999,
        originalPrice: 3499,
        description: "Feature-rich smartwatch with fitness tracking and heart rate monitor.",
        image: "assets/products/placeholder.png",
        specs: {
            "Display": "1.4 Inch AMOLED",
            "Features": "Fitness, HR Monitor",
            "Battery": "7 Days",
            "Connectivity": "Bluetooth 5.0"
        }
    },

    // Car Accessories
    {
        id: 17,
        name: "UBON Car Phone Mount Dashboard",
        model: "UB-CAR-MNT-DASH",
        category: "car-accessories",
        price: 299,
        originalPrice: 499,
        description: "Secure dashboard phone mount with 360-degree rotation.",
        image: "assets/products/placeholder.png",
        specs: {
            "Type": "Dashboard",
            "Rotation": "360 Degrees",
            "Grip": "Non-Slip",
            "Compatibility": "Universal"
        }
    },

    // Phone Holders
    {
        id: 18,
        name: "UBON Phone Holder Desktop Stand",
        model: "UB-HOLD-DESK",
        category: "phone-holders",
        price: 349,
        originalPrice: 599,
        description: "Adjustable desktop phone holder with anti-slip base.",
        image: "assets/products/placeholder.png",
        specs: {
            "Type": "Desktop",
            "Adjustment": "Multi-angle",
            "Material": "Aluminum",
            "Compatibility": "Universal"
        }
    },

    // Selfie Sticks
    {
        id: 19,
        name: "UBON Selfie Stick Portable Pro",
        model: "UB-SELF-PORT-PRO",
        category: "phone-holders",
        price: 499,
        originalPrice: 899,
        description: "Telescopic selfie stick with wireless remote and tripod stand.",
        image: "assets/products/placeholder.png",
        specs: {
            "Type": "Telescopic",
            "Extension": "20-80cm",
            "Remote": "Wireless",
            "Base": "Tripod Stand"
        }
    }
];

// Categories
const categories = [
    { id: "chargers", name: "Chargers", icon: "🔌" },
    { id: "earbuds", name: "Earbuds", icon: "🎧" },
    { id: "headphones", name: "Headphones", icon: "🎧" },
    { id: "neckbands", name: "Neckbands", icon: "🎧" },
    { id: "power-banks", name: "Power Banks", icon: "🔋" },
    { id: "speakers", name: "Speakers", icon: "🔊" },
    { id: "soundbars", name: "Soundbars", icon: "🔊" },
    { id: "cables", name: "Data Cables", icon: "🔗" },
    { id: "microphones", name: "Microphones", icon: "🎤" },
    { id: "smartwatches", name: "Smartwatches", icon: "⌚" },
    { id: "car-accessories", name: "Car Accessories", icon: "🚗" }
];

// Global State
let currentFilter = "all";
let currentSort = "featured";
let filteredProducts = [...productsDatabase];

// Initialize Products Grid
function initializeProductsGrid() {
    renderProducts(filteredProducts);
}

// Render Products
function renderProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    const noProducts = document.getElementById('noProducts');

    if (!productsGrid) return;

    if (products.length === 0) {
        productsGrid.innerHTML = '';
        if (noProducts) noProducts.style.display = 'block';
        return;
    }

    if (noProducts) noProducts.style.display = 'none';

    productsGrid.innerHTML = products.map((product, index) => `
        <div class="product-card stagger-${(index % 5) + 1}" data-product-id="${product.id}" role="listitem">
            <div class="product-image ${!product.image || product.image.includes('placeholder') ? 'placeholder' : ''}">
                <img 
                    src="${product.image}" 
                    alt="${product.name} - ${product.model}"
                    loading="lazy"
                    onerror="this.src='assets/products/placeholder.png'"
                >
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-model">Model: ${product.model}</p>
                <div class="product-price">
                    <span class="product-price-current">₹${product.price.toLocaleString('en-IN')}</span>
                    <span class="product-price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                </div>
                <div class="product-actions">
                    <button 
                        class="product-btn product-btn-primary" 
                        onclick="addToEnquiry(${product.id})"
                        aria-label="Add ${product.name} to enquiry bag"
                    >
                        Add to Enquiry
                    </button>
                    <button 
                        class="product-btn product-btn-secondary" 
                        onclick="viewProductDetail(${product.id})"
                        aria-label="View ${product.name} details"
                    >
                        View
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Get Category Name
function getCategoryName(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
}

// Filter Products
function filterProducts(category) {
    currentFilter = category;
    if (category === 'all') {
        filteredProducts = [...productsDatabase];
    } else {
        filteredProducts = productsDatabase.filter(p => p.category === category);
    }
    sortProducts();
    renderProducts(filteredProducts);
}

// Sort Products
function sortProducts() {
    const sortSelect = document.getElementById('sortSelect');
    const sortValue = sortSelect ? sortSelect.value : currentSort;
    currentSort = sortValue;

    switch (sortValue) {
        case 'name-asc':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'featured':
        default:
            filteredProducts.sort((a, b) => a.id - b.id);
    }

    renderProducts(filteredProducts);
}

// Search Products
function searchProducts(query) {
    if (!query.trim()) {
        filteredProducts = [...productsDatabase];
    } else {
        const lowerQuery = query.toLowerCase();
        filteredProducts = productsDatabase.filter(p =>
            p.name.toLowerCase().includes(lowerQuery) ||
            p.model.toLowerCase().includes(lowerQuery) ||
            getCategoryName(p.category).toLowerCase().includes(lowerQuery) ||
            p.description.toLowerCase().includes(lowerQuery)
        );
    }
    sortProducts();
    renderProducts(filteredProducts);
}

// Get Product by ID
function getProductById(id) {
    return productsDatabase.find(p => p.id === parseInt(id));
}

// View Product Detail
function viewProductDetail(id) {
    const product = getProductById(id);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const productDetail = document.getElementById('productDetail');

    if (!modal || !productDetail) return;

    let specsHTML = '';
    if (product.specs) {
        for (const [key, value] of Object.entries(product.specs)) {
            specsHTML += `
                <div class="spec">
                    <span class="spec-label">${key}</span>
                    <span class="spec-value">${value}</span>
                </div>
            `;
        }
    }

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    productDetail.innerHTML = `
        <div class="product-detail-image ${!product.image || product.image.includes('placeholder') ? 'placeholder' : ''}">
            <img 
                src="${product.image}" 
                alt="${product.name}"
                onerror="this.src='assets/products/placeholder.png'"
            >
        </div>
        <div class="product-detail-info">
            <div>
                <div class="product-detail-category">${getCategoryName(product.category)}</div>
                <h2 class="product-detail-name">${product.name}</h2>
                <p class="product-detail-model">Model: ${product.model}</p>
                <p class="product-detail-description">${product.description}</p>
            </div>
            
            <div>
                <div class="product-detail-price">
                    <div>
                        <div class="product-detail-price-label">Our Price</div>
                        <div class="product-detail-price-current">₹${product.price.toLocaleString('en-IN')}</div>
                    </div>
                    <div>
                        <div class="product-detail-price-label">MRP</div>
                        <div class="product-detail-price-original">₹${product.originalPrice.toLocaleString('en-IN')}</div>
                    </div>
                    <div>
                        <div class="product-detail-price-label">Save</div>
                        <div class="product-detail-price-current">${discount}%</div>
                    </div>
                </div>

                ${specsHTML ? `
                    <div class="product-detail-specs">
                        ${specsHTML}
                    </div>
                ` : ''}

                <div class="product-detail-actions">
                    <button 
                        class="btn btn-primary" 
                        onclick="addToEnquiry(${product.id}); closeProductModal()"
                    >
                        Add to Enquiry Bag
                    </button>
                    <a 
                        href="https://wa.me/919920765044?text=${encodeWhatsAppMessage(`Hi Bholenath Mobile! I'm interested in the ${product.name} (Model: ${product.model}). Price: ₹${product.price}. Please provide more details and confirm availability.`)}" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="btn btn-secondary"
                    >
                        Ask on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
}

// Close Product Modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }
}

// Encode WhatsApp Message
function encodeWhatsAppMessage(text) {
    return encodeURIComponent(text);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeProductsGrid();
});