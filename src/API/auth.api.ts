import { toast } from "react-toastify";
import { myAxios } from "./axios";

export const SignupAPI = (data:{email:string, password:string})=>{
  return(
    myAxios.post('users', data)
    .then(res=>{
      localStorage.setItem('access_token', res.data.access_token)
      toast.success('Registartion successful',{})
      return res.data.id
    })
    .catch(error=>{toast.error(error.response?.data.message)})
  )
}

export const LoginAPI = (data:{email:string, password:string})=>{
  return(
    myAxios.post('auth/login', data)
    .then(res=>{
      localStorage.setItem('access_token', res.data.access_token)
      toast.success('Successful login',{})
      return res.data.id
    })
    .catch(error=>{toast.error(error.response?.data.message)})
  )
}

export const ProfileAPI = ()=>{
  return(
    myAxios.get('auth/profile')
    .then(res=>{
      return res.data.id
    })
    .catch(error=>{console.log(error.response?.data.message)})
  )
}
