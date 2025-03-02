const { Router } = require('express');
const { body, query } = require("express-validator");
const { getProducts, addProducts, loginUser, registerUser } = require('./controller');

const router = Router();

router.post('/register', [  
    body("name").isString().trim().notEmpty().withMessage('Name is required'),
    body("email").isEmail().normalizeEmail().withMessage('Email must be valid'),
    body("password").isString().isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
], registerUser);

router.post('/login', [
    body("email").isString().trim().isLength({ min: 3, max: 20 }).escape(),
    body("password").isString().isLength({ min: 8 }),
], loginUser);

router.get('/products', [
    query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
    query('limit').optional().isInt({ min: 1 }).withMessage('Limit must be a positive integer'),
    query('category').optional().isString().trim().notEmpty().withMessage('Category must be a valid string'),
], getProducts);

router.post('/products', [
    body('name').isString().trim().notEmpty().withMessage('Product name is required'),
    body('description').isString().trim().notEmpty().withMessage('Product description is required'),
    body('price').isNumeric().withMessage('Price must be a number').custom(value => value > 0).withMessage('Price must be greater than 0'),
    body('category').isString().trim().notEmpty().withMessage('Product category is required'),
], addProducts);

router.get('/', function (req, res) {
    res.send('Server is running');
});

module.exports = router;