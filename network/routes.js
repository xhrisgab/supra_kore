//const user = require('../components/usersAndProfiles/user/network');
const view = require('../components/views/network');
const adenda = require('../components/teros/adendas/network');

const routes = function(server) {
//    server.use('/user', user);
    server.use('/view', view);
    server.use('/adenda', adenda);
}

module.exports = routes;