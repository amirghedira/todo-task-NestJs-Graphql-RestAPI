import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './users/user.module';
import { TodoModule } from './todos/todo.module';
import { AuthModule } from './auth/auth.module';


@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://amirghedirq:RVaeoXZ1Lrk1U9s2@cluster0-bjmuu.mongodb.net/todosList?retryWrites=true&w=majority'),
        TodoModule,
        UserModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule { }
