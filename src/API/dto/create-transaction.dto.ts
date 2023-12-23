
export interface CreateTransactionType {
  amount: number
  categoryId: string
  title: string
  type: "income"|"expense"
}