const express = require('express');
const morgan = require('morgan');
const session = require("express-session");
const passport = require("passport");

require('dotenv').config()
require('./auth/passport');

const PORT = 4000
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use(
    session({
      secret: "SEIRFLEXRocks!",
      resave: false,
      saveUninitialized: true,
    })
  );

app.listen(PORT, (err) => {
    console.log(`We Are Live! Go Here ---> http://localhost:${PORT}`);
})