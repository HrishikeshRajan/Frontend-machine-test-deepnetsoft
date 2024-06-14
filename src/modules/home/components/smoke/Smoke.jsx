/* eslint-disable react/prop-types */

import Card from "../card/Card"
import Heading from "../header/Header"
import Image from "../image/Image"


const Smoke = ({data}) => {
    if(!data) return null

  return (
    <Card 
     style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.8)), url(${data.card.images.baseImage})`,
        minHeight: '50vh'
     }}
     className="relative w-full px-2 xl:px-40  flex justify-center xl:gap-10 gap-2"
    >
       <Card className=' relative border-2  w-full  px-2  xl:px-10 pb-20 flex flex-col justify-center items-center '>
          <Image src={data.card.icon.url} className='w-[82.11px] mt-10 mb-3' />
          <Heading className='text-white w-40 text-center text-2xl font-extrabold heading-shadow '>{data.card.title}</Heading>
          <ul className="flex mt-10 text-center flex-col xl:flex-row font-bold">
            {data.card.data.map((item) => <li key={item.id} className="text-white">{item.name}</li>)}
          </ul>
       </Card>
    </Card>
  )
}

export default Smoke