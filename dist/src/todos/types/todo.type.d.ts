import { UserType } from "src/users/types/user.type";
export declare class TodoType {
    _id: string;
    userid: UserType;
    writerid: UserType;
    title: string;
    description: string;
    date: Date;
    state: boolean;
}
