/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Card from "../card/Card"
import Heading from "../header/Header"
import Image from "../image/Image"
import Background from '../background/Background'

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
    <Background  url={data.card.images.baseImage}   className="relative py-20 w-full xl:pt-20 px-2 xl:px-40  flex justify-center xl:gap-10 gap-2">
        <Card className='relative  border-2 xl:relative w-full mt-10 px-2 xl:px-10 pb-20 flex flex-col justify-center items-center '>
            
             <Card className='w-full m-10 flex justify-center flex-row items-center'>
                 <Image className='w-16 left-0 absolute mb-8 md:w-28 md:h-auto xl:w-96 xl:absolute xl:left-[-180px] xl:top-[-400px]' src={data.card.images.left} />
                 <Heading className='w-6/12 text-white w-30 md:w-6/12 xl:w-6/12 text-center text-2xl xl:text-5xl font-extrabold heading-shadow drinks'><span>{data.card.title}</span></Heading>
                  <Image className='w-16 h-16 absolute right-0 md:w-28 md:h-auto xl:w-80 xl:absolute xl:right-[-80px] xl:top-[-200px]' src={data.card.images.right} />
             </Card>

         <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 pa-dot-leaders'>
             {data.card.data.map((item) =><HeadingGenerator item={item} />)}
          </ul>
        </Card> 
    </Background>
  )
}

export default CategoryList