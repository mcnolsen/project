const express = require('express');
const auth = require('../config/auth')

const app = express();

//Routes. De kan laves så /about f.eks. modtager /public/about.html, så url bliver mere "clean" uden alle html filerne i enden

app.get('/', (req, res) => {
    res.render('./index.ejs')
})
app.get('/omos', (req, res) => {
    res.render('./omos.ejs')
})
app.get('/kontakt', (req, res) => {
    res.render('./kontakt.ejs')
})
app.get('/login', auth.checkNotAuthenticated, (req, res) => {
    res.render('./login.ejs')
})

//Register route
app.get('/register', (req, res) => {
    res.render('./register.ejs')
})

module.exports = app;