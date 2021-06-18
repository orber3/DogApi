import { Request,Response} from 'express'
import {get, controller , bodyValidator, post, Methods} from '../decoraters'
import { fetchClass, apiTypes} from '../decoraters/FetchClass'

const url = 'https://api.thedogapi.com/v1/breeds'
const options = { 
  headers: { 'x-api-key': '197c642d-12e5-45db-9f38-fffae70e1853' } };



@controller('/dogs')
    class DogApi { 

      //return a list of breeds
    @get('/listBreeds')
      async ListDogs (req: Request,res: Response)  {

        try {
       
          let method = Methods.get
          let apiType = apiTypes.list
          let fetch = new fetchClass(  url , options, method, apiType)
          const props = { url , options , method , apiType}
          const data = await fetch.Act( props);
          res.json(data);

        } catch  (error) {    
          res.json(error);

          
        }
      }

        //return a list by search of breeds by name
      @get('/search')
      async searchDog (req: Request,res: Response)  {

        try {
          let apiType = apiTypes.search
          let method = Methods.get
          let fetch = new fetchClass(  url , options, method, apiType )
            
          let q= req.query.q

          const props = { url , options , method,apiType,q}
          const data = await fetch.Act( props);
          res.json(data);

        } catch  (error) {    
          res.json(error);
          
        }
      }

      //return a list of catagories
      @get('/listCata')
      async ListCata (req: Request,res: Response)  {
        try {
       
          let method = Methods.get
          let apiType = apiTypes.list
          let fetch = new fetchClass(  url , options, method, apiType)
          const props = { url , options , method , apiType}
          const data = await fetch.Act( props);
          res.json(data);

        } catch  (error) {    
          res.json(error);          
        }
      }
      @post('/createVote')
      @bodyValidator('image_id', 'sub_id', 'value')
      async votePost (req: Request,res: Response) { 
        console.log(req.body)
        try {
          const {image_id , sub_id, value } = req.body
          const options =  {
           headers: { 'content-type': 'application/json' ,'x-api-key': '197c642d-12e5-45db-9f38-fffae70e1853' },
            body: { image_id , sub_id , value}
        };

          let method = Methods.post
          let apiType = apiTypes.post
          let fetch = new fetchClass(  url , options, method, apiType)
          const props = { url , options , method , apiType}
          
          const data = await fetch.Act(props);

          res.json(data);
          
        } catch  (error) {   
          res.json(error);

          
        }
      }
      


          }

        

        
