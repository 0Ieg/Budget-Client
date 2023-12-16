import { myAxios } from "./axios";

export const LoginAPI = (data:{email:string, password:string})=>{
  return(
    myAxios.post('auth/login', data)
    .then(res=>res.data)
    .catch(error=>console.log(error.response.data))
  )
}