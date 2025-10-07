import { useState } from "react"
import './App.css'

function App(){
    const[count,setCount]  = useState(0)
  
const handleOnChange=()=>{
    console.log("change")
}
    
    return(
        <>
        <p>Count:{count}</p>
        <input type="text" placeholder="count" onChange={handleOnChange}/>
        <button onClick={()=>{
        setCount(count+1);
        }}>+</button>
        <br></br>

        <button>addition</button>
        </>
    )
}
export default App;
