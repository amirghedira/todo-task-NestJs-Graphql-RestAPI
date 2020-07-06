import * as mongoose from 'mongoose'
import { ObjectType, Field } from '@nestjs/graphql'


export const UserSchema = new mongoose.Schema({

    username: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    password: { type: String, required: true },
    adminAccess: { type: Boolean, default: false }

})
