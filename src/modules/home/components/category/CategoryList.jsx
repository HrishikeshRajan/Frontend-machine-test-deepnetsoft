/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Card from "../card/Card"
import Heading from "../header/Header"
import Image from "../image/Image"


const HeadingGenerator = ({item}) => {
    return (
      <li className="font-bold">
        <span className="text-xl">{item.name}</span>
          <span className="text-xl ">{item.price}</span>
          <div>
              <p className="text-white mt-2 font-normal text-[#FFFFFFBF] font-[Kelly Slab]">{item.details}</p>
          </div>
      </li>
    );
}

const CategoryList = ({data}) => {

    if(!data) return null

  return (
    <div 
    style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.8)), url(${data.card.images.baseImage})`,
        minHeight: '100vh'
     }}
   className="relative w-full px-2 h-auto xl:px-40 py-10 flex flex-col justify-center xl:gap-10 gap-2"
    >
     
      
        <Card className=' relative border-2  w-full mt-10 px-2 xl:px-10 pb-20 flex flex-col justify-center items-center '>
        <Image className='xl:absolute top-0 left-0 w-28 xl:w-96 xl:top-[-300px] xl:left-[30px]' src={data.card.images.left} />
        <Heading className='text-white w-40 xl:w-full text-center text-4xl xl:text-5xl font-extrabold heading-shadow bar '><span>{data.card.title}</span></Heading>
       
        {/* <Image className='absolute w-20 xl:w-96 top-[-160px] right-[80px]' src={data.card.images.right} /> */}

        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 pa-dot-leaders'>
        {data.card.data.map((item) =><HeadingGenerator item={item} />)}
        </ul>
        </Card> 
    </div>
  )
}

export default CategoryList