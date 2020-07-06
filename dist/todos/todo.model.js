"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoSchema = void 0;
const mongoose = require("mongoose");
const user_type_1 = require("../users/types/user.type");
exports.TodoSchema = new mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    writerid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: new Date().toISOString() },
    state: { type: Boolean, default: false }
});
//# sourceMappingURL=todo.model.js.map