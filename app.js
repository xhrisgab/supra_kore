// Import Packages
const express  = require('express');
const app = express();
const server = require('http').Server(app);
//const passport = require('passport');

const path = require('path');

// Import of files requires
const config = require('./config/config');
const db = require('./config/db');
const db2 = require('./config/db2');
const router = require('./network/routes');

// Configures the database and opens a global connection that can be used in any module with `mongoose.connection`
db(config.dbUrl);

//Configures the database and opens a global conection with TEROS gtauto_cr
db2(config.dbUrl2);

// Pass the global passport object into the configuration function
//require('./config/passport')(passport);

// This will initialize the passport object on every request
//app.use(passport.initialize());

// instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Where Angular builds to - In the ./angular/angular.json file, you will find this configuration
// at the property: projects.angular.architect.build.options.outputPath
// When you run `ng build`, the output will go to the ./public directory
//app.use('/app', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

// Load View Engine -- for this case is PUG
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');


/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/index.js
router(app);

/**
 * -------------- SERVER ----------------
 */
// Server listens on http://localhost:3000 (dependes .env file)
server.listen(config.portApp, function() {
    console.log("server listening on "+ config.hostApp +":"+config.portApp);
});