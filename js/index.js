import express from 'express' 
import cors from 'cors' 
import http from 'http'


class server{    
    constructor(){
        this.port = process.env.PORT; 
        this.app = express();
        this.server = http.createServer(this.app)
        this.middlewares();
        // this.sockets();
        }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'))
    }
        
    listen(){ 
        this.app.listen(this.port,()=>{
            console.log(`el servidor esta corriendo en el servidor ${this.port}`);
        });
    }
}

export default server 
