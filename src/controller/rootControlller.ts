import { NextFunction, Request, Response } from "express"
import { controller } from "../decoraters/ControllerDec"
import { get } from "../decoraters/Routes"

@controller('')
class rootController { 
@get('/')
getRoot(req: Request, res: Response)  { 
  
    res.send(`
    <div>
     <div> DOG API </div>
     </div>
    
      `)
  }
  }