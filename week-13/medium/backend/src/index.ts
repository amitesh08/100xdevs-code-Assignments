import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  },
  Variables : {
		userId: string
	}
}>()

//Middleware 
app.use('/api/v1/blog/*', async (c, next) => {
	const jwt = c.req.header('Authorization');
	if (!jwt) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	const token = jwt.split(' ')[1];
	const payload = await verify(token, c.env.JWT_SECRET);
	if (!payload) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	c.set('userId', 'payload.id');
	await next()
})


app.post ('/api/v1/user/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password
    },
  })

  
  const token = await sign({ id: user.id }, c.env.JWT_SECRET)  //you can also add id.
  return c.json({
    jwt: token
  })
})

app.post ('/api/v1/user/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password
    },
  })

  if(!user){
    c.status(403);
    return c.json({
      error: "user not found"
    });
  }
  
  const token = await sign({ id: user.id }, c.env.JWT_SECRET)  //you can also add id.
  return c.json({
    jwt: token
  })
})

app.get('/api/v1/blog/:id', (c) => {
  const id = c.req.param('id')
	console.log(id);
  return c.text('get blog'+id)
})

app.get ('/api/v1/blog/bulk', (c) => {
  return c.text('blogs')
})

app.put ('/api/v1/blog', (c) => {
  return c.text('update the blog')
})

app.post ('/api/v1/blog', (c) => {
  return c.text('create the blog')
})



export default app
