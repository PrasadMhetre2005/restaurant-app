// Restaurant Data
const restaurantData = {
    name: "Prasad Pure Veg",
    tagline: "Authentic Indian Cuisine",
    rating: 4.8,
    location: "Jamkhed, Maharashtra",
    cuisine: "Indian",
    phone: "+91 9999-888-7777",
    hours: "11:00 AM - 11:00 PM",
    description: "Prasad Pure Veg serves authentic Indian cuisine with love and dedication. Every dish is prepared with fresh ingredients and traditional recipes passed down through generations.",
    
    // Menu Items
    menu: [
        {
            id: 1,
            name: "Veg Burger",
            price: 80,
            rating: 4.5,
            category: "appetizer",
            description: "Crispy vegetable patty with fresh lettuce and special sauce",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop"
        },
        {
            id: 2,
            name: "Masala Dosa",
            price: 90,
            rating: 4.7,
            category: "main",
            description: "Crispy rice crepe filled with spiced potato and served with sambar and chutney",
            image: "https://images.unsplash.com/photo-1668050326725-5d77ef51b79a?w=300&h=200&fit=crop"
        },
        {
            id: 3,
            name: "Paneer Butter Masala",
            price: 180,
            rating: 4.9,
            category: "main",
            description: "Tender paneer cubes in rich tomato and cream sauce with aromatic spices",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop"
        },
        {
            id: 4,
            name: "Veg Biryani",
            price: 150,
            rating: 4.6,
            category: "main",
            description: "Fragrant basmati rice cooked with mixed vegetables and traditional spices",
            image: "https://images.unsplash.com/photo-1631515243483-dfd41ef85d1d?w=300&h=200&fit=crop"
        },
        {
            id: 5,
            name: "Cold Coffee",
            price: 70,
            rating: 4.4,
            category: "beverage",
            description: "Chilled espresso blended with ice cream and milk for a perfect refreshment",
            image: "https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=300&h=200&fit=crop"
        },
        {
            id: 6,
            name: "Samosa (4pcs)",
            price: 40,
            rating: 4.3,
            category: "appetizer",
            description: "Golden fried triangles stuffed with spiced potatoes and peas",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop"
        },
        {
            id: 7,
            name: "Butter Naan",
            price: 35,
            rating: 4.8,
            category: "bread",
            description: "Soft, pillowy Indian bread brushed with ghee",
            image: "https://images.unsplash.com/photo-1565557623814-9f757fda7d25?w=300&h=200&fit=crop"
        },
        {
            id: 8,
            name: "Garlic Naan",
            price: 40,
            rating: 4.7,
            category: "bread",
            description: "Aromatic naan topped with fresh garlic and herbs",
            image: "https://images.unsplash.com/photo-1565557623814-9f757fda7d25?w=300&h=200&fit=crop"
        },
        {
            id: 9,
            name: "Gulab Jamun",
            price: 60,
            rating: 4.9,
            category: "dessert",
            description: "Soft milk solid dumplings soaked in fragrant sugar syrup",
            image: "https://images.unsplash.com/photo-1587318904521-cedb14b46798?w=300&h=200&fit=crop"
        },
        {
            id: 10,
            name: "Rasmalai",
            price: 80,
            rating: 4.8,
            category: "dessert",
            description: "Soft cottage cheese discs in sweetened cream with cardamom",
            image: "https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=300&h=200&fit=crop"
        },
        {
            id: 11,
            name: "Mango Lassi",
            price: 60,
            rating: 4.6,
            category: "beverage",
            description: "Refreshing yogurt-based drink with fresh mango pulp",
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=200&fit=crop"
        },
        {
            id: 12,
            name: "Aloo Gobi",
            price: 120,
            rating: 4.5,
            category: "main",
            description: "Potatoes and cauliflower cooked with aromatic spices",
            image: "https://images.unsplash.com/photo-1584599810694-b3fb3e670aca?w=300&h=200&fit=crop"
        }
    ],

    // Gallery Images
    gallery: [
        {
            id: 1,
            title: "Restaurant Ambiance",
            image: "https://images.unsplash.com/photo-1554118811-1e0d58224e24?w=400&h=300&fit=crop"
        },
        {
            id: 2,
            title: "Signature Biryani",
            image: "https://images.unsplash.com/photo-1631515243483-dfd41ef85d1d?w=400&h=300&fit=crop"
        },
        {
            id: 3,
            title: "Paneer Delicacies",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop"
        },
        {
            id: 4,
            title: "Fresh Breads",
            image: "https://images.unsplash.com/photo-1565557623814-9f757fda7d25?w=400&h=300&fit=crop"
        },
        {
            id: 5,
            title: "Dessert Collection",
            image: "https://images.unsplash.com/photo-1587318904521-cedb14b46798?w=400&h=300&fit=crop"
        },
        {
            id: 6,
            title: "Spice Selection",
            image: "https://images.unsplash.com/photo-1596040999627-f72b7e8bacd6?w=400&h=300&fit=crop"
        }
    ],

    // Special Offers
    offers: [
        {
            id: 1,
            title: "First Order Discount",
            description: "Get 20% off on your first order above ₹500",
            code: "WELCOME20",
            validity: "Valid till 31st December 2024"
        },
        {
            id: 2,
            title: "Friday Special",
            description: "Buy 1 Get 1 Free on selected appetizers every Friday",
            code: "FRI50",
            validity: "Every Friday"
        },
        {
            id: 3,
            title: "Friends & Family Deal",
            description: "Order for 4 people and get 15% discount on total bill",
            code: "FRIENDS15",
            validity: "Valid all week"
        },
        {
            id: 4,
            title: "Monsoon Special",
            description: "Free dessert on orders above ₹1000",
            code: "MONSOON",
            validity: "Valid during monsoon"
        }
    ],

    // Customer Reviews
    reviews: [
        {
            id: 1,
            name: "Rahul Kumar",
            avatar: "R",
            rating: 5,
            title: "Amazing food and service!",
            text: "The Paneer Butter Masala was absolutely delicious. The staff was very friendly and attentive. Will definitely come back!",
            date: "2024-12-10"
        },
        {
            id: 2,
            name: "Priya Singh",
            avatar: "P",
            rating: 5,
            title: "Best biryani in town",
            text: "The Veg Biryani is perfectly cooked with authentic flavors. Fresh ingredients and great presentation. Highly recommended!",
            date: "2024-12-08"
        },
        {
            id: 3,
            name: "Amit Patel",
            avatar: "A",
            rating: 4,
            title: "Good food, reasonable prices",
            text: "Food quality is consistent and prices are fair. The dosa was crispy and fresh. A bit crowded on weekends though.",
            date: "2024-12-05"
        },
        {
            id: 4,
            name: "Sneha Gupta",
            avatar: "S",
            rating: 5,
            title: "Perfect for family gatherings",
            text: "The ambiance is great for family meetings. Tried multiple dishes and all were excellent. Will book table for my birthday!",
            date: "2024-12-02"
        },
        {
            id: 5,
            name: "Vikram Sharma",
            avatar: "V",
            rating: 4,
            title: "Tasty and authentic",
            text: "The food tastes like home-cooked meals. The Aloo Gobi was perfectly spiced. Worth visiting at least once!",
            date: "2024-11-28"
        },
        {
            id: 6,
            name: "Neha Desai",
            avatar: "N",
            rating: 5,
            title: "Love the samosas!",
            text: "The samosas are addictive! Golden, crispy and perfectly filled. Ordered 3 times this month already. Worth the visit!",
            date: "2024-11-25"
        }
    ]
};
