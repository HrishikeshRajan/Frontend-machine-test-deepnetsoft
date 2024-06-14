/* eslint-disable react/prop-types */

import Background from "../background/Background";
import Card from "../card/Card";

const Order = ({data}) => {
    if(!data) return null;
    console.log(data)
  return (
    <Background url={data.card.images.baseImage} width={'10vh'} >
        <Card className='w-full flex justify-center items-center py-5'>
        <button className="w-6/12 px-3  py-2 bg-[#0796EF] text-white">{data.card.title}</button>
        </Card>
    </Background>
     
  )
}

export default Order