import z from "zod";
export declare const signupSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    firstName: string;
    lastName?: string | undefined;
}, {
    email: string;
    password: string;
    firstName: string;
    lastName?: string | undefined;
}>;
export type SignupSchema = z.infer<typeof signupSchema>;
export declare const signinSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type SigninSchema = z.infer<typeof signinSchema>;
export declare const updateUserSchema: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    firstName?: string | undefined;
    lastName?: string | undefined;
    password?: string | undefined;
}, {
    firstName?: string | undefined;
    lastName?: string | undefined;
    password?: string | undefined;
}>;
export type UpdateUserSchema = z.infer<typeof updateUserSchema>;
export declare const createBlogSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    tag: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    tag?: string | undefined;
}, {
    title: string;
    content: string;
    tag?: string | undefined;
}>;
export type CreateBlogSchema = z.infer<typeof createBlogSchema>;
export declare const updateBlogSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    tag: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    title?: string | undefined;
    content?: string | undefined;
    tag?: string | undefined;
}, {
    id: string;
    title?: string | undefined;
    content?: string | undefined;
    tag?: string | undefined;
}>;
export type UpdateBlogSchema = z.infer<typeof updateBlogSchema>;
