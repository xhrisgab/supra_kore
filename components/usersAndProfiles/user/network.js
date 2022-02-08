// Here we define the routes for the URLs and error handler

// Import Librarier
const express = require('express');
const passport = require('passport');

// Import own Functions
const controller  = require('./controller');
const response = require('../../../network/response');
const middles = require('../../../lib/middlewares');

const router = express.Router();

//GET method for search an user email
router.get('/user', passport.authenticate('jwt', {session: false}), middles.isVerifiedUser, function(req, res) {
    controller.getUser(req.body.email)
        .then((dato) => {
            response.success(req, res, dato.body, dato.status)
        })
})

//POST method for register a new user
router.post('/register', function(req, res){
    controller.registerUser( req.body.email, req.body.password )
        .then((dato) => {
            response.success(req, res, dato.user, dato.status, dato.alert);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', e.status, e.er);
        });
})

module.exports = router;