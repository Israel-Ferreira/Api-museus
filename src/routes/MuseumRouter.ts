import { Router } from 'express';
import MuseumRoutes from './MuseumRoutes';

class MuseumRouter {
    public router: Router;

    constructor(){
        this.router = Router();
        this.museumRouter();
    }

    museumRouter(){
        this.router.get("/hello",(req,res,next) => res.send({'result':"Hello World"}));
        this.router.get("/",MuseumRoutes.getAll);
        this.router.get('/:id',MuseumRoutes.getById);
        this.router.post('/new-museum',MuseumRoutes.createMuseum);
        this.router.put('/:id',MuseumRoutes.update);
        this.router.delete('/:id',MuseumRoutes.deletar);
    }

}


export default new MuseumRouter();