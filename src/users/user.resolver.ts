import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { UserService } from './user.service';
import { CurrentUser } from 'src/auth/currentuser.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.gard';
import { AuthService } from 'src/auth/auth.service';
import { UserType } from './types/user.type';
import { AddUserInput, LoginInput, UpdateUserInput, UpdatePasswordInput } from './types/user.input';
import { User } from './types/user';

@Resolver('User')
export class UserResolver {

    constructor(private userService: UserService, private authService: AuthService) { }


    @Query(() => String)
    async login(
        @Args('loginInput') loginInput: LoginInput
    ) {
        return await this.authService.login(loginInput)

    }


    @Query(() => [UserType])
    getUsers() {
        return this.userService.getUsers()
    }


    @UseGuards(GqlAuthGuard)
    @Query(() => UserType)
    getUserWithToken(@CurrentUser() user: any) {
        return this.userService.getUser(user._id)
    }

    @Query(() => UserType)
    getUser(@Args('userid') userid: string) {
        return this.userService.getUser(userid)
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => UserType)
    addUser(@Args('UserInput') addUserInput: AddUserInput) {
        const { username, password, name, surname } = addUserInput
        return this.userService.addUser(username, password, name, surname)
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => UserType)
    updateUser(@Args('UpdateUserInput') userInput: UpdateUserInput, @CurrentUser() user: User) {

        const { userId, username, name, surname, access } = userInput
        return this.userService.editUser(user._id, userId, username, name, surname, access)
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => UserType)
    updateUserPassword(@Args('UpdatePasswordInput') updatePasswordInput: UpdatePasswordInput, @CurrentUser() user: User,) {

        const { userId, oldPassword, newPassword } = updatePasswordInput
        return this.userService.updatePassword(user._id, userId, oldPassword, newPassword);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => UserType)
    deleteUser(@Args('userid') userId: string, @CurrentUser() user: User,) {

        return this.userService.deleteUser(user._id, userId);
    }


}