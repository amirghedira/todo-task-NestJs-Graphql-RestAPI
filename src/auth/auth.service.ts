import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'


@Injectable()
export class AuthService {

    constructor(private userService: UserService) { }

    async validateUser(username: string, password: string) {
        const user = await this.userService.getUserByUsrname(username);
        const result = await bcrypt.compare(password, user.password)
        if (user && result) {
            return user;
        }
        return null;
    }
    async login(user: any) {
        const payload = { username: user.username, _id: user._id };
        return {
            access_token: jwt.sign(payload, 'jwtsecretkey')
        };
    }

}
