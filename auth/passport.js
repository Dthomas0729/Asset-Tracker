const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK,  
        },

        (accessToken, refreshToken, profile, cb) => {
            console.log(profile);
            return cb(null);
        }
    )
)

// passport.serializeUser((user, done) => {
//     done(null, user.googleId||user.id);
// });

// passport.deserializeUser((googleId, done) => {

//     done(null, user);
// });