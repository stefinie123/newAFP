'use strict';

const express = require('express');

const app = express();

app.use(express.json());

app.use(express.static('dist'));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(3000, function (err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Listening on port 3000');
});