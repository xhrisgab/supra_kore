const chalk = require('chalk');

exports.success = function(req, res, message,  status, alert) {
    res.status(status || 200).send({
        error: '',
        alert: req.alert || alert ||'',
        body: message
    });
}

exports.error = function(req, res, message, status, details) {
    console.log(chalk.red('[Response error] ' + details));
    res.status(status || 500).send({
        error: message,
        body: ''
    });
}