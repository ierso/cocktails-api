import mongoose, { Schema } from 'mongoose';

//create schema
const UserSchema = new Schema({
    googleID: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
})

export default mongoose.model('users', UserSchema);