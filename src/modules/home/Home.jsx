import useConfig from "./hooks/useConfig"
import Navbar from "./components/navbar/Navbar"
import { getCard } from "../../utils/getCard"
import Banner from "./components/banner/Banner"
import Category from "./components/category/Category"
import CategoryList from "./components/category/CategoryList"
import Smoke from "./components/smoke/Smoke"
import Card from "./components/card/Card"

const Home = () => {


  const config = useConfig()


  return (
    <div>
      <Navbar data = {getCard(config.cards,'header')} /> 
      <Banner data = {getCard(config.cards,'banner')} />
      <Card className='relative' >
        <Category data = {getCard(config.cards,'categories')} />
        <CategoryList data =  {getCard(config.cards,'category')} />
        <Smoke data =  {getCard(config.cards,'smoke')} /> 
      </Card>
    </div>
  )
}

export default Home