export const formatDate = (dateString:string):string =>{
  const date = new Date(dateString)
  const options = {
    year:'numeric',
    month: 'long',
    day:'numeric',
  } as any
  return date.toLocaleDateString('ru', options)
}