import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signinInput, signupInput } from "@amitesh25/medium-common";


export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string,
    }
  }>();

userRouter.post ('/signup', async (c) => {
  const body = await c.req.json();  
  const { success } = signupInput.safeParse(body)
  console.log(success)
  if (!success){
    c.status(411);
    return c.json({
      message: "Inputs are incorrect"
    })
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())


  try{
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name 
      },
    })
    const token = await sign({
       id: user.id 
    }, c.env.JWT_SECRET)  //you can also add email.
    return c.json({
      jwt: token
    })
    // return c.text('signed up successfully');
  }
  catch(e){
    c.status(411);
    return c.text("Couldn't able to sign up.");
  }

})

userRouter.post ('/signin', async (c) => {
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body)
  if (!success){
    c.status(411);
    return c.json({
      message: "Inputs are incorrect"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())


  try{
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password
      },
    })

    if(!user){
      c.status(403);
      return c.json({
        message: "Invalid credentials"
      });
    }
    
    const token = await sign({ id: user.id }, c.env.JWT_SECRET)  //you can also add id.
    return c.json({
      jwt: token
    })
  }catch(e){
    c.status(403)
    return c.json({
      message: "error signing in"
    })
  }
})