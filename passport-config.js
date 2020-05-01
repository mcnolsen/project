//Til user authentification. Skal først bruge en strategy
const LocalStrategy = require ('passport-local').Strategy;
const bcrypt = require ('bcryptjs');

//Load user model
const User = require('./models/User');

const initializePassport =  (passport) => {
    //Authentication process. Tager email og password, og kalder done når færdig. Skal være async pga. bcrypt
    const authenticateUser = async (email, password, done) => {
        //Leder efter user med email
        const user = await User.findOne({'email': email});
        if (user == null){
            //Returnerer done uden error med en meddelse
            return done(null, false, {message: 'Ingen bruger med den email'})
        }
        else {
            try {
                //Bruger bcryptjs til at compare det givne password og det der er stored i DB for brugeren
                if(await bcrypt.compare(password, user.password)){
                    return done(null, user);
                }
                else{
                //Returnerer done uden error, men med en meddelse om forkert password
                return done(null, false, {message: 'Forkert password'})
                }
            }
            catch (e){
                return done(e);
        }
    }
}

    //Laver en strategy til hvad der skal ske. Skal tage email og callback authenticateUser
    passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser))

    //Lav user til et id
    passport.serializeUser((user, done) => {
        done(null, user.id);
     });
    //Lav id til user
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user )=> {
            done(err, user);
        })
    });
 }

 module.exports = initializePassport;