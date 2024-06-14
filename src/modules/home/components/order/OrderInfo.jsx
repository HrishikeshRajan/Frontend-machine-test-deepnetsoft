/* eslint-disable react/prop-types */
import Background from "../background/Background"
import Card from "../card/Card"

const OrderInfo = ({data}) => {

    if(!data) return null
  return (

    <Background url={data.card.images.baseImage} width="50vh" className='p-5 '>
         <Card className='bg-[#665430]'>
           <ul className="text-white text-xs font-light p-4">
              {data.card.data.map((item) => <li className="text-center py-2" key={item.id}>{item.text}</li>)}
           </ul>
         </Card>
    </Background>

  )
}

export default OrderInfo