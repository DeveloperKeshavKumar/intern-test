const mongoose = require('mongoose');

const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/ecomm';
mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    });

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = { User, Product };