const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('ShopKart Production Version 1');
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP'
    });
});

app.listen(3000, () => {
    console.log('Application started on port 3000');
});


