import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const NotFound = () => {
const navigate = useNavigate()

useEffect(() => {
    const backToHome = setTimeout(() => {
        navigate ("*")
    }, 3000)
    return () => {
        clearTimeout(backToHome)
    }
}, [])
  
    return (
    <div>
        <h2>Error: 404</h2>
        <p>E nema ribice</p>
    </div>
  )
}

export default NotFound