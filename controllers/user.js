const { response } = require('express')

const usuariosGet = (req, res = response) => {
    res.json({
              msg:'get API'  
    });
}

const usuariosPost = (req, res = response) => {
   
    const {nombre,edad,altura}= req.body;


   
    res.json({
              msg:'Post API' ,
              nombre,
              edad,
              altura
    });
}

const usuariosPut = (req, res = response) => {
    res.json({
              msg:'Put API'  
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
              msg:'Delete API'  
    });
}


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