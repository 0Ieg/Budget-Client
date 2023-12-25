export const formatToRUB = (value:number):string=>{
  const options = {style:'currency', currency:'RUB' , minimumFractionDigits: 0}
  return new Intl.NumberFormat('ru', options).format(value)
}



