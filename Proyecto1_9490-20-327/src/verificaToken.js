const jwt = require('jsonwebtoken');

function verificaToken(req, res, next){
    let token = 'hola' 
    token = req.cookies.token || req.headers["x-access-token"];
    console.log('token del verificador:', token);
    
    let tokenDesifrado
    try{
        tokenDesifrado = jwt.verify(token, 'textosupersecreto');
    }catch{
        return res.status(401).json({Error: 'Token no valido'})
    }
    req.tokenD = tokenDesifrado.id;
    next();
}

module.exports = verificaToken;