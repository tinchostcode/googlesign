const {response} = require('express');
const Usuario = require('../models/usuario')

const login = async (req,res = response) =>
{

    const{correo,password} = req.body;
    
    try {

        //verificar si existe el usuario
        const usuario = await Usuario.findOne({correo});

        if(!usuario){
                return res.status(400).json({
                    msg:'Usuario /Password no son correctos - correo'
                });
        }

        //Si el usuario esta activo
        if(!usuario.estado){
            return res.status(400).json({
                msg:'Usuario /Password no son correctos - estado:false'
            });
        }
        //verificar la constraseña
        const validPassword = bcrypt.compareSync(password,usuario.password);
        if(!validPassword){
            return res.status(400).json({
                msg:'Usuario /Password no son correctos - password'
            });
        }
    
        res.json({
            msg:'Login ok'
        })
     
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:'hable con el admin...'
        });
    }

   
    
}

module.exports = {
    login 
}