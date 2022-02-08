const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cpf_adendaokm', {
    nro_trans: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_doc: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    nro_doc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nro_docum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cod_docum: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    cod_emp: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    chassis: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cod_tit: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    nom_tit: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    cod_vendedor: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    'año_modelo': {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tipo_doc: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    nro_ventas: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cod_moneda: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    precio_venta: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    desc_venta: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    monto_equipa: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    total_credito: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cod_banco: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    nro_motor: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cod_modelo: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    monto_bco: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    precio_total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cod_color: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_marca: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    cod_asignacion: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    efectivo_mn: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    es_licitado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_seguro: {
      type: DataTypes.CHAR(1),
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
    fec_doc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fec_vta_0km: {
      type: DataTypes.DATE,
      allowNull: false
    },
    chassis_aux1: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    'año_modelo2': {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    nro_motor2: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cod_modelo2: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cod_color2: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_marca2: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    precio_vta1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cotiza_dolar: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    conversion: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    desc_a: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    desc_b: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tipo_documento: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    nro_doc_uni: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_master: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    chassis_aux3: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cod_estado: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cod_ubicacion: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    cod_ubica: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    nom_color2: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    precio_fabrica: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    con_interno: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    abrev_deposito: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    nroa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nom_modelo2: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    cod_deposito2: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    nom_deposito3: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cod_seguro: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    es_reservado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cpf_adendaokm',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "I_cpf_adendaokm_chassis",
        fields: [
          { name: "chassis" },
          { name: "nro_ventas" },
        ]
      },
      {
        name: "IN_cpf_adendaokm_chasis_aux1",
        fields: [
          { name: "chassis_aux1" },
        ]
      },
      {
        name: "PK__cpf_aden__FD350FA25C37A87E",
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