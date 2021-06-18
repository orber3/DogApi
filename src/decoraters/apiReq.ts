import axios,{AxiosInstance, AxiosRequestConfig, Method} from 'axios'
import { Methods } from './Methods'



interface axiosProps { 

  method:  Methods,
  url: string,
  options: AxiosRequestConfig,

}



export const apiReq = async (props: axiosProps)  => {

  const {url , options , method: Method} = props

  switch(props.method) { 

    case Methods.get: {
      const data= await axios.get( url , options)
      return data

    }
    
    case Methods.post: {
      const data= await axios.post( url , options)
      return data

    }

    case Methods.del: {
      const data= await axios.delete( url , options)
      return data

    }



  }




}