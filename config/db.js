const db = require('mongoose');
const chalk = require('chalk');
/**
 * -------------- DATABASE ----------------
 *
 * Connect to MongoDB Server using the connection string in the `config.js` file.  To implement this, place the following
 * string into the `config.js` file
 * 
 * dbUrl:'mongodb://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@'+process.env.DB_HOST+':'+process.env.DB_PORT+'/'+process.env.DB_NAME,
 */ 
db.Promise = global.Promise;

async function connect(url) {
    await db.connect(
        url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        }
    ).then(() => console.log(chalk.green("[db]") + ' Connection success'))
    .catch(err => console.error('[db]', err));
}

module.exports = connect;