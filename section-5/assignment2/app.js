const http = require('http');
const express = require('express');

const server = express();

// server.use((req, res, next) => {
//     console.log('Reached checkpoint 1');
//     next();
// });

// server.use((req, res, next) => {
//     console.log('Reached checkpoint 2');
//     res.send('<h1>Made it to checkpoint 2</h1>');
// });

server.use('/users', (req, res, next) => {
    res.send('<h1>Made it to users</h1>');
});

server.use('/', (req, res, next) => {
    res.send('<h1>Made it to home</h1>');
});



server.listen(3000);