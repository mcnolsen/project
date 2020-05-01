
const checkAuthentification = (req, res, next) => {
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error', 'Login for at se denne side');
        res.redirect('/login');
}

const checkAdmin =  (req, res, next) => {
    if(req.isAuthenticated()){
        if (req.user.userType === 'admin') {
            return next();
        }
        else {
            req.flash('error', 'Denne bruger har ikke administrator privilegier. Venligst login med en bruger som har dette');
            res.redirect('/user/dashboard');
        }
    }
    else{
        req.flash('error', 'Login med en administrator bruger for at se denne side');
        res.redirect('/login');
    }
}

const checkNotAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        res.redirect('/user/dashboard');
    }
    else{
        return next();
    }
}

exports.checkAuthentification = checkAuthentification;
exports.checkAdmin = checkAdmin;
exports.checkNotAuthenticated = checkNotAuthenticated;
