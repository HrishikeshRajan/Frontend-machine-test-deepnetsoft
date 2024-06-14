import useConfig from "./hooks/useConfig"
import Navbar from "./components/navbar/Navbar"
import { getCard } from "../../utils/getCard"
import Banner from "./components/banner/Banner"
import Category from "./components/category/Category"
import CategoryList from "./components/category/CategoryList"

const Home = () => {


  const config = useConfig()


  return (
    <div>
      <Navbar data = {getCard(config.cards,'header')} /> 
      <Banner data = {getCard(config.cards,'banner')} />
      <Category data = {getCard(config.cards,'categories')} />
      <CategoryList data =  {getCard(config.cards,'category')} />
    </div>
  )
}

export default Home