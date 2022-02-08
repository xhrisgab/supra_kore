const chalk = require('chalk');

function errHandler(err) {
    console.log(chalk.yellow("[Error Handler]", err));
    switch(err.name) {
        case "CastError":
            if(err.kind == "ObjectId") {
                respuesta = {
                    alert: { warning: "Valor invalido", campo: err.path, value: err.value },
                    body: null
                }
                return respuesta;
                break;
            }
        case "MongoError":
            if(err.code = 11000) {
                respuesta = {
                    alert: { warning: "Valor duplicado", value: err.keyValue },
                    body: null
                }
                return respuesta;
                break;
            }
        case "ValidationError":
            const x = Object.keys(err.errors);
            respuesta = {
                alert: { warning: "Valor invalido", campo: x },
                body: null
            }
            return respuesta;
            break;
        default:
            return err;
    }
}
module.exports = errHandler;