import mongoose from 'mongoose';

const BathroomSchema = new mongoose.Schema({
  name: String,
  checked: Boolean,
  expansive: Boolean
}, { versionKey: false })

export default mongoose.model('Bathroom', BathroomSchema, 'bathroom')