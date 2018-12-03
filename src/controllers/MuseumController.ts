import Museum from '../repository';

class MuseumController {
    constructor() {}

    getMuseums(){
        return Museum.find({});
    }

    createMuseums(obj){
        return Museum.create(obj);
    }

    getMuseumById(id){
        return Museum.findById(id);
    }

    updateMuseum(id,obj){
        return Museum.findByIdAndUpdate(id,obj);
    }

    deleteMuseum(id){
        return Museum.remove(id);
    }

}

export default new MuseumController();

