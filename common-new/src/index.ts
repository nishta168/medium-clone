import { JSONContent } from "@tiptap/react";
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


 //add logic for tag
export const createBlogSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    content: z.custom<JSONContent>((value) => {
      if (typeof value !== 'object' || value === null) {
        return false; // Value should be an object
      }
      
      // Check if the required properties are present
      if (
        !('type' in value) ||
        !('content' in value)
      ) {
        return false; 
      }      
      return true;
    })
})

export type CreateBlogSchema = z.infer<typeof createBlogSchema>

export const updateBlogSchema = z.object({
    title: z.string().optional(),
    content: z.custom<JSONContent>((value) => {
      if (typeof value !== 'object' || value === null) {
        return false; // Value should be an object
      }
      
      // Check if the required properties are present
      if (
        !('type' in value) ||
        !('attrs' in value) ||
        !('content' in value) ||
        !('marks' in value) ||
        !('text' in value)
      ) {
        return false; // Value should have the required properties
      }
      
      // Check if the optional properties have valid types
      if (
        typeof value.type !== 'string' ||
        typeof value.attrs !== 'object' ||
        !Array.isArray(value.content) ||
        !Array.isArray(value.marks) ||
        typeof value.text !== 'string'
      ) {
        return false; // Value properties should have valid types
      }
      
      // Value passed all checks, so it's valid JSONContent
      return true;
    }),
    tag: z.string().optional(),
    id: z.string().uuid()
})

export type UpdateBlogSchema = z.infer<typeof updateBlogSchema>
