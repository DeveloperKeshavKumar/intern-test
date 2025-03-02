const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./router');
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

const corsOptions = {
    origin: process.env.NODE_ENV === 'production' ? null : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 100,
}));
app.use(express.json());
app.use('/api/v1', router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Something went wrong. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
});


app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`)
})