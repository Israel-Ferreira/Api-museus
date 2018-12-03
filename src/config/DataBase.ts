import * as mongoose from 'mongoose';

class DataBase {
    private DB_URI = "mongodb://localhost:27017/museus";
    private DB_CONNECTION;

    constructor(){ }

    createConnection(){
        if(process.env.NODE_ENV === "production"){
            mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true});
            this.logger();
        }else{
            mongoose.connect(this.DB_URI,{useNewUrlParser: true});
            this.logger();
        }
    }


    logger(){
        this.DB_CONNECTION =  mongoose.connection;
        this.DB_CONNECTION.on('connected',() => console.log(`O Mongoose foi Iniciado`));
        this.DB_CONNECTION.on('error', err => console.log(`Erro na conexão: ${err}`));
        this.DB_CONNECTION.on('disconnected',() => console.log(`O Mongoose foi desconectado`));
    }


    closeConnection(message,callback){
        this.DB_CONNECTION.close(() => {
            console.log(`O mongoose foi desconectado por: ${message}`);
            callback();
        })
    }
}

export default DataBase;