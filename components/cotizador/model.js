/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Cotizador', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ci: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    nomCli: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dirCli: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    telfOficinaCli: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    telfDomicilioCli: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    faxCli: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    correoCasillaCli: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    codModelo: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    codMaster: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    modelo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    chasis: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    anio: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    modalidad: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    precUnidad: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    precUnidadSus: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    precTotal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    precTotalSus: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cuotaInicial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cuotaInicialSus: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    saldo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    saldoSus: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PlazoFinancia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tasaInteres: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tasaInteresSus: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cuotaMensual: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cuotaMensualSus: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    porcentDescuento: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    montoPorcentajeDescuento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    montoPorcentajeDescuentoSus: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    banco: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    combustible: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cilindrada: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    numCilindros: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    salidMaxHP: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    parTorsion: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    motor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipoCaja: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cantPuertas: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sistemaFrenosABS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    airbags: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rielesTecho: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aros: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aireAcondicionado: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tapiz: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    faros: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dvd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    radio: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pisos: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    totalLongitud: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    totalAncho: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    totalAltura: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    entreEje: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    capCarga: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    capCargaCombustible: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CapacidadAsientos: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    traccion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipoTraccion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nombreVendedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    emailVendedor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tel_Empresa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tel_Celular: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dir_Empresa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nom_localidad: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fechaCreacion: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    cambioMoneda: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    carroceria: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    barraLateral: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipoCliente: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    abrevVendedor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    abrevLocalidad: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    codVendedor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    accesorios: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sucursal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nroFacturar: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    localidad: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fecNac: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    backOrder: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    colotInter: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ventaEmp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    formulario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    seguro: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    MontoSeguro: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Imprime_Seguro: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Autorizado_Por: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Fecha_Envio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Mensaje: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Usuario_Mod: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Fecha_Registro: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.fn('getdate')
    },
    usuario_venta: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    forma_pago: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    cod_img: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cod_tipo_precio: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Cotizador',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK__Cotizado__3214EC2739787C26",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
