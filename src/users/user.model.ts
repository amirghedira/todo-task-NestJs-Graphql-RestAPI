import * as mongoose from 'mongoose'


export const UserSchema = new mongoose.Schema({

    username: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    password: { type: String, required: true },
    adminAccess: { type: Boolean, default: false }

})
export interface User {
    _id: string;
    username: string;
    password: string;
    name: string;
    surname: string;
    adminAccess: boolean;
}