/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ct_marca', {
    cod_marca: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    nom_marca: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    formulario: {
      type: DataTypes.CHAR(16),
      allowNull: false
    },
    seccion: {
      type: DataTypes.CHAR(16),
      allowNull: false
    },
    bloque: {
      type: DataTypes.CHAR(16),
      allowNull: false
    },
    linea: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    usuario_mod: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    fecha_mod: {
      type: DataTypes.DATE,
      allowNull: false
    },
    terminal_mod: {
      type: DataTypes.CHAR(4),
      allowNull: false
    },
    operacion_mod: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    estado_registro: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    propia: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orden_marca: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    garantia: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    es_para_taller: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ct_marca',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ct_marca__51DAE522",
        unique: true,
        fields: [
          { name: "cod_marca" },
        ]
      },
    ]
  });
};
