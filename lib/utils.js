//Import libraries
const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

//Open file with private key.
const pathToKey = path.join(__dirname, '.', 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

/**
 * -------------- HELPER FUNCTIONS ----------------
 */

/**
 * 
 * @param {*} password - The plain text password
 * @param {*} hash - The hash stored in the database
 * @param {*} salt - The salt stored in the database
 * 
 * This function uses the crypto library to decrypt the hash using the salt and then compares
 * the decrypted hash/salt with the password that the user provided at login
 */
 function validPassword(password, hash, salt) {
    var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
}

/**
 * 
 * @param {*} password - The password string that the user inputs to the password field in the register form
 * 
 * This function takes a plain text password and creates a salt and hash out of it.  Instead of storing the plaintext
 * password in the database, the salt and hash are stored for security
 * 
 * ALTERNATIVE: It would also be acceptable to just use a hashing algorithm to make a hash of the plain text password.
 * You would then store the hashed password in the database and then re-hash it to verify later (similar to what we do here)
 */
 function genPassword(password) {
    var salt = crypto.randomBytes(32).toString('hex');
    var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    
    return {
      salt: salt,
      hash: genHash
    };
}


/**
 * @param {*} user - The user object.  We need this to set the JWT `sub` payload property to the MongoDB user ID
 */
 function issueJWT(user) {
    const _id = user._id;
    const superU = user.isSuper;
    const adminU = user.isAdmin;
  
    const expiresIn = '1d';
  
    const payload = {
      sub: _id,
      isSuper: superU,
      isAdmin: adminU,
      iat: Date.now()
    };
  
    const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });
  
    return {
      token: "Bearer " + signedToken,
      expires: expiresIn
    }
  }
  
  /**
   * @param {*} length - The length param is the max of chars generated in the function
   * @param {*} chars - The "chars camp" is one string with the characters which will been selected (usually 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ)
   */
  function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }
  
//Convierte Numero en en Texto de formato Moneda 0,000.00
function RetornaNunero(x){
  var y = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'BOL',}).format(x);
    var z= y.substr(4);
  return z;
};


//Combierte Numero en Literal
function Unidades(num){

  switch(num)
  {
      case 1: return "un";
      case 2: return "dos";
      case 3: return "tres";
      case 4: return "cuatro";
      case 5: return "cinco";
      case 6: return "seis";
      case 7: return "siete";
      case 8: return "ocho";
      case 9: return "nueve";
  }

  return "";
}//Unidades()

function Decenas(num){

  decena = Math.floor(num/10);
  unidad = num - (decena * 10);

  switch(decena)
  {
      case 1:
          switch(unidad)
          {
              case 0: return "diez";
              case 1: return "once";
              case 2: return "doce";
              case 3: return "trece";
              case 4: return "catorce";
              case 5: return "quince";
              default: return "dieci" + Unidades(unidad);
          }
      case 2:
          switch(unidad)
          {
              case 0: return "veinte";
              default: return "veinti" + Unidades(unidad);
          }
      case 3: return DecenasY("treinta", unidad);
      case 4: return DecenasY("cuarenta", unidad);
      case 5: return DecenasY("cincuenta", unidad);
      case 6: return DecenasY("sesenta", unidad);
      case 7: return DecenasY("setenta", unidad);
      case 8: return DecenasY("ochenta", unidad);
      case 9: return DecenasY("noventa", unidad);
      case 0: return Unidades(unidad);
  }
}//Unidades()

function DecenasY(strSin, numUnidades) {
  if (numUnidades > 0)
  return strSin + " y " + Unidades(numUnidades)

  return strSin;
}//DecenasY()

function Centenas(num) {
  centenas = Math.floor(num / 100);
  decenas = num - (centenas * 100);

  switch(centenas)
  {
      case 1:
          if (decenas > 0)
              return "ciento " + Decenas(decenas);
          return "cien";
      case 2: return "doscientos " + Decenas(decenas);
      case 3: return "trescientos " + Decenas(decenas);
      case 4: return "cuatrocientos " + Decenas(decenas);
      case 5: return "quinientos " + Decenas(decenas);
      case 6: return "seiscientos " + Decenas(decenas);
      case 7: return "setecientos " + Decenas(decenas);
      case 8: return "ochocientos " + Decenas(decenas);
      case 9: return "novecientos " + Decenas(decenas);
  }

  return Decenas(decenas);
}//Centenas()

function Seccion(num, divisor, strSingular, strPlural) {
  cientos = Math.floor(num / divisor)
  resto = num - (cientos * divisor)

  letras = "";

  if (cientos > 0)
      if (cientos > 1)
          letras = Centenas(cientos) + " " + strPlural;
      else
          letras = strSingular;

  if (resto > 0)
      letras += "";

  return letras;
}//Seccion()

function Miles(num) {
  divisor = 1000;
  cientos = Math.floor(num / divisor)
  resto = num - (cientos * divisor)

  strMiles = Seccion(num, divisor, "un mil", "mil");
  strCentenas = Centenas(resto);

  if(strMiles == "")
      return strCentenas;

  return strMiles + " " + strCentenas;
}//Miles()

function Millones(num) {
  divisor = 1000000;
  cientos = Math.floor(num / divisor)
  resto = num - (cientos * divisor)

  strMillones = Seccion(num, divisor, "un millon de", "millones de");
  strMiles = Miles(resto);

  if(strMillones == "")
      return strMiles;

  return strMillones + " " + strMiles;
}//Millones()

function NumeroALetras(num) {
  var data = {
      numero: num,
      enteros: Math.floor(num),
      centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
      letrasCentavos: "",
      letrasMonedaPlural: 'Córdobas',//“PESOS”, 'Dólares', 'Bolívares', 'etcs'
      letrasMonedaSingular: 'Córdoba', //“PESO”, 'Dólar', 'Bolivar', 'etc'

      letrasMonedaCentavoPlural: "CENTAVOS",
      letrasMonedaCentavoSingular: "CENTAVO"
  };
  //Calculo para centavos
  var xy= data.centavos-((Math.floor(data.centavos/10))*10);
  if (data.centavos == 0) {

      data.centavos = "y 00 / 100";
  } else {
    if (data.centavos < 10){
      data.centavos= "y 0"+data.centavos+" / 100";
    }else{
      data.centavos= "y "+data.centavos+" / 100";
    }
  }

  if(data.enteros == 0)
      return "Cero " + data.centavos;// + data.letrasMonedaPlural + " " + data.letrasCentavos;
  if (data.enteros == 1)
      return Millones(data.enteros) + " " + data.centavos;// + " " + data.letrasMonedaSingular + " " + data.letrasCentavos;
  else
      return Millones(data.enteros) + " " + data.centavos; //+ " " + data.letrasMonedaPlural + " " + data.letrasCentavos;
}
/// Fin numero Literal

//


module.exports.NumeroALetras = NumeroALetras;
module.exports.RetornaNunero = RetornaNunero;
module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;
module.exports.issueJWT = issueJWT;
module.exports.randomString = randomString; 