/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cpf_vtasokm', {
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
      allowNull: false,
      primaryKey: true
    },
    cod_tit: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    nom_tit: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    afavor: {
      type: DataTypes.CHAR(15),
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
    fec_entrega: {
      type: DataTypes.DATE,
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
    nro_ingusado: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    es_usado: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    cod_escribania: {
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
    interes: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    desc_venta: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    efectivo_mn: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    clan_toyota: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    monto_usado: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    monto_tapiz: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    monto_equipa: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    monto_gtosesc: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    monto_iva: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cod_banco: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    total_credito: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    total_cuotas: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cotiza_dolar: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fec_cotiza: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nro_antecedente: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    fecha_lista: {
      type: DataTypes.DATE,
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
    cod_garante: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    es_prendado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_negocio: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    conversion: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fec_doc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    con_interno: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    rua: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    estado_vta: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    nro_certificado: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    fact_interna: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cod_tit_anterior: {
      type: DataTypes.CHAR(15),
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
    cod_color: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_marca: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_deporigen: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    cod_depdestino: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    tipo_despacho: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_ubicacion: {
      type: DataTypes.CHAR(12),
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
    nro_ped: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    nro_doca: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cod_estado: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    es_asignado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cert_nacionaliza: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    nro_despacho: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    cod_depfiscal: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    estado_vtaokm: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    signo: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    ref_cliente: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    nom_titafavor: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    nro_facchar: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cod_asignacion: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    cod_operacion: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cod_tit_aux1: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    es_licitado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_tit1: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    nro_doc_uni: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_profesion: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    cod_doc_uni: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    cod_importacion: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    cod_sitio: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    desc_vta: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    desc_prom: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cod_estcivil: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    es_seguro: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_confirmada: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_master: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    es_foto: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_ci: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    nro_item: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nro_interno: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    nroa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo_documento: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    abrev_deposito: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    observacionesp: {
      type: DataTypes.CHAR(250),
      allowNull: true
    },
    dir_tit: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    nro_doc_ant: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cod_gci: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    precio_costo: {
      type: DataTypes.DECIMAL,
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
    estado_contrato: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_seguro: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    Con_Veh_usado: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cpf_vtasokm',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "cod_tit",
        fields: [
          { name: "cod_tit" },
        ]
      },
      {
        name: "cod_tit_anterior",
        fields: [
          { name: "cod_tit_anterior" },
        ]
      },
      {
        name: "cod_vendedor",
        fields: [
          { name: "cod_vendedor" },
        ]
      },
      {
        name: "IN_cpf_vtasokm_chasis",
        fields: [
          { name: "chassis" },
        ]
      },
      {
        name: "nro_doc_uni",
        fields: [
          { name: "nro_doc_uni" },
        ]
      },
      {
        name: "PK__cpf_vtasokm__044734B5",
        unique: true,
        fields: [
          { name: "nro_trans" },
          { name: "chassis" },
          { name: "seccion" },
          { name: "bloque" },
          { name: "linea" },
        ]
      },
    ]
  });
};
