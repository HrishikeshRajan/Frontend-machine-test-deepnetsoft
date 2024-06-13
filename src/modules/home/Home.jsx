import useConfig from "./hooks/useConfig"
import Navbar from "./components/navbar/Navbar"
import { getCard } from "../../utils/getCard"
import Banner from "./components/banner/Banner"
import Category from "./components/category/Category"


const Home = () => {


  const config = useConfig()


  return (
    <div>
      <Navbar data = {getCard(config.cards,'header')} /> 
      <Banner data = {getCard(config.cards,'banner')} />
      <Category data = {getCard(config.cards,'categories')} />
    </div>
  )
}

export default Home