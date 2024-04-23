"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogSchema = exports.createBlogSchema = exports.updateUserSchema = exports.signinSchema = exports.signupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
//user schemas and types-------------------------------------------------
exports.signupSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    firstName: zod_1.default.string().min(1),
    lastName: zod_1.default.string().optional()
});
exports.signinSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
exports.updateUserSchema = zod_1.default.object({
    firstName: zod_1.default.string().optional(),
    lastName: zod_1.default.string().optional(),
    password: zod_1.default.string().optional()
});
//blog schemas and types-------------------------------------------------
exports.createBlogSchema = zod_1.default.object({
    title: zod_1.default.string().min(1),
    content: zod_1.default.string().min(1),
    tag: zod_1.default.string().optional(),
});
exports.updateBlogSchema = zod_1.default.object({
    title: zod_1.default.string().optional(),
    content: zod_1.default.string().optional(),
    tag: zod_1.default.string().optional(),
    id: zod_1.default.string().uuid()
});
