/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ct_colores', {
    cod_color: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true
    },
    nom_color: {
      type: DataTypes.CHAR(100),
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
    nom_color2: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    es_marketing: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ct_colores',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ct_color__9150BE2D613167C5",
        unique: true,
        fields: [
          { name: "cod_color" },
        ]
      },
    ]
  });
};
