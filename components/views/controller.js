// Import libraries and utils for this module
const store  = require('./store');

/**
 * @param {*} filterEmail - String that refers to the email searched
 * 
 * getUser Function looking for an user and it returns "_id", "verification" and "email" fields if it exist.
 */
 function getArticles() {
    return new Promise(async (resolve, reject) => {
        await store.list()
            .then((articulos) => {
                resolve(articulos);
            })
            .catch(err => {
                reject(err);
            })
    });
}

function getSingleArticle(id){
    return new Promise (async (resolve, reject)=> {
        await store.exist(id)
            .then((x) =>{
                //console.log('[Controller] ',x);
                resolve(x);
            })
            .catch(err=> {
                reject(err);
                return false;
            })
    });
}

function postArticles(title, author, body){
    return new Promise (async (resolve, reject) => {
        articulo = {
            title: title,
            author: author,
            body: body
        };
        if(!title || !author || !body) {
            console.error('[User_Controller] Title, Author or body are empty');
            reject('Uno de los datos: Titulo, Author o Body esta vacio');
            return false;
        }
        await store.register(articulo)
            .then((x)=> {
                resolve('Se grabo el articulo: ' + x +', con exito!');
            })
            .catch(err=>{
                reject(err);
                return false;
            })
    });
}

function updateArticle (id, title, author, body) {
    return new Promise (async (resolve, reject)=>{
        articulo={
            title: title,
            author: author,
            body: body,
        }
        if(!title || !author || !body) {
            console.error('[User_Controller] Title, Author or body are empty');
            reject('Uno de los datos: Titulo, Author o Body esta vacio');
            return false;
        }
        await store.update(id,articulo)
            .then((x)=> {
                resolve(x);
            })
            .catch(err=>{
                reject(err);
                return false;
            });
    })
}

function deleteArticle(id) {
    return new Promise(async (resove, reject)=>{
        await store.remove(id)
            .then((articulo)=>{
                resolve(articulo);
            })
            .catch(err =>{
                reject(err);
                return false;
            });
    })
}

module.exports = {
    getArticles,
    getSingleArticle,
    postArticles,
    updateArticle,
    deleteArticle
};