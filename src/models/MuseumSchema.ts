import { Schema } from 'mongoose';

const MuseumSchema =  new Schema({
    nomeDoMuseu: {type: String, required: true},
    endereco: {type: String, required: true},
    latitude: {type: String, required: true},
    longitude: {type: String, required: true},
    fotoUrl:{type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

MuseumSchema.pre('save',() => {
    if(!this.createdAt){
        this.createdAt = new Date();
    }
})


export default MuseumSchema;