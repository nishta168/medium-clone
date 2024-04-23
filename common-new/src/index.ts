import z from "zod";

//user schemas and types-------------------------------------------------

export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    firstName: z.string().min(1),
    lastName: z.string().optional()
})

export type SignupSchema = z.infer<typeof signupSchema>

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export type SigninSchema = z.infer<typeof signinSchema>

export const updateUserSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    password: z.string().optional()
})

export type UpdateUserSchema = z.infer<typeof updateUserSchema>

//blog schemas and types-------------------------------------------------

export const createBlogSchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    tag: z.string().optional(),
})

export type CreateBlogSchema = z.infer<typeof createBlogSchema>

export const updateBlogSchema = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    tag: z.string().optional(),
    id: z.string().uuid()
})

export type UpdateBlogSchema = z.infer<typeof updateBlogSchema>
