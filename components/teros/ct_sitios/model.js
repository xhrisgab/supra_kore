/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ct_sitios', {
    cod_sitio: {
      type: DataTypes.CHAR(8),
      allowNull: false,
      primaryKey: true
    },
    nom_sitio: {
      type: DataTypes.CHAR(40),
      allowNull: false
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
    cod_localidad: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    dir_tit: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    es_activo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    dir_cobranza: {
      type: DataTypes.CHAR(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ct_sitios',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ct_sitios__2136E270",
        unique: true,
        fields: [
          { name: "cod_sitio" },
        ]
      },
    ]
  });
};
