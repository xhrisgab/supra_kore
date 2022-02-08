const config = require('./config');
const { Sequelize } = require('sequelize');

Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss');
};

const sequelize = new Sequelize(config.dbUrl2,{
    define: {
        freezeTableName: true,
    },
    dialectOptions: {
        // Observe the need for this nested `options` field for MSSQL
        options: {
        // Your tedious options here
            enableArithAbort: true,
            encrypt: false,
            useUTC: true,
            dateFirst: 1,
        },
    },
    timezone: '-04:00',
});

const db2 = {};

db2.Sequelize = Sequelize;
db2.sequelize = sequelize;

db2.adenda = require('../components/teros/adendas/model')(sequelize, Sequelize);
db2.ct_vehiculo = require('../components/teros/ct_vehiculos/model')(sequelize, Sequelize);
db2.marca = require('../components/teros/ct_marca/model')(sequelize, Sequelize);
db2.color = require('../components/teros/ct_colores/model')(sequelize, Sequelize);
db2.deposito = require('../components/teros/ct_depositos/model')(sequelize, Sequelize);
db2.sitio = require('../components/teros/ct_sitios/model')(sequelize, Sequelize);
db2.contrato = require('../components/teros/cpf_vtasokm/model')(sequelize, Sequelize);
db2.titular = require('../components/teros/cpp_mantit/model')(sequelize, Sequelize);
db2.otu = require('../components/teros/cpf_ordenunitrab/model')(sequelize, Sequelize);
db2.vendedor = require('../components/teros/ct_vendedores/model')(sequelize, Sequelize);
db2.modelo = require('../components/teros/ct_modelos/model')(sequelize, Sequelize);
db2.segmento = require('../components/teros/ct_segmentos/model')(sequelize, Sequelize);


//Relacion adenda -> vehiculos
db2.adenda.hasOne(db2.ct_vehiculo, {
    sourceKey: 'chassis_aux1',
    foreignKey: 'chassis',
});
db2.ct_vehiculo.belongsTo(db2.adenda);

//Relacion Vehiculos -> Marcas
db2.ct_vehiculo.hasOne(db2.marca,{
    sourceKey: 'cod_marca',
    foreignKey: 'cod_marca'
});
db2.marca.belongsTo(db2.ct_vehiculo);

//Relacion Vehiculo -> Modelo
db2.ct_vehiculo.hasOne(db2.modelo,{
    sourceKey: 'cod_modelo',
    foreignKey: 'cod_modelo'
});
db2.modelo.belongsTo(db2.ct_vehiculo);

//Relacion Modelo -> Segmento
db2.modelo.hasOne(db2.segmento,{
    sourceKey: 'cod_segmento',
    foreignKey: 'cod_segmento'
});
db2.segmento.belongsTo(db2.modelo);

//Relacion Vehiculos -> OTU
db2.ct_vehiculo.hasOne(db2.otu,{
    sourceKey: 'chassis',
    foreignKey: 'chassis'
});
db2.otu.belongsTo(db2.ct_vehiculo);

//Relacion Adenda -> Color
db2.adenda.hasOne(db2.color,{
    sourceKey: 'cod_color2',
    foreignKey: 'cod_color'
});
db2.color.belongsTo(db2.adenda);

//Relacion adenda -> Deposito
db2.adenda.hasOne(db2.deposito, {
    sourceKey: 'cod_deposito',
    foreignKey: 'cod_tit',
});
db2.deposito.belongsTo(db2.adenda);

//Relacion Adenda -> Vendedor
db2.adenda.hasOne(db2.vendedor,{
    sourceKey: 'usuario_mod',
    foreignKey: 'usuario'
});
db2.vendedor.belongsTo(db2.adenda);

//Relacion Deposito -> Sitio
db2.deposito.hasOne(db2.sitio, {
    sourceKey: 'cod_sitio',
    foreignKey: 'cod_sitio',
});
db2.sitio.belongsTo(db2.deposito);

//Relacion Contrato -> titular
db2.contrato.hasOne(db2.titular, {
    sourceKey: 'cod_tit',
    foreignKey: 'cod_tit',
});
db2.titular.belongsTo(db2.contrato);

module.exports = db2;