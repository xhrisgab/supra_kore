/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cpf_detxitem', {
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
    cod_item: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cod_modelo: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    precio_venta: {
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
    },
    precio_costo: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nom_origen: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    copiar_datos: {
      type: DataTypes.CHAR(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cpf_detxitem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__cpf_detx__FD350FA2408F8E09",
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
