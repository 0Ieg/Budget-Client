import { myAxios } from "./axios";

export const SignupAPI = (data:{email:string, password:string})=>{
  return(
    myAxios.post('users', data)
    .then(res=>{
      localStorage.setItem('access_token', res.data.access_token)
      return res.data.id
    })
    .catch(error=>console.log(error.response.data))
  )
}

export const LoginAPI = (data:{email:string, password:string})=>{
  return(
    myAxios.post('auth/login', data)
    .then(res=>{
      localStorage.setItem('access_token', res.data.access_token)
      return res.data.id
    })
    .catch(error=>console.log(error.response.data))
  )
}