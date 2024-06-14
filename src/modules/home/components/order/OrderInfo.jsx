/* eslint-disable react/prop-types */
import Background from "../background/Background"
import Card from "../card/Card"

const OrderInfo = ({data}) => {

    if(!data) return null
  return (

    <Background url={data.card.images.baseImage} width="40vh" className='p-5 flex justify-center items-center '>
         <Card className='bg-[#665430]'>
           <ul className="flex flex-col xl:flex-row text-white text-xs font-light p-4">
              {data.card.data.map((item,index) => <li className={`text-center py-2 px-5  ${index + 1 === data.card.data.length? 'xl:border-r-0' :'xl:border-r-2 '} ${index + 1 === data.card.data.length? 'border-b-0 border-r-0' :'border-b-2 border-r-0 '} py-5 xl:border-b-0  border-dotted`} key={item.id}>{item.text}</li>)}
           </ul>
         </Card>
    </Background>

  )
}

export default OrderInfo