const { response, request } = require('express')
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs');



///////////////////////////////////////////////// USUARIO GET///////////////////////////////////////////////

const usuariosGet = (req = request, res = response) => {

    const {q='hola como estas',nombre,apikey}= req.query;

    res.json({
              msg:'get API',
              q,
              nombre,
              apikey  
    });
}

///////////////////////////////////////////////// USUARIO POST///////////////////////////////////////////////

const usuariosPost =  async(req, res = response) => {
    

    //const body= req.body;   // body voy a tomar todo lo que envia del body
    const {nombre, correo, password, rol} = req.body;
    const usuario =  new Usuario({nombre, correo, password, rol});

    
    
    //Encryptar contraseña - estas 2 lineas nada mas
    const salt =  bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password,salt)
    
    await usuario.save();
   
    res.json({
              msg:'post API - usuarioPost' ,
              usuario
    });
}
///////////////////////////////////////////////// USUARIO PUT///////////////////////////////////////////////

const usuariosPut = async(req, res = response) => {
    
    const { id } = req.params;
    const{_id,password,google,correo,...resto} =req.body; 

    if(password){
        const salt =  bcryptjs.genSaltSync(10);
        resto.password = bcryptjs.hashSync(password,salt)
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto );
    
    res.json({
              msg:'Put API',
              usuario
    });
}
////////////////////////////////////////////////USUARIO DELETE//////////////////////////////////////////
const usuariosDelete = (req, res = response) => {
    res.json({
              msg:'Delete API'  
    });
}

///////////////////////////////////////////////// USUARIO PATCH///////////////////////////////////////////////
const usuariosPatch = (req, res = response) => {
    res.json({
              msg:'Patch API'  
    });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}