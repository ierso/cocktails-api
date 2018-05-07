import mongoose, { Schema } from 'mongoose';

//create schema
const IdeaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    _user: { 
        type: Schema.Types.ObjectId, 
        ref: 'users'
    }
})

export default mongoose.model('ideas', IdeaSchema);