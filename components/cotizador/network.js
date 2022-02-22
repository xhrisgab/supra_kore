// Import Librarier
const express = require('express');
// Import own Functions
const controller  = require('./controller');
const fs = require('fs');

const router = express.Router();

router.get('/', function(req, res){

    res.render('proforma', {
        title: 'Reporte de Proforma',
    })
})

router.post('/',function(req, res){
    console.log(req.body.id);
    controller.reporteCotizador(req.body.id)
        .then((x)=>{
            const stream = fs.createReadStream('public/proforma.pdf');
            stream.pipe(res);
        })
        .catch(err=> {
            console.error('[Error] Error Adenda', err);
            res.render('error',{
                title: 'ERROR',
                err: err
            })
        })
})

module.exports = router;