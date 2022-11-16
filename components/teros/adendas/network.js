// Import Librarier
const express = require('express');
// Import own Functions
const controller  = require('./controller');
const fs = require('fs');
//const response = require('../../../network/response');

const router = express.Router();

/*/render page "adenda/""
router.get('/', function(req, res){
    res.render('adenda')
})
*/

//get Search
router.get('/', function(req, res){

    res.render('adenda', {
        title: 'Reporte de Adendas',
    })
})

//get Single article
router.post('/', function(req, res){
    console.log(req.body.chassis);
    controller.getAdenda(req.body.chassis)
        .then((x)=>{
            res.render('adenda_id', {
                title: 'Reporte de Adendas',
                adenda: x[0],
                contrato: x[1],
                accesorios: x[2],
                buscado: {chassis: req.body.chassis},
            })
        })
        .catch(err=> {
            console.error('[Error] Error Adenda', err);
            res.render('error',{
                title: 'ERROR',
                err: err
            })
        })
})

router.post('/repadenda/:chassis',function(req, res){
    controller.reportePdf(req.params.chassis)
        .then((x)=>{
            const stream = fs.createReadStream('public/temp.pdf');
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
router.post('/rephdd/:chassis',function(req, res){
    controller.reportHHD(req.params.chassis)
        .then((x)=>{
            const stream = fs.createReadStream('public/hdd.pdf');
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
router.post('/repotu/:chassis',function(req, res){
    controller.reportOTU(req.params.chassis)
        .then((x)=>{
            const stream = fs.createReadStream('public/otu.pdf');
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


router.post('/repcontrato',function(req, res){
    controller.reportePdf(req.body.chassis)
        .then((x)=>{
            res.download('public/temp.pdf',function(err){
            console.log("Error: ", err);
        })
    })
        .catch(err=> {
            console.error('[Error] Error Adenda', err);
            res.render('error',{
                title: 'ERROR',
                err: err
            })
        })
})

router.post('/repotu',function(req, res){
    controller.reportOTU(req.body.chassis)
        .then((x)=>{
            res.download('public/otu.pdf',function(err){
            console.log("Error: ", err);
        })
    })
        .catch(err=> {
            console.error('[Error] Error Adenda', err);
            res.render('error',{
                title: 'ERROR',
                err: err
            })
        })
})

router.post('/rephdd',function(req, res){
    controller.reportHHD(req.body.chassis)
        .then((x)=>{
            res.download('public/hdd.pdf',function(err){
            console.log("Error: ", err);
        })
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