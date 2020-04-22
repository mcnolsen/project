const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
//const uuidv4 = require('uuid/v4');

//Behøver ikke variable her. Gøres så vores database bruger og kode ikke bliver offentligt gjorde. (se .env)
require('dotenv/config');
const app = express();

//Sætter view engine til ejs. Ejs gøre det lettere at lave templates med js. Derfor har alle vores html filer extension .ejs i stedet
app.set('view engine', 'ejs');

//Json parsing
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

//Connect flash call
app.use(flash());

//Middleware til flash. Kan kalde dem med messages i ejs filen globalt
app.use(function(req, res, next){
    res.locals.messages = req.flash();
    next();
  });

//Passport auth
app.use(passport.initialize());
app.use(passport.session());
const initializePassport = require('./passport-config');
initializePassport(passport);

//Login route
app.post('/login', passport.authenticate('local', {
    successRedirect: '/user/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}));

//Logout route
app.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Du er nu logget ud');
    res.redirect('/login');
});


//Alle routes til at fjerne file extension. Rendering
const indexRoute = require('./routes/routes');
app.use(indexRoute);

//Import registrerings route. Pga. brugen af route i stedet for app kan vi bruge denne middleware med en anden underside, hvis vi f.eks. ville gøre så admins også kunne lave brugere.
const registerRoute = require('./routes/register-user');
app.use('/register', registerRoute);

//User routes hvor login er required. Rendering. Skal stå under called til initializepassport, ellers kan den ikke finde ud af at den er authenticated via passport, og auth.js returnerer dig derfor til login
const usersRoutes = require('./routes/user/user-routes');
app.use(usersRoutes);

//Admin routes til rendering
const adminRoutes = require('./routes/admin/admin-routes');
app.use(adminRoutes);

//Admin board oprettelse. Bruger router
const opretBoard = require('./routes/admin/app/opret-board');
app.use('/admin/opret-board', opretBoard);

const bookBoard = require ('./routes/user/app/book-board');
app.use('/user/book-board', bookBoard);

//Server html, css & js leverance
app.use(express.static('views'));

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Initialising server on port: ${PORT}`));

//Connection til DB. Hvis connection tager tid, så tjek username, password og om IP er whitelisted.
mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (err) {
            console.log('Unable to connect to the server. Please start the server. Error:', err);
        } 
        else {
        console.log("Connection Established to DB");
    }});

