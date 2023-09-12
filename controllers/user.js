const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {

    const {q='hola como estas',nombre,apikey}= req.query;

    res.json({
              msg:'get API',
              q,
              nombre,
              apikey  
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
    
    const { id } = req.params;
    
    
    res.json({
              msg:'Put API',
              id
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