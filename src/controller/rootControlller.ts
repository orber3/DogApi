import { NextFunction, Request, Response } from "express"
import { controller } from "../decoraters/controller"
import { get } from "../decoraters/routes"

@controller('')
class rootController { 
@get('/')
getRoot(req: Request, res: Response)  { 
  
    res.send(`
    <div>
     <div> your are logged in </div>
     <a href='/auth/logout'> LogOut </a>
     </div>
    
      `)
  }
  }