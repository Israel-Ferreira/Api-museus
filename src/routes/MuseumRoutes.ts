import * as httpStatus from 'http-status';
import MuseumController from '../controllers/MuseumController';

const sendResp = (res,statusCode,body) => {
    res.status(statusCode).json({'result':body});
}

class MuseumRoutes {
    constructor(){ }

    getAll(req,res, next){

        MuseumController.getMuseums()
            .then(resp => sendResp(res,httpStatus.OK,resp))
            .catch(err => sendResp(res,httpStatus.INTERNAL_SERVER_ERROR,err.message));
    }

    getById(req,res,next){
        let { id } = req.params;

        if(!id){
            sendResp(res,httpStatus.NOT_FOUND,"Id não encontrado");
        }

        MuseumController.getMuseumById(id)
            .then(resp => sendResp(res,httpStatus.OK,resp))
            .catch(err => console.error(err.message));
    }


    update(req,res,next){
        let { id } = req.params;
        let {nomeDoMuseu, endereco, latitude,longitude, fotoUrl } = req.body;

        if(nomeDoMuseu && endereco && latitude && longitude  && fotoUrl){
            let obj = {nomeDoMuseu,endereco,latitude,longitude, fotoUrl};

            MuseumController.updateMuseum(id,obj)
                .then(resp => sendResp(res,httpStatus.OK,resp))
                .catch(err => console.error(err.message));
        }
    }


    createMuseum(req,res,next){
        const { nomeDoMuseu, endereco, latitude, longitude, fotoUrl } = req.body;
        if(nomeDoMuseu && endereco && latitude && longitude && fotoUrl){
            let obj =  {nomeDoMuseu, endereco, latitude, longitude, fotoUrl};
            MuseumController.createMuseums(obj)
                .then(resp => sendResp(res,httpStatus.CREATED,'Museu Adicionado com sucesso'))
                .catch(err => console.error(err.message));
        }else{
            sendResp(res,httpStatus.INTERNAL_SERVER_ERROR,"Erro: Campos Vazios");
        }
    }

    deletar(req,res,next){
        let { id } = req.params;
        
        MuseumController.deleteMuseum(id)
            .then(resp => sendResp(res,httpStatus.OK,'Museu Apagado com sucesso'))
            .catch(err => console.error(err.message));
    }
}

export default new MuseumRoutes();