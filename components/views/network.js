// Here we define the routes for the URLs and error handler

// Import Librarier
const express = require('express');
// Import own Functions
const controller  = require('./controller');
//const response = require('../../../network/response');

const router = express.Router();

//GET method for render views
router.get('/', function(req, res) {
    controller.getArticles()
        .then((arts)=> {
            res.render('index', {
                title: 'My new Hello World',
                articles: arts
            })
        })
        .catch(err => {
            res.render('error', {
                title: 'ERROR',
                err: err
            })
        });
    
})

router.get('/add', function(req, res){
    res.render('add_article', {
        title: 'Add Articles',
    });
})

//get Single article
router.get('/:id', function(req, res){
    controller.getSingleArticle(req.params.id)
        .then((x)=>{
            console.log(x);
            res.render('article', {
                title: x.title,
                article: x
            })
        })
        .catch(err=> {
            console.error('[Error] Error Single Article', err);
            res.render('error',{
                title: 'ERROR',
                err: err
            })
        })
})

router.post('/add', function(req, res){
    controller.postArticles(req.body.title,req.body.author,req.body.body)
        .then((x)=> {
            res.redirect('/view/');
        })
        .catch(err => {
            res.render('error', {
                title: 'ERROR',
                err: err
            })
        });
})

router.get('/edit/:id', function(req, res){
    controller.getSingleArticle(req.params.id)
        .then((x)=>{
            res.render('edit_article', {
                title: 'Edit '+x.title,
                article: x
            })
        })
        .catch(err=> {
            console.error('[Error] Error Single Article', err);
            res.render('error',{
                title: 'ERROR',
                err: err
            })
        });
})

router.post('/edit/:id', function(req, res){
    controller.updateArticle(req.params.id,req.body.title,req.body.author,req.body.body)
        .then((x)=> {
            res.render('article', {
                title: x.title,
                article: x
            })
        })
        .catch(err => {
            res.render('error', {
                title: 'ERROR',
                err: err
            })
        });
})

router.delete('/:id', function(req, res){
    controller.deleteArticle(req.params.id)
        .then((dato)=> {
            if(dato){
                res.send('Success');
                console.log('[Dato Eliminado] ',dato);
            }else{
                console.log('No se elimino el dato');
            }
        })
        .catch(err => {
            res.render('error', {
                title: 'ERROR',
                err: err
            })
        });
})

module.exports = router;