// Import libraries and utils for this module
const store  = require('./store');
const Retorna = require('../../lib/utils');
const codPDF = require('../../lib/jspdf_cot');

function reporteCotizador(y){
    return new Promise (async (resolve, reject)=> {
        //var yy=[];
        await store.exist(y)
            .then((x) =>{
                x[0].precUnidad=Retorna.RetornaNunero(x[0].precUnidad);
                x[0].montoPorcentajeDescuento=Retorna.RetornaNunero(x[0].montoPorcentajeDescuento);
                x[0].porcentDescuento=Retorna.RetornaNunero(x[0].porcentDescuento);
                x[0].accesorios=Retorna.RetornaNunero(x[0].accesorios);
                x[0].precTotal=Retorna.RetornaNunero(x[0].precTotal);
                x[0].cuotaInicial=Retorna.RetornaNunero(x[0].cuotaInicial);
                x[0].saldo=Retorna.RetornaNunero(x[0].saldo);
                x[0].cuotaMensual=Retorna.RetornaNunero(x[0].cuotaMensual);
                x[0].tasaInteres=Retorna.RetornaNunero(x[0].tasaInteres);
                codPDF(x).then((ff)=>{
                    resolve(ff);
                }).catch(err=>{
                    reject(err);
                    return false;
                });
            })
            .catch(err=> {
                reject(err);
                return false;
            })
    });
/*    console.log(x);
    var yy = adendaPDF(x);
    return yy;*/
};


module.exports = {
    reporteCotizador,
}