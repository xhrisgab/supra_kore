/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ct_vendedores', {
    nom_vendedor: {
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
    cod_vendedor: {
      type: DataTypes.CHAR(15),
      allowNull: false,
      primaryKey: true
    },
    cod_zona_vta: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    nro_legajo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cod_tit: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cod_tvend: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    cod_equipo: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    email: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    tel_empresa: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    tel_celular: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    dir_empresa: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    nom_localidad: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    abreviatura: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    pass_cotizador: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    cargo_area: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    nom_empresa: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    usu_solicitante: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    fecha_solicitud: {
      type: DataTypes.DATE,
      allowNull: true
    },
    resp_solicitud: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    usu_registro: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cod_estado: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    nom_aux: {
      type: DataTypes.CHAR(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ct_vendedores',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK__ct_vendedores__4850AF91",
        unique: true,
        fields: [
          { name: "cod_vendedor" },
        ]
      },
    ]
  });
};
