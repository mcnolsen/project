const express = require('express');
const app = express();
const auth = require('../../config/auth');


app.get('/admin', auth.checkAdmin, (req, res) => {
    res.render('./admin/admin.ejs');
})

app.get('/admin/opret-board', auth.checkAdmin, (req, res) => {
    res.render('./admin/opret-board.ejs');
})
module.exports = app;