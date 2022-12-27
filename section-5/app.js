const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Allows us to parse different types
app.use(bodyParser.urlencoded({extended: false}));

// Allows access into the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routers for the different web routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404 Page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);