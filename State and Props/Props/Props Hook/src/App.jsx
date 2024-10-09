import { useState } from 'react'
import Count from './Compne/Count'
function App() {
  const [no,setNo] = useState(0)
  const Increment = () =>{
      setNo(no+1)
  }
  const Decrement = () =>{
      setNo(no-1)
  }

return (
  
 
    <Count No ={no} inc={Increment} dec={Decrement}/>
  )
}

export default App
