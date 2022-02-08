//const adendaModel = require('./model');
const db = require('../../../config/sequelizer');
const { Op } = require('sequelize');

async function existAdenda(id){
    const Adendas = await db.adenda.findAll({
        attributes: ['chassis','nro_ventas','abrev_deposito','chassis_aux1','cod_tit','nom_tit','fec_vta_0km','cod_moneda','nro_doc_uni','nro_motor2','nom_color2','nom_modelo2','cod_moneda','precio_fabrica','precio','conversion','desc_a','desc_b','observaciones'],
        include:[
            {
                model: db.ct_vehiculo,
                attributes: ['chassis','cod_marca','cod_modelo','año_modelo','cod_master','tipo_caja'],
                include:[
                    {
                        model: db.marca,
                        attributes:['nom_marca'],
                    },
                    {
                        model:db.modelo,
                        attributes: ['cod_modelo'],
                        include:[
                            {
                                model: db.segmento,
                                attributes:['nom_segmento'],
                            }
                        ]
                    }
                ]
            },
            {
                model: db.deposito,
                attributes: ['cod_tit','numerador'],
                include:{
                    model: db.sitio,
                    attributes:['nom_sitio'],
                }
            },
            {
                model: db.color,
                attributes: ['nom_color'],
            },
            {
                model: db.vendedor,
                attributes: ['nom_vendedor'],
            }
        ],
        where: {
            chassis_aux1: {
                [Op.eq]:id,
            }
        },
//        raw: false,
    });
var Contrato = [];
var Accesorios = [];
    if (Adendas.length > 0){
        Contrato = await db.contrato.findAll({
            attributes: ['chassis','observacionesp', 'tipo_documento','tipo_doc','observacionesp'],
            include:[
                {
                    model: db.titular,
                    attributes: ['nom_tit','dir_particular','tel_particular','tel_celular','email_tit','nro_doc_uni'],
                }],
            where: {
                cod_tit: Adendas[0].cod_tit,
                nro_ventas: Adendas[0].nro_ventas,
                abrev_deposito: Adendas[0].abrev_deposito,

            },
        });
        Accesorios = await db.otu.findAll({
            attributes: ['item', 'descripcion', 'precio_venta'],
            where: {
                chassis: Adendas[0].chassis_aux1,
            },
            raw:true,
        });
        //console.log(Accesorios);
    }
    return [Adendas[0],Contrato[0],Accesorios];
}
module.exports = {
    exist: existAdenda,
}