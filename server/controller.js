const { User, Product } = require('./models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require("express-validator");

// User Registration Controller
const registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        next(err);
    }
};

// User Login Controller
const loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        next(err);
    }
};

// Get All Products Controller
const getProducts = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { page = 1, limit = 10, category = '' } = req.query;

        const pageNumber = Math.max(1, parseInt(page, 10));
        const limitNumber = Math.min(100, parseInt(limit, 10));

        if (pageNumber < 1 || limitNumber < 1) {
            return res.status(400).json({ message: 'Page and limit must be greater than 0' });
        }

        const query = category ? { category: { $regex: category, $options: 'i' } } : {};

        const products = await Product.find(query)
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);

        const totalProducts = await Product.countDocuments(query);
        const totalPages = Math.ceil(totalProducts / limitNumber);

        res.status(200).json({
            products,
            pagination: {
                currentPage: pageNumber,
                totalPages,
                totalProducts,
                limit: limitNumber,
            }
        });
    } catch (err) {
        next(err);
    }
};

// Add Product Controller
const addProducts = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, description, price, category } = req.body;

        const newProduct = new Product({
            name,
            description,
            price,
            category,
        });

        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully' });
    } catch (err) {
        next(err);
    }
};

module.exports = { registerUser, loginUser, getProducts, addProducts };
