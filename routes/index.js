const express = require('express');
const router = express.Router();
const passport = require("passport");

const indexController = require('../controllers/index')
const User = require('../models/user');

router.get('/', (indexController.index));

// Google OAuth login route
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

// Google OAuth callback route
router.get(
    "/oauth2callback",
    passport.authenticate("google", {
        successRedirect: `/user`,
        failureRedirect: "/",
    })
  );
  
// OAuth logout route
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}



module.exports = {router, isLoggedIn};