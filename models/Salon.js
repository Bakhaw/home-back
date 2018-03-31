import mongoose from 'mongoose';

const SalonSchema = new mongoose.Schema({
  name: String,
  checked: Boolean,
  expansive: Boolean
}, { versionKey: false })

export default mongoose.model('Salon', SalonSchema, 'salon')