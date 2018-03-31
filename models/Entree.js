import mongoose from 'mongoose';

const EntreeSchema = new mongoose.Schema({
  name: String,
  checked: {
    type: Boolean,
    required: false
  },
  expansive: {
    type: Boolean,
    required: false
  }
}, { versionKey: false })

export default mongoose.model('Entree', EntreeSchema, 'entree')