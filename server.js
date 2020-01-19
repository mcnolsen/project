const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

//Behøver ikke variable her. Gøres så vores database bruger og kode ikke bliver offentligt gjorde. (se .env)
require('dotenv/config');
const app = express();

//Json parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Import user route
const userRoute = require('./routes/users');

//Middleware til user route
app.use('/register', userRoute);

//Server html, css & js leverance
app.use(express.static('public'));

app.listen(3000, () => console.log('Initialising server'));

//Connection til DB. Log kan godt tage lidt tid.
mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Connection Established to DB"));
