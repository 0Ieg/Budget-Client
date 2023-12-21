export interface TransactionType {
  id: string
  title: string
  amount: number
  type: 'income'|'expense'
  created: string
  updated: string
  categoryId: string
  userId: string
}