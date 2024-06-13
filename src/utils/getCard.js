export const getCard = (arr,key) => {
   if(!arr || (arr && !arr.length)) return null
   return arr.find((item) => item.card.type === key)
}