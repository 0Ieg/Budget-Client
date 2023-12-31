import { toast } from "react-toastify"
import { myAxios } from "./axios"

export const readCategoriesAPI = ()=>{
  return(
    myAxios.get('categories')
    .then(res=>{
      return res.data
    })
    .catch(error=>{toast.error(error.response?.data.message)})
  )
}
export const deleteCategoryAPI = (id:string)=>{
  return(
    myAxios.delete(`categories/${id}`)
    .then(res=>{
      console.log(res.data)
      toast.success('The category has been deleted')
      return res.data
    })
    .catch(error=>{toast.error(error.response?.data.message)})
  )
}
export const updateCategoryAPI = (data:{id:string, title:string})=>{
  return(
    myAxios.patch(`categories/${data.id}`, {title:data.title})
    .then(res=>{
      toast.success('The category has been updated')
      return res.data
    })
    .catch(error=>{toast.error(error.response?.data.message)})
  )
}

export const createCategoryAPI = (title:string)=>{
  return(
    myAxios.post('categories', {title})
    .then(res=>{
      toast.success('The category has been created')
      return res.data
    })
    .catch(error=>{toast.error(error.response?.data.message)})
  )
}