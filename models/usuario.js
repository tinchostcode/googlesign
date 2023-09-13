const {Schema,model, Mongoose } = require ('mongoose');


const UsuarioSchema = Schema({

    nombre:{
     type:String,
     required:[true, 'El nombre es Obligatorio']  
    },

    correo:{
        type:String,
        required:[true, 'El mail es Obligatorio']  ,
        unique: true
    },

    password:{
        type:String,
        required:[true, 'la clave  es Obligatorio']  
    },
       
    img:{
        type:String
    },

    rol:{
        type:String,
        required:true,
        enum:['ADMIN_ROLE','USER_ROLE']
    },

    estado:{
        type:Boolean,
        default:true
    },

    google:{
        type:Boolean,
        default:false
    }

})

module.exports = model('Usuario',UsuarioSchema)

