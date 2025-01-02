import z from "zod"

export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(10),
    name: z.string().optional()
})

export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(10),
})

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
})

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})

//type infrence in zod 
//why? - beacause frontend will need this 
//putting this in common mudule 
export type signupInput = z.infer<typeof signupInput>
export type signinInput = z.infer<typeof signinInput>
export type createBlogInput = z.infer<typeof createBlogInput>
export type updateBlogInput = z.infer<typeof updateBlogInput>