require('dotenv').config();

//-----------CONFIG--------//

//fill up the enviroment variables into `.env` file.

const config = {
    dbUrl: process.env.DB_URL || 'mongodb://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@'+process.env.DB_HOST+':'+process.env.DB_PORT+'/'+process.env.DB_NAME,
    dbUrl2: process.env.DB_URL2 || 'mssql://'+process.env.TDB_USER+':'+process.env.TDB_PASSWORD+'@'+process.env.TDB_HOST+':'+process.env.TDB_PORT+'/'+process.env.TDB_NAME,
    portApp: process.env.PORT_APP || 5000,
    hostApp: process.env.HOST_APP || 'http://localhost',
    emailHost: process.env.EMAIL_HOST,
    emailPort: process.env.EMAIL_PORT,
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASSWORD,
};

module.exports = config;