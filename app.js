const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');

/**
 * Load local environment variables from .env file.
 */
dotenv.config({ debug: process.env.DE_DEBUG });
dotenv.load();

const productsRouter = require('./components/products');
const categoriesRouter = require('./components/categories');
const brandsRouter = require('./components/brands');
const apiPath = '/api/v1';
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(apiPath + '/products', productsRouter);
app.use(apiPath + '/categories', categoriesRouter);
app.use(apiPath + '/brands', brandsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404, 'No HTTP resource was found that matches the request URI'));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = process.env.ENVIRONMENT === 'development' ? err.stack : err.message;

    res.status(err.status || 500).json({errorCode: err.status, error: err.name, details: res.locals.error});
});

module.exports = app;
