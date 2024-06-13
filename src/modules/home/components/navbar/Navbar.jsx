/* eslint-disable react/prop-types */

import Card from "../card/Card"
import Heading from "../header/Header"
import Image from "../image/Image"
import Navs from "./Navs"

const Navbar = ({data}) => {
  if(!data) return null

  const  {card} = data
  
  return (
    <Card  className={'w-full h-[100px] top-[-25px] gap-0 opacity-100 bg-[#121618] relative'}>
      <header className="flex justify-center xl:justify-start" >
         <Image src={card.image.url} className={'absolute w-[80px] xl:w-[120px] h-[70px] xl:h-[90px] object-[-6%] top-[64px] xl:top-[53px]  xl:left-[50px] gap-0 opacity-100 object-cover xl:object-[-12%]'} alt={card.image.altText} />
         <Heading  className={'absolute w-[154px] h-[52px] top-[60px]  text-4xl font-[Oswald] left-[170px] gap-0 opacity-100 object-cover object-left-[-10%] hidden lg:block'}>{card.title.additionalStyles.map((val,i) => <span key={i} style ={{...val.style}}>{val.text}</span>)}</Heading>
      </header>
      <Navs navs={card.navs.list} className={'hidden lg:block'} />
      <button className="absolute top-[55px] right-0 xl:hidden pe-5"><Image src={card.navs.button.icon} /></button>
    </Card>
  )
}

export default Navbar