import useConfig from "./hooks/useConfig"
import Navbar from "./components/navbar/Navbar"
import { getCard } from "../../utils/getCard"

const Home = () => {


  const config = useConfig()

  return (
    <div>
      <Navbar data = {getCard(config.cards,'header')} /> 
    </div>
  )
}

export default Home