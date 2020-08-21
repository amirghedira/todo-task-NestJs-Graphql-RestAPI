import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'


@Injectable()
export class AuthService {

    constructor(private userService: UserService) { }

    async login(loginInput: any) {
        const user = await this.userService.getUserByUsrname(loginInput.username);
        const result = await bcrypt.compare(loginInput.password, user.password)
        if (user && result) {
            return { user: user, token: jwt.sign({ username: user.username, _id: user._id }, process.env.JWT_SECRET_KEY) }
        }
        return null

    }

}
