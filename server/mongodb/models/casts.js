import mongoose from 'mongoose';
// Define the Cast schema
const castSchema = new mongoose.Schema({
  adult: { type: Boolean, default: false },
  gender: { type: Number },
  id: { type: Number, required: true },
  known_for_department: { type: String },
  name: { type: String, required: true },
  original_name: { type: String, required: true },
  popularity: { type: Number },
  profile_path: { type: String },
  cast_id: { type: Number },
  character: { type: String, required: true },
  credit_id: { type: String },
  order: { type: Number },
});

// Create a Cast model based on the schema
const Credits = mongoose.model('Cast', castSchema);

export default Credits;
