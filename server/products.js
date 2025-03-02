const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Product } = require('./models'); // Ensure the Product model is correctly exported

dotenv.config();

const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/ecomm';

const products = [
    {
        id: 1,
        name: 'iPhone 16',
        description: 'The latest iPhone',
        price: 1000,
        category: 'electronics'
    },
    {
        id: 2,
        name: 'Samsung Galaxy 10',
        description: 'The latest Samsung',
        price: 900,
        category: 'electronics'
    },
    {
        id: 3,
        name: 'Google Pixel 4',
        description: 'The latest Google Pixel',
        price: 800,
        category: 'electronics'
    },
    {
        id: 4,
        name: 'OnePlus 7T',
        description: 'The latest OnePlus',
        price: 700,
        category: 'electronics'
    },
    {
        id: 5,
        name: 'T-Shirt',
        description: 'A comfortable cotton t-shirt',
        price: 20,
        category: 'clothes'
    },
    {
        id: 6,
        name: 'Jeans',
        description: 'Stylish blue jeans',
        price: 50,
        category: 'clothes'
    },
    {
        id: 7,
        name: 'Laptop',
        description: 'A powerful laptop for work and play',
        price: 1200,
        category: 'electronics'
    },
    {
        id: 8,
        name: 'Headphones',
        description: 'Noise-cancelling over-ear headphones',
        price: 200,
        category: 'electronics'
    },
    {
        id: 9,
        name: 'Action Figure',
        description: 'A popular superhero action figure',
        price: 25,
        category: 'toys'
    },
    {
        id: 10,
        name: 'Board Game',
        description: 'A fun and engaging board game for all ages',
        price: 30,
        category: 'toys'
    },
    {
        id: 11,
        name: 'Smartwatch',
        description: 'A smartwatch with various health tracking features',
        price: 250,
        category: 'electronics'
    },
    {
        id: 12,
        name: 'Tablet',
        description: 'A high-resolution tablet for work and entertainment',
        price: 600,
        category: 'electronics'
    },
    {
        id: 13,
        name: 'Bluetooth Speaker',
        description: 'A portable Bluetooth speaker with excellent sound quality',
        price: 100,
        category: 'electronics'
    },
    {
        id: 14,
        name: 'Camera',
        description: 'A digital camera with high resolution and zoom capabilities',
        price: 800,
        category: 'electronics'
    },
    {
        id: 15,
        name: 'Sneakers',
        description: 'Comfortable and stylish sneakers for everyday wear',
        price: 70,
        category: 'clothes'
    },
    {
        id: 16,
        name: 'Jacket',
        description: 'A warm and fashionable jacket for winter',
        price: 120,
        category: 'clothes'
    },
    {
        id: 17,
        name: 'Dress',
        description: 'A beautiful dress for special occasions',
        price: 90,
        category: 'clothes'
    },
    {
        id: 18,
        name: 'Hat',
        description: 'A stylish hat for sunny days',
        price: 25,
        category: 'clothes'
    },
    {
        id: 19,
        name: 'Toy Car',
        description: 'A remote-controlled toy car',
        price: 40,
        category: 'toys'
    },
    {
        id: 20,
        name: 'Doll',
        description: 'A beautiful doll with accessories',
        price: 35,
        category: 'toys'
    },
    {
        id: 21,
        name: 'Puzzle',
        description: 'A challenging and fun puzzle for all ages',
        price: 15,
        category: 'toys'
    },
    {
        id: 22,
        name: 'Building Blocks',
        description: 'A set of building blocks for creative play',
        price: 45,
        category: 'toys'
    },
    {
        id: 23,
        name: 'Smart TV',
        description: 'A smart TV with 4K resolution and streaming capabilities',
        price: 1500,
        category: 'electronics'
    },
    {
        id: 24,
        name: 'Gaming Console',
        description: 'A popular gaming console with multiple games',
        price: 500,
        category: 'electronics'
    },
    {
        id: 25,
        name: 'Fitness Tracker',
        description: 'A fitness tracker to monitor your daily activities',
        price: 100,
        category: 'electronics'
    },
    {
        id: 26,
        name: 'Microwave Oven',
        description: 'A microwave oven with multiple cooking functions',
        price: 150,
        category: 'electronics'
    },
    {
        id: 27,
        name: 'Blender',
        description: 'A powerful blender for smoothies and shakes',
        price: 80,
        category: 'electronics'
    },
    {
        id: 28,
        name: 'Coffee Maker',
        description: 'A coffee maker for brewing fresh coffee',
        price: 60,
        category: 'electronics'
    },
    {
        id: 29,
        name: 'Vacuum Cleaner',
        description: 'A vacuum cleaner with strong suction power',
        price: 200,
        category: 'electronics'
    },
    {
        id: 30,
        name: 'Air Purifier',
        description: 'An air purifier to keep your home air clean',
        price: 300,
        category: 'electronics'
    },
    {
        id: 31,
        name: 'Washing Machine',
        description: 'A washing machine with multiple wash programs',
        price: 700,
        category: 'electronics'
    },
    {
        id: 32,
        name: 'Refrigerator',
        description: 'A refrigerator with large storage capacity',
        price: 1200,
        category: 'electronics'
    },
    {
        id: 33,
        name: 'Oven',
        description: 'A convection oven for baking and roasting',
        price: 400,
        category: 'electronics'
    },
    {
        id: 34,
        name: 'Dishwasher',
        description: 'A dishwasher with multiple wash cycles',
        price: 600,
        category: 'electronics'
    },
    {
        id: 35,
        name: 'Air Conditioner',
        description: 'An air conditioner to keep your home cool',
        price: 1000,
        category: 'electronics'
    },
    {
        id: 36,
        name: 'Heater',
        description: 'A heater to keep your home warm',
        price: 150,
        category: 'electronics'
    },
    {
        id: 37,
        name: 'Fan',
        description: 'A ceiling fan with remote control',
        price: 100,
        category: 'electronics'
    },
    {
        id: 38,
        name: 'Iron',
        description: 'A steam iron for wrinkle-free clothes',
        price: 50,
        category: 'electronics'
    },
    {
        id: 39,
        name: 'Hair Dryer',
        description: 'A hair dryer with multiple heat settings',
        price: 40,
        category: 'electronics'
    },
    {
        id: 40,
        name: 'Electric Kettle',
        description: 'An electric kettle for boiling water',
        price: 30,
        category: 'electronics'
    },
    {
        id: 41,
        name: 'Rice Cooker',
        description: 'A rice cooker with multiple cooking functions',
        price: 70,
        category: 'electronics'
    },
    {
        id: 42,
        name: 'Toaster',
        description: 'A toaster with multiple browning settings',
        price: 25,
        category: 'electronics'
    },
    {
        id: 43,
        name: 'Mixer',
        description: 'A stand mixer for baking and cooking',
        price: 150,
        category: 'electronics'
    },
    {
        id: 44,
        name: 'Grill',
        description: 'An electric grill for indoor grilling',
        price: 100,
        category: 'electronics'
    },
    {
        id: 45,
        name: 'Slow Cooker',
        description: 'A slow cooker for easy meal preparation',
        price: 60,
        category: 'electronics'
    },
    {
        id: 46,
        name: 'Pressure Cooker',
        description: 'A pressure cooker for fast cooking',
        price: 80,
        category: 'electronics'
    },
    {
        id: 47,
        name: 'Deep Fryer',
        description: 'A deep fryer for crispy fried foods',
        price: 70,
        category: 'electronics'
    },
    {
        id: 48,
        name: 'Bread Maker',
        description: 'A bread maker for fresh homemade bread',
        price: 100,
        category: 'electronics'
    },
    {
        id: 49,
        name: 'Juicer',
        description: 'A juicer for fresh fruit and vegetable juices',
        price: 90,
        category: 'electronics'
    },
    {
        id: 50,
        name: 'Food Processor',
        description: 'A food processor for chopping and slicing',
        price: 120,
        category: 'electronics'
    }
];

const insertProducts = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(dbURI);
        console.log('Connected to MongoDB');

        // Insert all products into the Product collection
        await Product.insertMany(products);
        console.log('Products added successfully');

        // Close the MongoDB connection
        mongoose.connection.close();
    } catch (error) {
        console.error('Error inserting products:', error);
        mongoose.connection.close();
    }
};

insertProducts();
