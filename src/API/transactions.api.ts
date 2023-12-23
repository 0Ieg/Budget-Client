import { toast } from "react-toastify"
import { myAxios } from "./axios"
import { CreateTransactionType } from "./dto/create-transaction.dto"

export const readTransactionsAPI = ()=>{
  return(
    myAxios.get('transactions/all')
    .then(res=>{
      return res.data
    })
    .catch(error=>{toast.error(error.response?.data.message)})
  )
}
export const deleteTransactionAPI = (id:string)=>{
  return(
    myAxios.delete(`transactions/${id}`)
    .then(res=>{
      toast.success('The transaction has been deleted')
      return res.data
    })
    .catch(error=>{toast.error(error.response?.data.message)})
  )
}
export const updateTransactionAPI = (data:{id:string, title:string})=>{
  return(
    myAxios.patch(`transactions/${data.id}`, {title:data.title})
    .then(res=>{
      toast.success('The transaction has been updated')
      return res.data
    })
    .catch(error=>{toast.error(error.response?.data.message)})
  )
}

export const createTransactionAPI = (data:CreateTransactionType)=>{
  return(
    myAxios.post('transactions', data)
    .then(res=>{
      toast.success('The transaction has been created')
      return res.data
    })
    .catch(error=>{toast.error(error.response?.data.message)})
  )
}