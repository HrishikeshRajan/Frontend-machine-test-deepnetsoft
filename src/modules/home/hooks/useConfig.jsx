import { useState } from "react"
import data from '../../../seed/config'


const useConfig = () => {
     const [config] = useState(data)
     return config
}

export default useConfig