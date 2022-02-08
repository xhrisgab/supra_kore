/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ct_modelos', {
    cod_modelo: {
      type: DataTypes.CHAR(15),
      allowNull: false,
      primaryKey: true
    },
    nom_modelo: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    activo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_marca: {
      type: DataTypes.CHAR(10),
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
    cod_segmento: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_origen: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    grupo_modelo: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    nro_cilindros: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cilindrada_cc: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    hp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Precio_actual: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    caracteristica: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    tipo_caja: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_tcorredizo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tipo_combustible: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_modelomaster: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cif: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    porcentaje: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    imp_valor: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    es_stockeable: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_activo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_estadistica: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_emp: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    esriel_comun: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    puertas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cap_asientos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipo_vehi: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    cod_modelo_com: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    version_motor: {
      type: DataTypes.CHAR(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ct_modelos',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK__ct_modelos__66D60208",
        unique: true,
        fields: [
          { name: "cod_modelo" },
        ]
      },
    ]
  });
};
