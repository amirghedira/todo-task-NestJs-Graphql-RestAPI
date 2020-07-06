import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose'
import { TodoSchema } from './todo.model'
import { TodoService } from './todo.service'
import { UserService } from "src/users/user.service";
import { UserModule } from "src/users/user.module";
import { TodoResolver } from "./todo.resolver";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }]), UserModule],
    providers: [TodoService, TodoResolver]
})
export class TodoModule {

}