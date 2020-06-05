const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/teste', (req, res) => {
    res.send('teste');
});

app.get('/outro', (req, res) => {
    res.send('outro');
});

app.listen(PORT, HOST);