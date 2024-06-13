/* eslint-disable react/prop-types */

import Heading from "../header/Header"


const Banner = ({data}) => {

    if(!data) return null

  return (
    <div style={
        {
         backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, 0.7)), url(${data.card.backgroundImage.url})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'top',
         '@media (maxWidth: 640px)': { // sm
            backgroundSize: 'auto 100%', // Adjust background size for small screens
          },
          '@media (minWidth: 641px) and (maxWidth: 768px)': { // md
            backgroundSize: 'contain', // Adjust background size for medium screens
            backgroundPosition: 'right',
          },
          '@media (minWidth: 769px)': { // lg and above
            backgroundSize: 'cover', // Adjust background size for large screens
          },

        }}
     className=" relative w-full absolute top-[-25px] -z-10 h-[50vh] object-contain sm:flex sm:justify-center sm:items-center">
         <div className="flex flex-col items-center h-fit justify-center">
             < Heading className='md:text-center text-white text-4xl pt-20 sm:pt-0  text-justify  xl:text-6xl font-[600] font-[Oswald]  heading-shadow'>
                {data.card.title}
            </ Heading >
            <p className="xl:w-6/12 h-[44px] font-[400] pt-5 text-xs  xl:text-[18px] text-center leading-[21.82px] text-[#BBBBBB] font-[Kelly Slab] ">{data.card.description}</p>
   
         </div>
    </div>
  )
}

export default Banner