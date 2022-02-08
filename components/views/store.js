//Store's functions, here we using mongoose methods for Create, Read, Update, Delete.

const Model = require('./model');

// Get email, verification and profile fields from and User finded by email
async function getArticles() {
    return new Promise((resolve, reject) => {
        Model.find({}, (err, articulos) => {
            if(err) {
                reject(err);
                return false;
            }
            resolve(articulos);
        });
    })
}

async function getOneArticle(id){
    const articulo = await Model.findById(id, function(err, dato){
        if(err){
            console.log(err);
            return err;
        } /*else {
            console.log('[Store] ',dato);
        }*/
    });
    return articulo;
}

async function postArticles(articulo) {
    const nuevoArticulo = new Model(articulo);
    await nuevoArticulo.save((err, articulo)=>{
        if(err){
            console.error('[Save Error DB]', err);
            return;
        }else{
            console.log('se creo el articulo:',articulo);
            return articulo;
        }
    })
}


async function updateArticle(id, articulo) {
    const nuevoDato = await Model.findByIdAndUpdate(id, articulo, function(err, dato){
        if(err){
            console.error(err);
            return err;
        } else {
            console.log("updated: ", dato);
        }
    })
    return nuevoDato;
}

function removeArticle(id){
    return Model.findByIdAndRemove(id);
}


module.exports = {
    remove: removeArticle,
    list: getArticles,
    register: postArticles,
    exist: getOneArticle,
    update: updateArticle,
}