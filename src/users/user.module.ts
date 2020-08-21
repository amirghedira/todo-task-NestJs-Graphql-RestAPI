import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from './user.model'
import { UserService } from './user.service'
import { AuthService } from "src/auth/auth.service";
import { UserResolver } from "./user.resolver";
import { TodoSchema } from "src/todos/todo.model";


@Module({
    imports: [MongooseModule.forFeature([
        { name: 'User', schema: UserSchema },
        { name: 'Todo', schema: TodoSchema }
    ])],
    providers: [UserService, AuthService, UserResolver],
    exports: [UserService]
})
export class UserModule {

}