import bodyParser from 'body-parser';
import express, {Request , Response} from 'express'
import './controller/DogApiController'
import './controller/rootControlller'

import {AppRouter  } from'./appRouter'


const app=express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(AppRouter.getInstance())


app.get('/', (req: Request, res: Response)  => { 

  res.send(`
    <div>
    <h1> hey </h1>
    </div>

  `)


})

app.listen(3000, () => { 

  console.log('listen on port 3000')
})

