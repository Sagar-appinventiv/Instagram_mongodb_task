import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minlength: 6
    },
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    follower_count:{
        type: Number,
        default: 0
    },
    following_count:{
        type: Number,
        default: 0
    },
    dob:{
        type: Date,
    },
    boi: {
        type: String,
    },
    createdAT:{
        type: Date,
        default: Date.now()
    },
    updatedAT:{
        type: Date,
        default: Date.now()
    }
    
});
const User = mongoose.model("User", UserSchema);
export default User;