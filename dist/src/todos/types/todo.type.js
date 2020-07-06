"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoType = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_type_1 = require("../../users/types/user.type");
let TodoType = class TodoType {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], TodoType.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", user_type_1.UserType)
], TodoType.prototype, "userid", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", user_type_1.UserType)
], TodoType.prototype, "writerid", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], TodoType.prototype, "title", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], TodoType.prototype, "description", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], TodoType.prototype, "date", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Boolean)
], TodoType.prototype, "state", void 0);
TodoType = __decorate([
    graphql_1.ObjectType()
], TodoType);
exports.TodoType = TodoType;
//# sourceMappingURL=todo.type.js.map