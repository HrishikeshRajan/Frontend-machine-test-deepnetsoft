/* eslint-disable react/prop-types */

const Navs = ({navs}) => {

    if(!navs) return null;

    return (
        <div className="text-white top-[62px] text-[16px] right-[200px] absolute gap-2 hidden lg:block">
    {
        navs.map((nav) =><a key={nav.id} className={`$font-['Oswald'] font-[400px] mx-4 leading-[23.71px] tracking-[3%] ${nav.id === 1.23 && 'text-[#0796EF]'}  `} href='#'>{nav.name}</a>  )
    }
       </div>
  )
}

export default Navs