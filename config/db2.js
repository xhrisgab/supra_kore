const chalk = require('chalk');
const { Sequelize } = require('sequelize');
/*
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss');
};
*/
async function connect(url) {
    const db = new Sequelize(url,{
        dialect: 'mssql',
        dialectOptions: {
            // Observe the need for this nested `options` field for MSSQL
            options: {
                // Your tedious options here
                encrypt: false,
                useUTC: false,
                dateFirst: 1,
            },
        },
    });
    
    await db.authenticate()
        .then(() =>	console.log(chalk.green("[db-TEROS]") + ' Connection success'))
        .catch((err) => console.log(chalk.red('[Unable to connect to database] '), err));
};

module.exports = connect;