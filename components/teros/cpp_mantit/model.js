/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cpp_mantit', {
    cod_tit: {
      type: DataTypes.CHAR(15),
      allowNull: false,
      primaryKey: true
    },
    nom_tit: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    email_tit: {
      type: DataTypes.CHAR(80),
      allowNull: true
    },
    cod_fpago: {
      type: DataTypes.CHAR(20),
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
    dir_particular: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    tel_particular: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    dir_laboral: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    tel_laboral: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    dir_carta: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    tel_carta: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    fec_nac: {
      type: DataTypes.DATE,
      allowNull: true
    },
    email2: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    tel_celular: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    cod_barrio_part: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    cod_loc_part: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    cod_barrio_lab: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    cod_loc_lab: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    cod_loc_carta: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    cod_estcivil: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    cod_barrio_carta: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    razon_social: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    cod_tipoclie: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    nro_doc_uni: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_doc_uni: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    cod_tipclitaller: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    es_tallerista: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    porc_comision: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    es_exenta: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_mayorist_sony: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_tipolp: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cod_tipo_emp_iva: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    dir_cobranza: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    tel_cobranza: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    es_fact_taller: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_neupar: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_seguro: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_gci: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    es_con_aviso: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_provee_taller: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_interno: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    gran_contrib: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_pais: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    es_activo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cred_autorizado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_moneda: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    nro_trans: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cod_profesion: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    docum_despacho: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    bloquea_nomtit: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    user_transaccion: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    bloquea_cobranza: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    orden_cheque: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    porcentaje: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    es_provesp: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_desueldo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_retenc: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_entidadpub: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    es_acredito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_clase_clie: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    nom_localidad: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    nom_aux2: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    nom_aux3: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    fecha_auxiliar: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_aux: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nro_doc_uni_aux: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    nro_documento: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    Parentezco: {
      type: DataTypes.CHAR(120),
      allowNull: true
    },
    cod_aux: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cod_aux2: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    nom_lugar: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    nom_origen: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    CI_H1: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    CI_H2: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    CI_H3: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    CI_H4: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    CI_H5: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    CI_H6: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    N_H1: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    N_H2: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    N_H3: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    N_H4: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    N_H5: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    N_H6: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    FN_H1: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    FN_H2: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    FN_H3: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    FN_H4: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    FN_H5: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    FN_H6: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    Deporte: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Hobby: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FechaAniversario: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Color_Favorito: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ColorFConyugue: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ColorF_H1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ColorF_H2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ColorF_H4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ColorF_H5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Lugar_Frecuente: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LugarFConyugue: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LugarF_H1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LugarF_H2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LugarF_H3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LugarF_H4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LugarF_H5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Comida_Preferida: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ComidaPConyugue: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ComidaF_H1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ComidaF_H2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ComidaF_H3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ComidaF_H4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ComidaF_H5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ColorF_H3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Color_H3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ColorF_H6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ComidaF_H6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LugarF_H6: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lfrec: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    fec_alta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cod_conytit: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    nom_conytit: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    descuento: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cpp_mantit',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_cpp_mantit",
        unique: true,
        fields: [
          { name: "cod_tit" },
        ]
      },
    ]
  });
};
