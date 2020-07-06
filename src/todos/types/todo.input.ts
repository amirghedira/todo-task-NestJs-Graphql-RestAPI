import { Field, InputType } from "@nestjs/graphql";


@InputType({ description: 'Add todo input' })

export class AddTodoInput {

    @Field()
    userId: string;
    @Field()
    title: string;
    @Field()
    description: string;
}
@InputType({ description: 'Update todp input' })
export class UpdateTodoInput {

    @Field()
    todoId: string;
    @Field()
    title: string;
    @Field()
    description: string;
}