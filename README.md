# 🍽️ RestaurantHub - Restaurant Discovery Website

A modern, fully responsive restaurant discovery website built with **HTML5, CSS3, and JavaScript** featuring **Prasad Pure Veg** - an authentic Indian restaurant.

## 🌟 Features

### ✨ Core Features
- 🏨 **Restaurant Profile Page** - Complete restaurant information with ratings and reviews
- ⭐ **Dynamic Ratings & Reviews** - Real customer reviews with star ratings
- 🍕 **Interactive Menu Cards** - Beautiful menu display with images, prices, and ratings
- 🔍 **Search Menu Items** - Real-time search functionality to find dishes instantly
- 🎁 **Special Offers Section** - Current promotions and discount codes
- 📸 **Food Image Gallery** - Photo gallery showcasing restaurant dishes
- 🪑 **Table Booking Form** - Complete booking system with date/time/guests selection
- ❤️ **Favorite Restaurants** - Add items to favorites (stored in localStorage)
- 🌙 **Dark/Light Mode** - Toggle theme with persistent storage
- 📱 **Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop
- 📍 **Google Maps Location** - Integrated map showing restaurant location
- 📊 **Rating Statistics** - Visual rating breakdown with animated counters
- 🛒 **Shopping Cart** - Add items to cart with quantity management
- 🔄 **Dynamic Data from JSON** - All content loaded from structured data

### 🎨 UI Sections
- **Hero Section** - Large banner with restaurant name, rating, and action buttons
- **Statistics** - Animated counters showing customers, rating, menu items, staff
- **Menu Section** - Filterable menu with search, categories, and add to cart
- **Gallery** - Image gallery with hover effects
- **Offers** - Special promotional offers with discount codes
- **Reviews** - Customer reviews with rating statistics
- **Booking** - Complete table reservation form
- **Location** - Google Maps embed
- **Footer** - Social links and restaurant information

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

### Running Locally

1. **Extract/Clone the project**
```bash
cd restaurant-app
```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):

Using Python 3:
```bash
python -m http.server 8000
```

Using Node.js:
```bash
npx http-server
```

Using VS Code Live Server Extension:
- Right-click `index.html` → "Open with Live Server"

3. **Access the website**
   - Navigate to `http://localhost:8000` (or the port shown in terminal)
   - The website will be fully functional!

## 📁 Project Structure

```
restaurant-app/
│
├── public/
│   └── images/          # Place custom images here
│
├── src/
│   ├── style.css        # All CSS styling (responsive + dark mode)
│   ├── script.js        # All JavaScript functionality
│   └── data.js          # Restaurant data (menu, reviews, offers, gallery)
│
├── index.html           # Main HTML file
└── README.md            # This file
```

## 🎯 Features Explained

### Menu Management
- **Filter by Category**: All, Appetizers, Main Course, Breads, Beverages, Desserts
- **Real-time Search**: Type to find dishes instantly
- **Add to Cart**: Click "Add" button to add items to shopping cart
- **Favorites**: Heart icon to save favorite dishes

### Dark Mode
- Click moon icon in navbar to toggle dark mode
- Preference is saved in browser's localStorage
- Automatically loads on next visit

### Shopping Cart
- Click cart icon to view items
- Adjust quantity with +/- buttons
- Remove items with "Remove" button
- Cart data persists across page refreshes

### Table Booking
- Fill form with name, email, phone, date, time, number of guests
- Add special requests and occasion
- Submit to book table (confirmation saved locally)
- Restaurant contact info displayed alongside

### Reviews & Ratings
- View all customer reviews with ratings
- Rating breakdown chart shows distribution
- Overall 4.8/5 rating with 234 reviews

### Gallery & Offers
- Beautiful image gallery with hover effects
- Special offers with discount codes to copy
- All offers include validity information

## 🎨 Customization

### Change Restaurant Data
Edit `src/data.js`:

```javascript
const restaurantData = {
    name: "Your Restaurant Name",
    tagline: "Your tagline here",
    rating: 4.8,
    location: "Your location",
    cuisine: "Your cuisine type",
    // ... rest of data
};
```

### Add/Remove Menu Items
Update the `menu` array in `src/data.js`:

```javascript
{
    id: 13,
    name: "Dish Name",
    price: 100,
    rating: 4.5,
    category: "main",
    description: "Description here",
    image: "image-url"
}
```

### Change Colors
Edit CSS variables in `src/style.css`:

```css
:root {
    --primary-color: #ff6b35;      /* Orange */
    --secondary-color: #f7931e;    /* Yellow */
    --text-dark: #2d3436;          /* Dark text */
    /* ... other colors */
}
```

### Update Gallery Images
Edit the `gallery` array in `src/data.js` with your image URLs

### Add/Edit Reviews
Update the `reviews` array in `src/data.js`

### Change Offers
Update the `offers` array in `src/data.js`

## 📱 Responsive Breakpoints

The website is optimized for:
- **Desktop**: 1200px and above (full layout)
- **Tablet**: 768px to 1200px (2-column grid)
- **Mobile**: Below 768px (1-column layout)
- **Small Mobile**: Below 600px (optimized for small screens)
- **Extra Small**: Below 400px (minimal layout)

## 🌐 Deployment

### Deploy to Vercel (Recommended - Free!)

1. **Push code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Select your repository
   - Vercel auto-detects it's a static site
   - Click "Deploy"

3. **Your site is live!**
   - Get a URL like: `https://restaurant-hub-abc123.vercel.app`
   - Share with anyone worldwide!

### Deploy to Netlify (Also Free!)

1. **Push code to GitHub** (same as above)

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub repository
   - Build command: (leave empty - static site)
   - Publish directory: . (root)
   - Click "Deploy site"

3. **Your site is live!**

### Deploy to GitHub Pages (Free!)

1. **Push code to GitHub**
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch
5. Click Save
6. Your site will be at: `https://username.github.io/restaurant-app`

## 🔧 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 📊 Performance

- **No dependencies** - Pure HTML/CSS/JavaScript
- **Fast loading** - Lightweight and optimized
- **SEO friendly** - Proper semantic HTML
- **Accessible** - WCAG compliant
- **Mobile optimized** - Fully responsive

## 💾 Local Storage

The website uses browser localStorage for:
- 🌙 **Theme preference** (dark/light mode)
- 🛒 **Shopping cart** (persists across sessions)
- ❤️ **Favorites** (saved items)
- 🪑 **Bookings** (table reservations)

All data stays on your device - no server needed!

## 🎓 Learning Resources

This project demonstrates:
- ✅ Modern HTML5 semantic markup
- ✅ Advanced CSS3 (Grid, Flexbox, Animations)
- ✅ Vanilla JavaScript (ES6+)
- ✅ DOM manipulation and events
- ✅ LocalStorage API
- ✅ Responsive design patterns
- ✅ Mobile-first approach
- ✅ Intersection Observer API
- ✅ Filter and search functionality
- ✅ State management (cart, favorites)

## 🐛 Troubleshooting

### Images not loading?
- Check image URLs are accessible
- Use direct URLs from image hosts (Unsplash, Pexels, etc.)
- Or save images in `public/images/` folder

### Dark mode not persisting?
- Check if localStorage is enabled in browser
- Clear browser cache and try again

### Cart not showing items?
- Open browser DevTools (F12)
- Check Console for errors
- Verify localStorage is working

### Menu search not working?
- Check if `data.js` is loaded before `script.js`
- Open DevTools Console to see errors

## 🚀 Future Enhancements

Potential features to add:
- Online ordering system
- Payment integration (Stripe, Razorpay)
- User authentication
- Ratings submission form
- Admin panel
- Real API integration
- Email notifications
- Push notifications
- PWA (Progressive Web App)
- Multi-language support
- Customer loyalty program

## 📄 License

This project is open source and free to use for personal and commercial purposes.

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 💬 Support

For issues or questions:
1. Check this README
2. Review the code comments
3. Check browser DevTools console for errors
4. Try clearing cache and localStorage

## 🎉 Enjoy!

You now have a professional, fully functional restaurant discovery website!

**Next Steps:**
1. ✅ Customize with your restaurant data
2. ✅ Add your own images
3. ✅ Deploy to Vercel/Netlify
4. ✅ Share the URL with the world!

---

**Built with ❤️ using HTML5, CSS3, and JavaScript**

Last Updated: June 2024
