import mongoose from 'mongoose';

const CuisineSchema = new mongoose.Schema({
  name: String,
  checked: Boolean,
  expansive: Boolean
}, { versionKey: false })

export default mongoose.model('Cuisine', CuisineSchema, 'cuisine')