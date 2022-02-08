/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cpf_ordenunitrab', {
    nro_trans: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_doc: {
      type: DataTypes.CHAR(4),
      allowNull: false
    },
    nro_doc: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nro_docum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cod_docum: {
      type: DataTypes.CHAR(8),
      allowNull: false
    },
    cod_emp: {
      type: DataTypes.CHAR(15),
      allowNull: false
    },
    chassis: {
      type: DataTypes.CHAR(40),
      allowNull: false
    },
    item: {
      type: DataTypes.CHAR(250),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    precio_venta: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    formulario: {
      type: DataTypes.CHAR(16),
      allowNull: false
    },
    seccion: {
      type: DataTypes.CHAR(16),
      allowNull: false,
      primaryKey: true
    },
    bloque: {
      type: DataTypes.CHAR(16),
      allowNull: false,
      primaryKey: true
    },
    linea: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
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
    }
  }, {
    sequelize,
    tableName: 'cpf_ordenunitrab',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__cpf_orde__FD350FA24EDDAD60",
        unique: true,
        fields: [
          { name: "nro_trans" },
          { name: "seccion" },
          { name: "bloque" },
          { name: "linea" },
        ]
      },
    ]
  });
};
