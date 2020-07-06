import * as mongoose from 'mongoose'
import { ObjectType, Field } from '@nestjs/graphql'
import { UserType } from 'src/users/types/user.type';

export const TodoSchema = new mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    writerid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: new Date().toISOString() },
    state: { type: Boolean, default: false }
})

