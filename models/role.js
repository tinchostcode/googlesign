const {Schema,model} = require ('mongoose');


const RoleSchema = Schema({

    rol:{
        type:String,
        required:[true,'El rol es OBLIGATORIO.'],
        //enum:['ADMIN-ROLE','USER-ROLE','VENTAS-ROLE']
    }
})


module.exports = model('ROLES',RoleSchema)
