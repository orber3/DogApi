import {NextFunction, Request,Response} from 'express'
import {get, controller , bodyValidator, post, Methods} from '../decoraters'
import axios, { AxiosResponse ,AxiosError } from 'axios'
import { AxiosPromise } from 'axios';
import { apiReq } from '../decoraters/apiReq';
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
          let req = new fetchClass(  url , options, method, apiType)
          const props = { url , options , method , apiType}
          const data = await req.Act( props);
          res.json(data);

        } catch  (error) {    
          res.json(error);

          console.log(error)
          
        }
      }

        //return a list by search of breeds by name
      @get('/search')
      async searchDog (req: Request,res: Response)  {

        try {
          let apiType = apiTypes.search
          let method = Methods.get
          let fetch = new fetchClass(  url , options, method, apiType )
          console.log('query')
            
          let q= req.query.q

          const props = { url , options , method,apiType,q}
          const data = await fetch.Act( props);
          res.json(data);

        } catch  (error) {    
          res.json(error);
          console.log(error)
          
        }
      }

      //return a list of catagories
      @get('/listCata')
      async ListCata (req: Request,res: Response)  {
        try {
       
          let method = Methods.get
          let apiType = apiTypes.list
          let req = new fetchClass(  url , options, method, apiType)
          const props = { url , options , method , apiType}
          const data = await req.Act( props);
          res.json(data);

        } catch  (error) {    
          res.json(error);

          console.log(error)
          
        }
      }


          }

        

        
