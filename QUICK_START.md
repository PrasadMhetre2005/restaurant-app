# 🚀 RestaurantHub Quick Start Guide

## 5-Minute Setup

### Step 1: Open the Website
1. Navigate to the `restaurant-app` folder
2. Right-click on `index.html`
3. Select "Open with" → Your favorite browser
4. **That's it! The website is live! 🎉**

### Step 2: Explore Features

**Try these interactive features:**
- 🔍 **Search**: Type a dish name in the search box
- 🎯 **Filter**: Click menu category buttons (Appetizers, Main, Bread, etc.)
- 🛒 **Cart**: Click the shopping cart icon and add items
- ❤️ **Favorites**: Click heart icon on menu items
- 🌙 **Dark Mode**: Click moon icon in navigation
- 🪑 **Booking**: Scroll down and fill the booking form
- 📊 **Reviews**: See customer reviews and ratings

### Step 3: Customize for Your Restaurant

**Edit `src/data.js` to change:**
- Restaurant name
- Cuisine type
- Menu items
- Prices
- Reviews
- Offers
- Gallery images

**Example:**
```javascript
const restaurantData = {
    name: "Your Restaurant Name",
    tagline: "Your tagline",
    rating: 4.8,
    location: "Your City",
    cuisine: "Your Cuisine",
    // ... more fields
};
```

### Step 4: Deploy (Choose One)

#### Option A: Vercel (Easiest - FREE)
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push origin main

# 2. Go to vercel.com
# 3. Click "New Project" → Select your GitHub repo
# 4. Click "Deploy"
# Done! Your site is live! 🌐
```

#### Option B: Netlify (Also FREE)
1. Go to netlify.com
2. Drag & drop your `restaurant-app` folder
3. Click "Deploy"
4. Your site is live! 🌐

#### Option C: GitHub Pages (FREE)
1. Push to GitHub
2. Go to Settings → Pages
3. Select "main" branch
4. Your site is live at `username.github.io/restaurant-app` 🌐

## 📂 What You Get

```
✅ Fully functional restaurant website
✅ Mobile responsive design
✅ Dark/Light mode
✅ Shopping cart with persistent storage
✅ Table booking system
✅ Menu search and filtering
✅ Customer reviews section
✅ Animated counters and effects
✅ Professional layout
✅ Zero dependencies - pure HTML/CSS/JS
✅ Ready to deploy
```

## 🎨 Customization Tips

### Change Colors
Edit `src/style.css`:
```css
:root {
    --primary-color: #ff6b35;      /* Change this color */
    --secondary-color: #f7931e;    /* And this one */
}
```

### Update Menu Items
Edit `src/data.js` - add/remove items from the `menu` array:
```javascript
{
    id: 6,
    name: "Masala Dosa",
    price: 90,
    rating: 4.7,
    category: "main",
    description: "Crispy rice crepe with spiced potato",
    image: "https://image-url.jpg"
}
```

### Add Gallery Images
Update the `gallery` array with image URLs:
```javascript
{
    id: 1,
    title: "Restaurant Ambiance",
    image: "https://your-image-url.jpg"
}
```

## 🔧 Using Local Server (Recommended)

If opening `index.html` directly doesn't work smoothly:

### Python 3:
```bash
cd restaurant-app
python -m http.server 8000
# Visit http://localhost:8000
```

### Node.js:
```bash
cd restaurant-app
npx http-server
# Visit http://localhost:8080
```

### VS Code:
- Install "Live Server" extension
- Right-click `index.html`
- Select "Open with Live Server"

## 📱 Test on Mobile

1. **Using your computer:**
   - Open DevTools (F12)
   - Click device toolbar icon
   - Select mobile device size

2. **Using your phone:**
   - Find your computer's IP address (ipconfig on Windows, ifconfig on Mac/Linux)
   - On phone, visit: `http://your-computer-ip:8000`
   - Test all features on actual mobile!

## ✨ Features Showcase

### 1. Menu Filtering
- Click category buttons to filter menu
- Search box finds dishes in real-time
- Both work together!

### 2. Shopping Cart
- Click "Add" buttons to add items
- Cart persists when you refresh the page
- Click cart icon to checkout

### 3. Dark Mode
- Click moon icon to toggle
- Your preference is saved
- Loads automatically next time!

### 4. Table Booking
- Fill in your details
- Select date, time, guests
- Add special requests
- Submit to book!

### 5. Favorites
- Click heart on menu items
- Saved items show with filled hearts
- Favorites persist across sessions

## 🎯 Next Steps

1. **Customize data** → Edit `src/data.js`
2. **Add your images** → Update image URLs
3. **Test everything** → Try all features
4. **Deploy** → Push to Vercel/Netlify
5. **Share** → Send link to anyone worldwide!

## 📞 Restaurant Info (Demo)

- **Name**: Prasad Pure Veg
- **Cuisine**: Indian
- **Location**: Jamkhed, Maharashtra
- **Rating**: 4.8/5
- **Hours**: 11:00 AM - 11:00 PM
- **Phone**: +91 9999-888-7777

*(Change this in `src/data.js` to your restaurant's info)*

## 🐛 Common Issues

**Issue**: Images not showing
- **Solution**: Use valid image URLs from Unsplash or other image hosts

**Issue**: Dark mode not saving
- **Solution**: Make sure JavaScript is enabled in browser

**Issue**: Cart items disappear
- **Solution**: Clear browser cache, or localStorage might be disabled

**Issue**: Website looks broken
- **Solution**: Check browser console (F12) for JavaScript errors

## 🎓 What You've Learned

This project teaches:
- Modern HTML5
- Advanced CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- DOM manipulation
- LocalStorage API
- Responsive design
- Mobile-first approach
- State management

## 🏆 You're All Set!

You now have a professional restaurant website ready to deploy! 🚀

Questions? Check the README.md for detailed information.

---

**Happy coding! 🎉**
