/* eslint-disable react/prop-types */

const Category = ({data}) => {

    if(!data) return null;
    return (
    <div
     style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.8)), url(${data.card.backgroundImage.url})`,
        height: '100px'
     }}
     className="absolute w-full top-[380px] sm:top-[600px] xl:top-[380px] -z-10 flex justify-center items-center xl:gap-10 gap-2"
    >
        {data.card.data.map((item) => <button key={item.id} className={` w-3/12 xl:w-1/12 px-2 py-2 xl:py-3 font-bold text-white border-[1px] border-[#0796EF] ${item.title === 'DRINKS' ? 'bg-[#0796EF]' : 'bg-black'}`}>{item.title}</button>)}

    </div>
  )
}

export default Category