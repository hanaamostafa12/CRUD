
import { model, Schema } from 'mongoose';


const authorSchema = new Schema({
  name: { type: String, required: true },
  bio: String,
  birthDate: Date,
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
});

export  const Author =  model('Author', authorSchema);