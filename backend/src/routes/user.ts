import { signinSchema, signupSchema, updateUserSchema } from "@muraleedharan_n/medium-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { jwt, sign, verify } from 'hono/jwt'
import { authMiddleware } from "../middleware";


export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
    Variables: {
      userId: string
    }
}>()

userRouter.post('signup', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
    
  try{
    const signUpBody = await c.req.json();

    const parsedBody = signupSchema.safeParse(signUpBody)

    if(parsedBody.success == false){
      c.status(411);
      return c.json({
        message: "Incorrect inputs"
      })
    }
    
    const user = await prisma.user.create({
      data: {
        email: parsedBody.data.email,
        password: parsedBody.data.password,
        firstName: parsedBody.data.firstName,
        lastName: parsedBody.data.lastName
      }
    })

    const token = await sign({userId: user.id}, c.env.JWT_SECRET);
    return c.json({
      message: 'User created successfully',
      jwt: token
    })

  }
  catch(err) {
    c.status(411)
    return c.json({
      message: 'Error in creating user'
    })
  }
})
  
userRouter.post('signin', async (c) => {
  
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  

  try{

    const signInBody = await c.req.json();
    const parsedBody = signinSchema.safeParse(signInBody)
    if(parsedBody.success == false){
      c.status(411);
      return c.json({
        message: "Incorrect inputs"
      })
    }

    const user = await prisma.user.findFirst({
      where:{
        email: parsedBody.data.email,
        password: parsedBody.data.password
      }
    })
    if(!user){
      c.status(403)
      return c.json({
        message: 'Incorrect username or password'
      })
    }
    const token = await sign({ userId: user.id}, c.env.JWT_SECRET);
  
    return c.json({
      message: 'User signedin successfully',
      jwt: token
    })
  }
  catch(err) {
    c.status(411)
    return c.json({
      message: "Failed to sign in"
    })
  }
  
})

userRouter.put('/',authMiddleware, async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const userId = c.get('userId')
  
  try{
    const body = await c.req.json();
    const parsedBody = updateUserSchema.safeParse(body);
    if(parsedBody.success == false){
        c.status(411);
        return c.json({
          message: "Incorrect inputs"
        })
    }

    const user = await prisma.user.update({
      data: {
        firstName: parsedBody.data.firstName,
        lastName: parsedBody.data.lastName,
        password: parsedBody.data.password
      },
      where: {
        id: userId
      }
    })    
    return c.json({
      message: 'updated user successfully'
    })     
  }
  catch{
    return c.json({
      message: 'failed to update user'
    })
  }
})

userRouter.delete('/',authMiddleware, async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const userId = c.get('userId')

  try{
    const response = await prisma.user.delete({
      where: {
        id: userId
      }
    })
    if(!response){
      return c.json({
        message: 'user not found'
      })
    }
    if(response){
      return c.json({
        message: 'deleted user successfully'
      })
    }    
  }
  catch{
    return c.json({
      message: 'failed to delete user'
    })
  }
})

userRouter.post('me', authMiddleware, async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  try{      
    const user = await prisma.user.findFirst({
      where: {
        id: c.get('userId')
      }
    })
    if(user){
      return c.json({
        message: "authorized",
        success: true,
        firstName: user.firstName,
      })
    }    
  }
  catch(err){
    return c.json({
      message: "authorized",
      success: true,
      firstName: ""
    })
  }
})
