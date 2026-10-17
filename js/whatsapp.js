// ============================================
// BHOLENATH MOBILE - WHATSAPP INTEGRATION
// ============================================

const WHATSAPP_NUMBER = '919920765044';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// Enquiry Bag
let enquiryBag = [];

// Load enquiry bag from localStorage
function loadEnquiryBag() {
    try {
        const saved = localStorage.getItem('bholenath-enquiry-bag');
        if (saved) {
            enquiryBag = JSON.parse(saved);
        }
    } catch (e) {
        console.error('Error loading enquiry bag:', e);
        enquiryBag = [];
    }
    updateCartCount();
}

// Save enquiry bag to localStorage
function saveEnquiryBag() {
    try {
        localStorage.setItem('bholenath-enquiry-bag', JSON.stringify(enquiryBag));
    } catch (e) {
        console.error('Error saving enquiry bag:', e);
    }
    updateCartCount();
}

// Add to Enquiry Bag
function addToEnquiry(productId) {
    const product = getProductById(productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // Check if product already exists
    const existingItem = enquiryBag.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        enquiryBag.push({
            id: product.id,
            name: product.name,
            model: product.model,
            price: product.price,
            quantity: 1
        });
    }

    saveEnquiryBag();
    showNotification(`✓ ${product.name} added to enquiry bag!`);
}

// Remove from Enquiry Bag
function removeFromEnquiry(productId) {
    enquiryBag = enquiryBag.filter(item => item.id !== productId);
    saveEnquiryBag();
    renderBagItems();
}

// Update Quantity
function updateQuantity(productId, quantity) {
    const item = enquiryBag.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, Math.min(quantity, 99));
        saveEnquiryBag();
        renderBagItems();
    }
}

// Render Bag Items
function renderBagItems() {
    const bagItems = document.getElementById('bagItems');
    const bagEmpty = document.getElementById('bagEmpty');

    if (!bagItems || !bagEmpty) return;

    if (enquiryBag.length === 0) {
        bagItems.innerHTML = '';
        bagEmpty.style.display = 'block';
        return;
    }

    bagEmpty.style.display = 'none';

    let total = 0;
    let html = '';

    enquiryBag.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        html += `
            <div class="bag-item" data-item-id="${item.id}">
                <div class="bag-item-info">
                    <div class="bag-item-name">${item.name}</div>
                    <div class="bag-item-model">Model: ${item.model}</div>
                    <div class="bag-item-price">₹${item.price.toLocaleString('en-IN')} each</div>
                </div>
                <div class="bag-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})" aria-label="Decrease quantity">−</button>
                    <div class="quantity-value">${item.quantity}</div>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})" aria-label="Increase quantity">+</button>
                </div>
                <button class="bag-item-remove" onclick="removeFromEnquiry(${item.id})" aria-label="Remove ${item.name}">Remove</button>
            </div>
        `;
    });

    bagItems.innerHTML = html;

    // Add total
    const totalElement = document.createElement('div');
    totalElement.className = 'bag-total';
    totalElement.innerHTML = `
        <span class="bag-total-label">Estimated Total:</span>
        <span class="bag-total-value">₹${total.toLocaleString('en-IN')}</span>
    `;
    bagItems.appendChild(totalElement);
}

// Generate WhatsApp Message - FIXED
function generateWhatsAppMessage() {
    if (enquiryBag.length === 0) {
        showNotification('Your enquiry bag is empty!');
        return '';
    }

    let message = '🛍️ *Bholenath Mobile - Product Enquiry*\n\n';
    message += 'I am interested in the following products:\n\n';

    let total = 0;
    enquiryBag.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        message += `${index + 1}. *${item.name}*\n`;
        message += `   Model: ${item.model}\n`;
        message += `   Price: ₹${item.price.toLocaleString('en-IN')} × ${item.quantity}\n`;
        message += `   Subtotal: ₹${itemTotal.toLocaleString('en-IN')}\n\n`;
    });

    message += `*Estimated Total: ₹${total.toLocaleString('en-IN')}*\n\n`;
    message += 'Please confirm availability and provide more details.\n';
    message += 'Thank you!';

    return message;
}

// Send WhatsApp Message - TESTED
function sendWhatsAppMessage() {
    const message = generateWhatsAppMessage();
    if (message) {
        try {
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `${WHATSAPP_URL}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');

            // Clear bag after sending
            setTimeout(() => {
                enquiryBag = [];
                saveEnquiryBag();
                renderBagItems();
                closeEnquiryBag();
            }, 500);
        } catch (e) {
            console.error('Error sending WhatsApp message:', e);
            showNotification('Error opening WhatsApp. Please try again.');
        }
    }
}

// Open Enquiry Bag
function openEnquiryBag() {
    const modal = document.getElementById('bagModal');
    if (modal) {
        renderBagItems();
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    }
}

// Close Enquiry Bag
function closeEnquiryBag() {
    const modal = document.getElementById('bagModal');
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }
}

// Clear Enquiry Bag
function clearEnquiryBag() {
    if (enquiryBag.length === 0) return;
    
    if (confirm('Are you sure you want to clear the entire enquiry bag? This cannot be undone.')) {
        enquiryBag = [];
        saveEnquiryBag();
        renderBagItems();
        showNotification('Enquiry bag cleared');
    }
}

// Update Cart Count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const count = enquiryBag.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = count;
    }
}

// Show Notification - IMPROVED
function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #6b7a5e;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 2000;
        animation: slideInRight 0.3s ease;
        font-size: 14px;
        font-weight: 500;
        max-width: 300px;
        word-wrap: break-word;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadEnquiryBag();

    // Cart Icon Click
    const cartIcon = document.getElementById('cartIcon');
    if (cartIcon) {
        cartIcon.addEventListener('click', openEnquiryBag);
    }

    // Bag Modal Close
    const bagClose = document.getElementById('bagClose');
    if (bagClose) {
        bagClose.addEventListener('click', closeEnquiryBag);
    }

    // Bag Clear Button
    const bagClear = document.getElementById('bagClear');
    if (bagClear) {
        bagClear.addEventListener('click', clearEnquiryBag);
    }

    // Bag WhatsApp Button
    const bagWhatsApp = document.getElementById('bagWhatsApp');
    if (bagWhatsApp) {
        bagWhatsApp.addEventListener('click', (e) => {
            e.preventDefault();
            sendWhatsAppMessage();
        });
    }

    // Close modal when clicking outside
    const bagModal = document.getElementById('bagModal');
    if (bagModal) {
        bagModal.addEventListener('click', (e) => {
            if (e.target === bagModal) {
                closeEnquiryBag();
            }
        });
    }
});