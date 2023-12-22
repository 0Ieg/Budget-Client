import { CategoryType } from "./category.dto"

export interface TransactionType {
  amount: number
  category:CategoryType
  categoryId: string
  created: string
  id: string
  title: string
  
  type: "income"|"expense"
  updated: string
  userId: string
}