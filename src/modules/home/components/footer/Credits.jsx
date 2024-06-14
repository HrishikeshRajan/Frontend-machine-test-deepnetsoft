import Card from "../card/Card";

/* eslint-disable react/prop-types */
const Credits = ({data}) => {

    if(!data) return null;
   return (
   <Card className='bg-[#1b1b1b] p-5 '>
        <ul className="text-white flex flex-col text-center xl:flex-row xl:justify-between">
            <li className="text-[#857878]">{data.card.card[0].title}</li>
      
             <li className="flex flex w-full pt-2 xl:pt-0 xl:w-6/12 justify-evenly text-center ">
             {data.card.card.slice(1).map((credit) => <li className="text-[#857878]" key={credit.id}>{credit.title}</li>)}
             </li>
        </ul>
    </Card>
  )
}

export default Credits