import { Field, InputType } from "@nestjs/graphql";


@InputType({ description: 'Login Input' })
export class LoginInput {
    @Field()
    username: string;

    @Field()
    password: string;
}

@InputType({ description: 'add user input' })
export class AddUserInput {

    @Field()
    username: string;
    @Field()
    password: string;
    @Field()
    name: string;
    @Field()
    surname: string;
}

@InputType({ description: 'update user input' })
export class UpdateUserInput {

    @Field()
    userId: string;
    @Field()
    username: string;
    @Field()
    name: string;
    @Field()
    surname: string;
    @Field()
    access: string;
}

@InputType({ description: 'update user password input' })
export class UpdatePasswordInput {

    @Field()
    userId: string;
    @Field()
    oldPassword: string;
    @Field()
    newPassword: string;

}
