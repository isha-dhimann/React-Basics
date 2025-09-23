import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './Components/Welcome.jsx'

// {FUNCTIONS IN REACT}

function myFn(){
  console.log("Isha")
}

// {function components its basically returns the html tags}
function Welcome (){
  return  <h1>my name is isha</h1>
}

createRoot(document.getElementById('root')).render(
  <>
<button onClick={myFn}>Submit</button>
<br></br>
<button onClick={()=>{
  console.log("ishuu dhiman")
}}>Submit</button>
<Welcome/>
</>
)
