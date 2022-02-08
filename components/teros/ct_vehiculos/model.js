const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ct_vehiculos', {
    chassis: {
      type: DataTypes.CHAR(40),
      allowNull: false,
      primaryKey: true
    },
    rua: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    nro_motor: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cod_marca: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_modelo: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cod_color: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_tapizado: {
      type: DataTypes.CHAR(10),
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
    fec_produccion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    'año_modelo': {
      type: DataTypes.DECIMAL,
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
    ced_legalidad: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cert_nacionaliza: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    sera_bu: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    nro_llave: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cod_tit: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    ubicacion: {
      type: DataTypes.CHAR(20),
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
    usuario_vehiculo: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    estado_vta: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_asignacion: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    fecha_venta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cod_ubica: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    nro_despacho: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    fec_despacho: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fec_pago: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cod_depfiscal: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    nro_ped: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    tipo_despacho: {
      type: DataTypes.CHAR(1),
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
    fec_asignado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fec_entrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fec_emi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cod_sitio: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    cod_importacion: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    siniestrado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_master: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    llave_vehi: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    chassis_aux1: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cod_color_int: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    fec_cedula: {
      type: DataTypes.DATE,
      allowNull: true
    },
    warrant: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    edicion: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cod_banco: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    nro_operacion: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    nro_valeprenda: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    chassis_aux2: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    costo: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    nro_facchar: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    fec_mov_bco: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cod_deporigen: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    st_nacionaliza: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    nom_auxiliar: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    fecha_w: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fec_nac: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fec_ing: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fec_ne: {
      type: DataTypes.DATE,
      allowNull: true
    },
    asignacion: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    precio_venta: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fecha_contrato: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nro_contrato_c: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usuario_alta: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cod_moneda: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    documento: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    fec_factura: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nro_entrega: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    nro_factura_ref: {
      type: DataTypes.CHAR(20),
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
    cod_ubicacion: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    cod_estado: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    fecha_salida: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fec_kardex: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observaciones1: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    fec_salida: {
      type: DataTypes.DATE,
      allowNull: true
    },
    agencia_ad: {
      type: DataTypes.CHAR(250),
      allowNull: true
    },
    version_motor: {
      type: DataTypes.CHAR(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ct_vehiculos',
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
        name: "I_ct_vehiculos_chassis_aux2",
        fields: [
          { name: "chassis_aux2" },
        ]
      },
      {
        name: "I_ct_vehiculos_COD_MARCA",
        fields: [
          { name: "cod_marca" },
          { name: "chassis" },
        ]
      },
      {
        name: "PK__ct_vehiculos__76184598",
        unique: true,
        fields: [
          { name: "chassis" },
        ]
      },
    ]
  });
};