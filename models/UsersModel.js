import mongoose from "mongoose";

const UsersSchema = mongoose.Schema(                                
    {
        name: {
            type: String,
            required: true
        },

        mail: {
            type: String,
            required: true,
            unique: true
        },

        age: {
            type: Number
        }
    }
);

const UsersModel = mongoose.model('User', UsersSchema);

export default UsersModel;