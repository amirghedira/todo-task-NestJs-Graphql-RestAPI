import { ObjectType, Field } from "@nestjs/graphql";
import { UserType } from "src/users/types/user.type";

@ObjectType()
export class TodoType {

    @Field()
    _id: string;
    @Field()
    userid: UserType;
    @Field()
    writerid: UserType;
    @Field()
    title: string;
    @Field()
    description: string;
    @Field()
    date: Date;
    @Field()
    state: boolean;
}