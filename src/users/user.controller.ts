import { Controller, Get, Param, Post, Body, Patch, Delete, UseGuards, Request } from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtAuthGuard } from '../auth/jwt-auth.gard';
import { AuthService } from "src/auth/auth.service";
import { LocalAuthGuard } from "src/auth/local-auth.gard";


@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService, private readonly authService: AuthService) { }

    @Get()
    async getUsers() {

        return await this.userService.getUsers();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/token')
    async getUserWithToken(@Request() req: any) {

        return await this.userService.getUserByToken(req.user._id)
    }

    @Get(':id')
    async getUser(@Param('id') userId: string) {
        return await this.userService.getUser(userId)
    }

    @Post()
    async addUser(
        @Body('username') username: string,
        @Body('password') password: string,
        @Body('name') name: string,
        @Body('surname') surname: string) {

        return await this.userService.addUser(username, password, name, surname)
    }


    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req) {
        return await this.authService.login(req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Patch('/password/:id')
    async updatePassword(
        @Request() req: any,
        @Param('id') userid: string,
        @Body('newPassword') newPassword: string,
        @Body('oldPassword') oldPassword: string
    ) {
        return await this.userService.updatePassword(req.user._id, userid, oldPassword, newPassword)
    }


    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async updateUser(
        @Request() req: any,
        @Param('id') userid: string,
        @Body('username') username: string,
        @Body('name') name: string,
        @Body('surname') surname: string,
        @Body('access') access: string
    ) {
        return await this.userService.editUser(req.user._id, userid, username, name, surname, access)

    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteUser(@Param('id') userid: string, @Request() req: any) {

        return await this.userService.deleteUser(userid, req.user._id)

    }



}