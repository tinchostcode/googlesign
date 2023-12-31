const express= require('express');
const cors=require('cors');
const { dbConnection }  = require('../database/config');

class Server{
    constructor(){

        this.app = express();
        this.port= process.env.PORT;
        this.usuariosPatch = '/api/usuarios';
        this.authPath = '/api/auth';
       
        


        //conectar base
        this.conectarDB();

        //middlewares
        this.middlewares();

        //Routes
        this.routes();

    }
   
    async conectarDB() {
        
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json()); 
       this.app.use(express.static('public')); 
    }
 
    routes(){
        this.app.use(this.authPath,require('../routes/auth'));
        this.app.use(this.usuariosPatch,require('../routes/user'));
        


    }

   




    listen(){
        this.app.listen(process.env.PORT, () =>{
        console.log('Server On PORT:',process.env.PORT)
        })
    }
}

module.exports=Server;