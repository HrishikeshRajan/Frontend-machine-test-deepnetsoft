import useConfig from "./hooks/useConfig"
import Navbar from "./components/navbar/Navbar"
import { getCard } from "../../utils/getCard"
import Banner from "./components/banner/Banner"
import Category from "./components/category/Category"
import CategoryList from "./components/category/CategoryList"
import Smoke from "./components/smoke/Smoke"
import Card from "./components/card/Card"
import Order from "./components/order/Order"
import OrderInfo from "./components/order/OrderInfo"
import Contact from "./components/footer/Contact"
import Credits from "./components/footer/Credits"
import Loader from "./components/loader/Loader"

const Home = () => {

  const {config, error, loading} = useConfig()

  if(error) return null
  if(loading) return <Loader />
  if(!config) return null


  return (
    <div>
      <Navbar data = {getCard(config.cards,'header')} /> 
      <Banner data = {getCard(config.cards,'banner')} />
      <Card className='relative ' >
        <Category data = {getCard(config.cards,'categories')} />
        <CategoryList data =  {getCard(config.cards,'category')} />
        <Smoke data =  {getCard(config.cards,'smoke')} /> 
        <Order data =  {getCard(config.cards,'order-button')} />
        <OrderInfo data =  {getCard(config.cards,'order-info')} />
        <Contact data =  {getCard(config.cards,'footer-contact')} />
        <Credits data =  {getCard(config.cards,'footer-credits')} />
      </Card>
    </div>
  )
}

export default Home