//const user = require('../components/usersAndProfiles/user/network');
const view = require('../components/views/network');
const cotizador = require('../components/cotizador/network');
const adenda = require('../components/teros/adendas/network');

const routes = function(server) {
//    server.use('/user', user);
    server.use('/view', view);
    server.use('/cotizador', cotizador);
    server.use('/adenda', adenda);
}

module.exports = routes;