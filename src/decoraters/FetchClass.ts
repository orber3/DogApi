import axios,{AxiosInstance, AxiosRequestConfig, Method} from 'axios'
import { Request } from 'express'
import { Methods } from './Methods'
import {ParsedQs} from 'qs'


export enum apiTypes { 
  list='list',
  search='search',
  del='delete'
}

interface axiosProps { 
  url: string,
  options: AxiosRequestConfig,
  method:  Methods,
  apiType: apiTypes,
  // q?: ParsedQs
  q?: ParsedQs[string]
}


export class fetchClass {
  constructor(url: string ,options: AxiosRequestConfig , method: Methods , apiType: apiTypes) {}
async Act({url ,options,method,apiType,q}: axiosProps) { 
  switch(apiType) {

    case apiTypes.list: {
          try{
                const {data} = await axios.get(url,options)
                console.log("data is good")
                return data
          }catch(e) { 
            console.log(e)
            return e
          }

}
    case apiTypes.search: {
      try{
      const res= await axios.get( `${url}/search?q=${q}` , options)
      console.log("data is good")
      console.log( q )
      return res.data
    }catch(e) { 
      console.log(e)
      return e
    }

    }

    case apiTypes.del: {
      const data= await axios.delete( url , options)
      return data

          }


          default: 

const data = 'error'
return data

        }

      }

    }