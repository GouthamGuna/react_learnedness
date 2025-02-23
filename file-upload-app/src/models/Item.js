// models/Item.js
import { Schema, model } from 'mongoose';

const itemSchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
});

export default model('Item', itemSchema);
