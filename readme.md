# Overview 
 This project is all about managing tasks and assigning them to users. Only admins can assign tasks to users. the first account created in the database will automaticaly have an admin access and any other account will have a normal user access.Admins can edit any user and can provide admin access to them. Once a task is assigned to a user , it will be displayed to him. He can close the task when ever he finish it. 
 # Features / Technologies 
 The core feature of this application , is to manipulate data, and treat each type of user differently. An admin can edit his own profile and edit any other user profile and also assigning tasks to users. Those tasks can be edited by the admin , he can delete the task or update the content and/or the title and  opening/closing it
The main goal of this application is to build a full CRUD application that uses NestJs and GraphQL in the back-end by implementing schemas and resolvers and services that treats every GraphQL query 
Platform & Libraries 
## Frontend
```json
    "dependencies": {
        "@angular/animations": "~8.2.14",
        "@angular/common": "~8.2.14",
        "@angular/compiler": "~8.2.14",
        "@angular/core": "~8.2.14",
        "@angular/forms": "~8.2.14",
        "@angular/platform-browser": "~8.2.14",
        "@angular/platform-browser-dynamic": "~8.2.14",
        "@angular/router": "~8.2.14",
        "apollo-angular": "^1.9.1",
        "apollo-angular-link-http": "^1.10.0",
        "apollo-cache-inmemory": "^1.6.6",
        "apollo-client": "^2.6.10",
        "apollo-link-context": "^1.0.20",
        "apollo-link-error": "^1.1.13",
        "graphql": "^15.3.0",
        "graphql-tag": "^2.10.3",
        "moment": "^2.27.0",
        "rxjs": "~6.4.0",
        "sweetalert2": "^9.15.2",
        "tslib": "^1.10.0",
        "zone.js": "~0.9.1"
    }
```

### Angular (@angular):
those packages are imported directly using angular CLI when you start a new project to work with angular.

Link: [https://cli.angular.io/](https://cli.angular.io/)

### moment:
this library allows you to .deal with date more efficiently and from it, you can create dynamic dates like from-now date (1 min ago, 1 hour ago, etc..)

Link: [https://www.npmjs.com/package/moment](https://www.npmjs.com/package/moment)

### rxjs:
this amazing and huge library has a lot to say about, but to be brief it allow you to manage some state in your angular project.
Link: [https://www.npmjs.com/package/rxjs](https://www.npmjs.com/package/rxjs)

### sweetalert2:
this library provides a pre-build modals you can use to display success messages or errors, without adding HTML or CSS to your project.
Link: [https://www.npmjs.com/package/sweetalert2](https://www.npmjs.com/package/sweetalert2)

### apollo-client:
Apollo Client is a fully-featured caching GraphQL client with integrations for React, Angular, and more. It allows you to easily build UI components that fetch data via GraphQL.
Link:[https://www.npmjs.com/package/apollo-client](https://www.npmjs.com/package/apollo-client)

## Backend
```json
  "dependencies": {
        "@nestjs/common": "^7.0.0",
        "@nestjs/config": "^0.5.0",
        "@nestjs/core": "^7.0.0",
        "@nestjs/graphql": "^7.5.1",
        "@nestjs/jwt": "^7.0.0",
        "@nestjs/mongoose": "^7.0.1",
        "@nestjs/passport": "^7.1.0",
        "@nestjs/platform-express": "^7.0.0",
        "@types/bcrypt": "^3.0.0",
        "apollo-server-express": "^2.15.1",
        "bcrypt": "^5.0.0",
        "graphql": "^15.2.0",
        "graphql-tools": "^6.0.12",
        "helmet": "^3.23.3",
        "jsonwebtoken": "^8.5.1",
        "mongoose": "^5.9.21",
        "passport": "^0.4.1",
        "passport-jwt": "^4.0.0",
        "passport-local": "^1.0.0",
  }
```


### NestJs (@nestjs):
@nestjs packages are imported automatically once you start a project with nestjs CLI
Link: [https://docs.nestjs.com/cli/usages](https://docs.nestjs.com/cli/usages)

### bcrypt:
Is a small library, that provides a secure hashing method that you can use to hash plain text passwords before storing them into the database, also it provides a method that compares the hashed passwords and an entered password (plain text)
you can use this functionality in login handler.
Link: [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt)

### jsonwebtoken:
Is a library responsible to manage tokens, it generates tokens from a payload you add, and you can make user authentication
with it, also you can protect some routes using a middleware that checks the token, you can add more options to it like the expiration time, etc... check out the docs below
Link: [https://www.npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

### Helmet:
This library protect your express/nestjs back end applications from multiple threads
Link: [https://www.npmjs.com/package/helmet](https://www.npmjs.com/package/helmet)

### passport/ passport-local / passport-jwt:
all of those libraries serve to extract the token from the header and protect some routes from being access by non authenticated users

### apollo-server-express:
This is the Express and Connect integration of GraphQL Server. Apollo Server is a community-maintained open-source GraphQL server that works with many Node.js HTTP server frameworks.
Link: [https://www.npmjs.com/package/apollo-server-express](https://www.npmjs.com/package/apollo-server-express) 

## GraphQL
### Types
#### Objects:
```typescript
type UserType {
  _id: String!
  username: String!
  password: String!
  name: String!
  surname: String!
  adminAccess: Boolean!
}
```
```typescript
type TodoType {
  _id: String!
  userid: UserType!
  writerid: UserType!
  title: String!
  description: String!
  date: DateTime!
  state: Boolean!
}
```
```typescript
type LoggedUserType {
  user: UserType!
  token: String!
}
```
#### Input types:

"""add user input"""
```typescript
input AddUserInput {
  username: String!
  password: String!
  name: String!
  surname: String!
}
```
"""update user input"""
```typescript
input UpdateUserInput {
  userId: String!
  username: String!
  name: String!
  surname: String!
  access: String!
}
```

"""update user password input"""
```typescript
input UpdatePasswordInput {
  userId: String!
  oldPassword: String!
  newPassword: String!
}
```
"""Add todo input"""
```typescript
input AddTodoInput {
  userId: String!
  title: String!
  description: String!
}
```

"""Update todp input"""
```typescript
input UpdateTodoInput {
  todoId: String!
  title: String!
  description: String!
}
```

"""Login Input"""
```typescript
input LoginInput {
  username: String!
  password: String!
}
```
### Queries
```typescript
  login(loginInput: LoginInput!): LoggedUserType!
  getUsers: [UserType!]!
  getUserWithToken: UserType!
  getUser(userid: String!): UserType!
  getUserTodos: [TodoType!]!
  userTodos: [TodoType!]!
  getAssignedTodos: [TodoType!]!
  getTodo(todoId: String!): TodoType!
```
### Mutations
```typescript
  addUser(userInput: AddUserInput!): UserType!
  updateUser(pdateUserInput: UpdateUserInput!): UserType!
  updateUserPassword(updatePasswordInput: UpdatePasswordInput!): UserType!
  deleteUser(userid: String!): UserType!
  addTodo(addTodoInput: AddTodoInput!): TodoType!
  deleteTodo(todoId: String!): TodoType!
  updateState(state: Boolean!, todoId: String!): TodoType!
  updateTodo(updateTodoInput: UpdateTodoInput!): TodoType!
```
# What I learned ?
 Most of all I learned how to implement a GraphQL server from schemas to resolvers. Also, how to interact with a GraphQL server from a front end using apollo client that provides nice querying features and caching methods.
