import { createBlogInput } from '@amitesh25/medium-common';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from "hono";
import { verify } from 'hono/jwt';

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    };
    Variables: {
        userId: string;
    };
}>();

// Middleware
blogRouter.use('/*', async (c, next) => {
    const jwt = c.req.header('Authorization') || "" ;
    if (!jwt) {
        c.status(401);
        return c.json({ error: 'unauthorized' });
    }

    const token = jwt.split(' ')[1];
    const payload = await verify(token, c.env.JWT_SECRET);

    if (!payload) {
        c.status(401);
        return c.json({ error: 'unauthorized' });
    }

    c.set('userId', payload.id as string); //payload.id -> user.id
    await next();
});
  
blogRouter.post ('/', async (c) => {
    const body = await c.req.json();
    const userId = c.get('userId');
    const { success } = createBlogInput.safeParse(body)
    if (!success){
        c.status(411);
        return c.json({
          message: "Inputs are incorrect"
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: userId
        }
    })
    return c.json({
        id: blog.id
    })
})

blogRouter.put ('/update', async (c) => {
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body)
    if (!success){
        c.status(411);
        return c.json({
          message: "Inputs are incorrect"
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.update({
        where:{
            id: body.id
        },
        data:{
            title: body.title,
            content: body.content,
        }
    })

    return c.json({
        id: blog.id
    })
})

blogRouter.get ('/bulk', async (c) => {  //return all the blogs in the DB
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const blogs = await prisma.post.findMany();
    //try to add pagination in future.
    return c.json({
        blogs
    })
})

blogRouter.get('/:id', async  (c) => {
    const id = c.req.param('id')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.findFirst({
        where:{
            id: id
        }
    })
    return c.json({
        blog
    })
})
  
  