# CloudKitchen - Online Food Ordering Website

## 📱 Project Overview

CloudKitchen is a fully responsive, modern web-based food ordering platform built with pure HTML5, CSS3, and JavaScript. It provides an attractive user interface with an interactive food menu, featured dishes section, and customer contact form.

## ✨ Features

### 1. **Responsive Design**
   - Mobile-first approach
   - Works seamlessly on desktop, tablet, and mobile devices
   - Hamburger menu for mobile navigation

### 2. **Interactive Navigation**
   - Sticky navigation bar with smooth scrolling
   - Mobile-responsive hamburger menu
   - Quick links to different sections

### 3. **Featured Dishes Section**
   - Highlight premium dishes
   - Display price and rating
   - Add to cart functionality
   - Eye-catching gradient backgrounds

### 4. **Dynamic Menu System**
   - Filter menu by categories (Biryanis, Curries, Tandoori, Desserts)
   - View all dishes
   - Display food items with emojis, prices, and descriptions
   - Add items to shopping cart

### 5. **Contact Form**
   - User-friendly contact section
   - Form validation
   - Success notifications
   - Contact information display

### 6. **Shopping Cart**
   - Local storage integration
   - Add items to cart
   - Persistent cart data
   - Success notifications on adding items

### 7. **Modern UI Elements**
   - Gradient color schemes
   - Smooth animations and transitions
   - Hover effects on cards
   - Professional typography

## 📁 File Structure

```
Cloud-Kitchen-Website/
├── index.html      # Main HTML file
├── styles.css      # Styling and responsive design
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or additional dependencies required

### How to Use

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/Rameswar555/Cloud-Kitchen-Website.git
   cd Cloud-Kitchen-Website
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     ```
   - Then visit `http://localhost:8000`

## 📖 Section Details

### Navigation Bar
- Sticky header with CloudKitchen branding
- Quick navigation links
- Responsive hamburger menu
- Purple gradient background

### Hero Section
- Welcome message
- Call-to-action button
- Large, eye-catching design
- Gradient background

### Featured Dishes
- Showcases popular items
- Displays price and ratings
- Add to cart buttons
- Hover animations

### Menu Section
- Category filter buttons
- 12 sample menu items
- Dynamic filtering
- Grid layout that adjusts to screen size

### Contact Section
- Business information (address, phone, email, hours)
- Contact form with validation
- Success notifications
- Responsive two-column layout

### Footer
- Company information
- Quick links
- Social media links
- Copyright information

## 🎨 Color Scheme

- **Primary Purple**: #667eea
- **Secondary Purple**: #764ba2
- **Accent Pink**: #f5576c
- **Light Gray**: #f8f9fa
- **Dark Gray**: #333
- **Text Gray**: #666

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ⚙️ JavaScript Features

### Core Functions
- `displayMenuItems()` - Renders menu items to the page
- `filterMenuItems()` - Filters menu by category
- `addToCart()` - Adds items to localStorage cart
- `showNotification()` - Displays user feedback
- `setupContactForm()` - Handles form submission
- `setupMobileMenu()` - Mobile navigation functionality
- `setupSmoothScrolling()` - Smooth scroll on anchor clicks

### Data Management
- Menu data stored in JavaScript array
- Shopping cart stored in localStorage
- Persistent data across sessions

## 🎯 Menu Categories

1. **Biryanis** - Aromatic rice dishes
2. **Curries** - Gravies and curries
3. **Tandoori** - Grilled specialties
4. **Desserts** - Sweet treats

## 🔄 Add to Cart Flow

1. User clicks "Add to Cart" button
2. Item is added to localStorage
3. Success notification appears
4. Item quantity increases if already in cart
5. Cart data persists on page reload

## 🌐 Browser Compatibility

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile Browsers

## 📝 Customization Guide

### Change Colors
Edit the color variables in `styles.css`:
```css
/* Change primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add Menu Items
Edit the `menuData` array in `script.js`:
```javascript
const menuData = [
    {
        id: 1,
        name: 'Your Dish Name',
        category: 'category',
        price: 299,
        emoji: '🍽️',
        description: 'Dish description'
    }
];
```

### Update Business Info
Edit contact details in the "Contact Section" of `index.html`

## 🚀 Future Enhancements

- Payment gateway integration (Razorpay, Stripe)
- Order tracking system
- User authentication and login
- Admin dashboard
- Real-time order notifications
- Rating and review system
- Coupon and discount codes
- Multiple restaurant support
- API integration for real menu data

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Rameswar555**
- GitHub: [Rameswar555](https://github.com/Rameswar555)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or feedback about this project, please feel free to reach out.

---

**Enjoy your CloudKitchen experience!** ☁️🍽️
