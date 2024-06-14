import { useState, useEffect } from "react"


const useConfig = () => {
     const [config, setConfig] = useState(null)
     const [loading, setLoading] = useState(false)
     const [error, setError] = useState(false)
     useEffect(() => {
         const fetchUser = async () => {
                 setLoading(true)
                 try {
                     const response = await fetch(`https://backend-machine-test-deepnet-solutions-72h8.vercel.app/api/v1/home`)
                     if (!response.ok) {
                             throw new Error('500')    
                     }
                     const result = await response.json()

                   console.log('result', result)
                     if(result.data){
                         setConfig(result.data.config)
                     }
                 } catch (err) {
                    setLoading(false)
                     setError(true)
                 } finally {
                     setLoading(false)
                 }
             
         }
 
         fetchUser()
     }, [])
 
     return { config, loading, error }

}

export default useConfig