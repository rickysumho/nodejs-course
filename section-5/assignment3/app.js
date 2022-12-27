const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

const usersRoutes = require('./routes/users');
const homeRoutes = require('./routes/home');

// Enable body-parser
// Allow app to use public
// Create express server
// Import and use routes

const server = express();

server.use(bodyParser.urlencoded({extended: false}));
server.use(express.static(path.join(__dirname, 'public')));

server.use(usersRoutes);
server.use(homeRoutes);

server.listen(3000);