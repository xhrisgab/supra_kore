/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ct_segmentos', {
    cod_segmento: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      primaryKey: true
    },
    nom_segmento: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    valor_aprox: {
      type: DataTypes.DECIMAL,
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
    cod_agrupacion: {
      type: DataTypes.CHAR(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ct_segmentos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ct_segmentos__4BADD5D7",
        unique: true,
        fields: [
          { name: "cod_segmento" },
        ]
      },
    ]
  });
};
