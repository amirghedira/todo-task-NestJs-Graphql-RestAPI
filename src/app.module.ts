import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './users/user.module';
import { TodoModule } from './todos/todo.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql'
@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: ['.env'] }),
        MongooseModule.forRoot(process.env.MONGO_INFO),
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
            cors: true,
            context: ({ req }) => ({ req })
        }),
        TodoModule,
        UserModule,
        AuthModule,
    ],
    controllers: []
})
export class AppModule { }
