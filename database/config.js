const mongoose = require('mongoose'); 


const dbConnection = async() => {
    
try {
    
    await mongoose.connect(process.env.MONGODB,{
        
       
    });
   
    console.log('Base de datos Conectada..')

} catch (error) {

    console.log(error)
    throw new Error('Error al conectar BD...')
}

}

module.exports = {
    dbConnection
}