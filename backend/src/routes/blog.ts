import { createBlogSchema, updateBlogSchema } from "@muraleedharan_n/medium-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { authMiddleware } from "../middleware";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>()

blogRouter.use('*', authMiddleware)  

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = c.get('userId');

    try{
        const body = await c.req.json();
        const parsedBody = createBlogSchema.safeParse(body);
        if(parsedBody.success == false){
            c.status(411);
            return c.json({
              message: "Incorrect inputs"
            })
        }
    
        const blog = await prisma.blog.create({
            data: {
                title: parsedBody.data.title,
                content: parsedBody.data.content,
                authorId: id,
                tag: parsedBody.data.tag
            }
        })

        return c.json({
            message: "Blog posted successfully"
        })
    }
    catch(err){
        c.status(411)
        return c.json({
            message: "Failed to post",
            error: err
        })
    }
})

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = c.get('userId');

    try{
        const body = await c.req.json();
        const parsedBody = updateBlogSchema.safeParse(body);
        if(parsedBody.success == false){
            c.status(411);
            return c.json({
              message: "Incorrect inputs"
            })
        }
    
        const blog = await prisma.blog.update({
            data: {
                title: parsedBody.data.title,
                content: parsedBody.data.content,
                tag: parsedBody.data.tag
            },
            where: {
                id: parsedBody.data.id,
                authorId: id
            }
        })
        return c.json({
            message: "Updated successfully"
        })
    }
    catch(err){
        c.status(411)
        return c.json({
            message: "Failed to update",
            error: err
        })
    }

})

blogRouter.delete('/:id', async(c) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const userId = c.get('userId');
    const blogId = c.req.param('id');

    try{
        const response = await prisma.blog.delete({
            where: {
                id: blogId,
                authorId: userId
            }
        })

        if (!response){
            return c.json({
                message: 'Not found',
                success: false
            })
        }
        return c.json({
            message: 'Deleted',
            success: true
        })
    }catch(err){
        return c.json({
            message: 'Delete failed',
            success: false
        })
    }   
})

//add pagination
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const blogs = await prisma.blog.findMany({
            select: {
                title: true,
                content: true,
                id: true,
                created_at: true,
                updated_at: true,
                tag: true,
                author: {
                    select: {
                        firstName: true,
                        lastName: true,
                        id: true
                    }
                }
            }
        })
        return c.json({
            blogs
        })
    }
    catch(err){
        c.status(411)
        return c.json({
            message: "Failed to fetch blogposts"
        })
    } 

})


blogRouter.get('/:id', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogId = c.req.param('id')

    try{    
        const blog = await prisma.blog.findFirst({
            where: {
                id: blogId
            },
            select: {
                title: true,
                content: true,
                id: true,
                created_at: true,
                updated_at: true,
                tag: true,
                author: {
                    select: {
                        firstName: true,
                        lastName: true,
                        id: true
                    }
                }
            }
        })
        return c.json({
            blog: blog
        })
    }
    catch(err){
        c.status(404)
        return c.json({
            message: "Error while fetching blogpost"
        })
    }
})

