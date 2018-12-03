import MuseumSchema from '../models/MuseumSchema';
import * as mongoose from 'mongoose';

export default mongoose.model('Museum',MuseumSchema,'Museus');

