import mongoose, { Schema } from 'mongoose';

//create schema
const CocktailSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    drinkID: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

export default mongoose.model('cocktails', CocktailSchema);