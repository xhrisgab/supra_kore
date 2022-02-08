//Store's functions, here we using mongoose methods for Create, Read, Update, Delete.

const Model = require('./model');

// Get email, verification and profile fields from and User finded by email
async function getUser(filterEmail) {
    return new Promise((resolve, reject) => {
        filter = { email: filterEmail };
        Model.findOne(filter, 'email verification profile', (err, user) => {
            if(err) {
                reject(err);
                return false;
            }
            resolve(user);
        });
    })
}

//Get all information from some User
async function getFullUser(filterEmail) {
    return new Promise((resolve, reject) => {
        filter = { email: filterEmail };
        Model.findOne(filter, (err, user)=> {
            if(err) {
                reject(err);
                return false;
            }
            resolve(user);
        });
    })
}

// Register a new User
async function registerAnUser(newUser) {
    const nuevoUsuario = new Model(newUser);
    await nuevoUsuario.save()
        .then( savedUser => {
            return savedUser
        })
        .catch(err => {
            
        })
//    return savedUser;
}

//Update verification status from an User
async function updateEmail(id){
    const estado = await Model.findByIdAndUpdate(id, { verification: { isVerified: true, code: null } }, (err, verificado) => {
        if(err){
            console.log("[Store Error]" + err);
        } else {
            console.log('{ email Verified:', verificado.email,'}' );
        }
    });
    return estado;
}

module.exports = {
    register: registerAnUser,
    list: getUser,
    fullUser: getFullUser,
    updateEmail: updateEmail,
}