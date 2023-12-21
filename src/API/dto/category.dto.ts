import { TransactionType } from './transaction.dto';

export interface CategoryType {
  id:string,
  title:string,
  created:string,
  updated:string,
  userId:string,
  transactions?: TransactionType[]
}