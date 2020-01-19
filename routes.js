const path = require('path');
const express = require('express');

const app = express();

let filePath = __dirname + '\\public'

//Routes. De kan laves så /about f.eks. modtager /public/about.html, så url bliver mere "clean" uden alle html filerne i enden
app.get('/', (req, res) => {
res.sendFile(filePath + '\\index.html');
});

app.get('/register', (req, res) => {
    console.log(filePath);
    res.sendFile('project\public\register.html');
    });

app.get('/omos', (req, res) => {
    res.send(console.log(filePath));
    res.sendFile(filePath + '\\omos.html');
    });
