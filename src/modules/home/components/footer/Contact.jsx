/* eslint-disable react/prop-types */

import Card from "../card/Card";
import Heading from "../header/Header";
import Image from "../image/Image";
const Contact = ({data}) => {
    if(!data) return null;
  return (
    <Card className='w-full bg-black  text-white py-10 px-4 flex flex-col gap-4 xl:flex-row xl:justify-evenly'>
         {data.card.data.map((info) => <Card key={info.id} className={`border-2 w-full xl:w-6/12 border-white rounded-lg p-8 ${info.style} justify-center relative `}>
            {info.images ? <Image src={info.images.url} className={' absolute bg-black top-[-38px] xl:top-[-48px] left-50% w-[80px] h-[70px] xl:h-[90px] object-[-3%] xl:object-[2%]  gap-0 opacity-100 object-cover xl:object-[-12%]'} alt={info.images.altText} /> : '' }
           
           {info.additionalStyles ? 
           <Card className='relative '>
            <Heading  className={'text-3xl mt-5 font-[Oswald]'}>{info.additionalStyles.map((val,i) => <span key={i} style ={{...val.style}}>{val.text}</span>)}</Heading>  
            <u className="flex w-full gap-2 justify-center mt-5">{info.follow.map((icon) => <Image key={icon.id} src={icon.icon} />)}</u>
           </Card>
         : <Card className='flex flex-col justify-center w-full xl:w-6/12'>
          <Heading className='text-[#0796EF] font-bold text-center'>{info.text}</Heading>
          <ul className="mt-5 text-center">
            {info.options.map((opt) => <li key={opt.id} className="text-xs flex justify-center items-center p-2 gap-2"> <Image src={opt.icon} /> {opt.text}</li>)}
          </ul>
          </Card>}
         </Card>)}
    </Card>
  )
}

export default Contact