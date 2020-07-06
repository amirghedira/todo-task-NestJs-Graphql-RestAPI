import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/users/user.module';
import { JwtStrategy } from './jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/user.model';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        UserModule
    ],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule { }
