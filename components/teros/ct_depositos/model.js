/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ct_depositos', {
    cod_tit: {
      type: DataTypes.CHAR(15),
      allowNull: false,
      primaryKey: true
    },
    nom_tit: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    tiene_ubic: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    cod_tipotit: {
      type: DataTypes.CHAR(15),
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
    cod_sitio: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    cod_planta: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    cod_estado: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cod_postal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dir_deposito: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    cod_pais: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    cod_provincia: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    localidad: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    abrev_deposito: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    numrem: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    serierem: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    numremman: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    serieremman: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    numfaca: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    seriefa: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    numfacb: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    seriefb: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    numface: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    seriefe: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    numremfac: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    serremfac: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nummat: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    sermat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numguia: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    serguia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fec_cierre: {
      type: DataTypes.DATE,
      allowNull: true
    },
    manda_mail: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    mail: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    fec_iniact_fac: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    fec_iniact_nc: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    fec_iniact_nd: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    fec_vto_fac: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fec_vto_nc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fec_vto_nd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    numnda: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    serienda: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    numndb: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    seriendb: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    numnde: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    seriende: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    nro_cai_fac: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    nro_cai_nc: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    nro_cai_nd: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    serience: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    numnce: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    seriencb: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    numncb: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    serienca: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    numnca: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    repone_aut: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    dias_stock: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    numerador: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    numrepos: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    numdestino: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    numremito: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    imp_facturacred: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    imp_facturacont: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    imp_pagare: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    imp_presupuesto: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    cod_aux_gsi: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    imp_recibo: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    imp_notaenvio: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    cod_sucursal: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    num_entrusados: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    num_rptousados: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    imp_ajustestock: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    imp_general: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    imp_compralocal: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    imp_ajuste2: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    es_deposito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_especial: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    imp_pedido0800: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    imp_ubicacion: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    num_factinterna: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    es_deveh: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    numorcompra: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    es_stockfinal: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    imp_pedido0809: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    imp_ordencompra: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    imp_factinterna: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    es_envio: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    num_orcomptaller: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    imp_mov_interno: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    es_dep_sony: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    num_factura: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    max_valor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    es_local: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_cmi: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_depositoVox: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    num_reciboa: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    num_recibob: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    imp_reciboMT: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    num_pedinterno: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_negocio: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    imp_reciboA: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    imp_reciboB: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    imp_contadocaja: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    num_facvarias: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cod_sector: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    imp_cajamt: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    es_marketing: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_usados: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    impresoramtcob: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    es_carrolargo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_caja: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_dpto: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    usa_cmi: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_departamento: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    chassis: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cod_ubica: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    imp_notaremision: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    cod_suc_tribut: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_fac_tribut: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_transportist: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    es_desarrollo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    remis_suc_tribut: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    remis_fac_tribut: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cmi_suc_tribut: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cmi_fac_tribut: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    nro_cmi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imp_afectacion: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    envia_mail: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    mail_mensaje: {
      type: DataTypes.CHAR(250),
      allowNull: true
    },
    nro_oei: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    num_recaamsa: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num_recbamsa: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    reg_suc_tribut: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    reg_fac_tribut: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    imp_reciboamsa: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    imp_reciboamsamt: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    es_carroesp: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    nro_intaller: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mail_mensajeesc: {
      type: DataTypes.CHAR(250),
      allowNull: true
    },
    nom_tit_aux: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    email_aux: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cod_operador: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cod_area: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    tel_tit: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    es_activo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_cpd: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    imp_etiquetas2: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    afecta_venta: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    num_ajustestk: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    es_previaje: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ct_depositos',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK__ct_depositos__511AFFBC",
        unique: true,
        fields: [
          { name: "cod_tit" },
        ]
      },
    ]
  });
};
