import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose'
import { TodoSchema } from './todo.model'
import { TodoController } from './todo.controller'
import { TodoService } from './todo.service'
import { UserService } from "src/users/user.service";
import { UserModule } from "src/users/user.module";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }]), UserModule],
    controllers: [TodoController],
    providers: [TodoService]
})
export class TodoModule {

}