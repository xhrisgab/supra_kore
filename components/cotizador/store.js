
const db = require('../../config/sequelizer');
const { Op } = require('sequelize');
const { Sequelize } = require('../../config/sequelizer');

async function existCotizacion(id){

    const Proforma = await db.cotizador.findAll({
        //attributes: [],
        where: {
            ID: {
                [Op.eq]:id,
            }
        },
    });
    console.log(Proforma[0].codModelo);

var Cotizacion=[];
var accesorios = [];

    if (Proforma.length>0) {
        accesorios = await db.cotAccesorio.findAll({
            attributes:['codModelo','codCotizacion','codItem'],
            include:[
                {
                    model: db.cpf_detxitem,
                    attributes:['cod_item','descripcion','nom_origen'],
                    where: {
                        cod_item: {
                            [Op.col]:'CotizadorAccesorio.codItem',
                        }
                    }
                }
            ],
            where: {
                codCotizacion: {
                    [Op.eq]:id,
                },
                codModelo:{
                    [Op.eq]:Proforma[0].codModelo,
                }
            },
            //row: true
        })
    }

    return Cotizacion= [Proforma[0],accesorios];
}
module.exports = {
    exist: existCotizacion,
}