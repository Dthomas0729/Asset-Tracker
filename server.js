require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const session = require("express-session");
const passport = require("passport");

require('./auth/passport');
require('./auth/database');

const PORT = 4000
const app = express();

const idxRouter = require('./routes/index').router;
const userRouter = require('./routes/users');
const assetsRouter = require('./routes/assets');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
    session({
      secret: "SEIRFLEXRocks!",
      resave: false,
      saveUninitialized: true,
    })
  );

app.use(passport.initialize());
app.use(passport.session());


app.use('/', idxRouter);
app.use('/home', userRouter);
app.use('/assets', assetsRouter);


app.listen(PORT, (err) => {
    console.log(`We Are Live!`);
})