import { verify } from "hono/jwt";
//@ts-ignore
const authMiddleware = async (c, next)=>{
  try{
    const header = c.req.header('authorization');
    const token = header?.split(' ')[1];
    if(!token)
      return c.json({
        message: 'No token found',
        success: false
      })
    const user = await verify( token, c.env.JWT_SECRET);     
    c.set('userId', user.userId);
    await next();        
  }
  catch(err){
    c.status(403);
    return c.json({
      message: "unauthorized",
      success: false
    })
  }
}

export { authMiddleware }