// Import libraries and utils for this module
const store  = require('./store');
const utils = require('../../../lib/utils');
const mailer = require('../../../lib/mailer');

/**
 * @param {*} filterEmail - String that refers to the email searched
 * 
 * getUser Function looking for an user and it returns "_id", "verification" and "email" fields if it exist.
 */
 function getUser(filterEmail) {
    return new Promise(async (resolve, reject) => {
        
        const usuario = await store.list(filterEmail);
        if(usuario){
            respuesta = {
                body: usuario,
                alert:{},
                status: 200
            }
            resolve(respuesta);
        }else{
            respuesta = {
                body: 'no existe el usuario',
                alert: {},
                status: 200
            };
            resolve(respuesta);
        }
        
    });
}

/**
 * @param {*} email - String with the email of a new user
 * @param {*} pass - The "pass" is the password of the user
 * 
 * This function create a new user in Data Base, first verify if it exist then it calls "genPassword" from "utils" file to generate the hash and salt, it gives security to the user's password.
**/
function registerUser(email, pass){
    return new Promise(async(resolve, reject) => {
        if(!email || !pass){
            console.error('[User_controller] email and/or password are empty');
            reject('Los campos email o password estan vacios o son incorrectos');
            return false;
        }

        if(await store.list(email)){
            resolve('El usuario con el email: '+ email +' ya existe en el sistema');
        } else {

            const saltHash = utils.genPassword(pass);
            const salt = saltHash.salt;
            const hash = saltHash.hash;
            const x = utils.randomString(7,'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');

            const newUser = {
                email: email,
                hash: hash,
                salt: salt,
                verification: {
                    code: x,
                    isVerified: false, 
                },
            };
            await mailer.codeUserMail(email, x)
                .then(() => {
                    console.log('correo enviado correctamente a:', email);
                    alert = {};
                })
                .catch(err => {
                    alert = { statusEmail: "the code hasn't been sended by email, please login and try again!" };
                    console.error(err);
                });
            const user = store.register(newUser);
            resolve(user, alert);
        }
    });
}

/**
 * @param {*} email - String with the email from a user for verify if it exist
 * @param {*} pass - The "pass" is the password of the user
 * 
 * The function loginUser use other methods from utils for validate password and looking for an email in data base with the method "fullUser" from "store" file.
 */
 function loginUser(email, pass){
    return new Promise(async (resolve, reject) =>{
        await store.fullUser(email)
            .then((usuario) => {
                if(!usuario) {
                    respuesta = {
                        body: {},
                        alert: 'El usuario no existe!'
                    }
                    resolve(respuesta);
                }else{
                    const isValid = utils.validPassword(pass, usuario.hash, usuario.salt);
                    if(isValid) {
                        const tokenObject = utils.issueJWT(usuario);
                        respuesta = {
                            body: { success: true, token: tokenObject.token, expiresIn: tokenObject.expires },
                            alert: {},
                            status: 201
                        }
                        resolve(respuesta);
                    } else {
                        respuesta = {
                            body: { success: false, token: null },
                            alert: 'Se ingreso un password incorrecto!',
                            status: 403
                        }
                        resolve(respuesta);
                    }
                }
            })
            .catch(err => {
                console.error('[User_controller] error al validar el email y password');
                respuesta= {
                    er: err,
                    status: 500
                }
                reject(respuesta);
                return false;
            });

    });
}

module.exports = {
    getUser,
    registerUser,
}