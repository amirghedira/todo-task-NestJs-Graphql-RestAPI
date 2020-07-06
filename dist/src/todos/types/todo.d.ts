export interface Todo {
    _id: string;
    userid: string;
    writerid: string;
    title: string;
    description: string;
    date: Date;
    state: boolean;
}
