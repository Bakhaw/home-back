import mongoose from 'mongoose';

const ChambreSchema = new mongoose.Schema({
  name: String,
  checked: Boolean,
  expansive: Boolean
}, { versionKey: false })

export default mongoose.model('Chambre', ChambreSchema, 'chambre')