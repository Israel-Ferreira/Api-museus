import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import DataBase from './config/DataBase';
import MuseumRouter from './routes/MuseumRouter';


class App {
    public app: express.Application;
    private database: DataBase;

    constructor(){
        this.app = express();
        this.middlewares();
        this.database = new DataBase();
        this.databaseConnection();
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use('/api/v1/museus',MuseumRouter.router);
    }


    databaseConnection(){
        this.database.createConnection();
    }

    public closeConnection(message,callback){
        this.database.closeConnection(message,callback);
    }
}

export default new App;