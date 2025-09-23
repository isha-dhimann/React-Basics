import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const obj = {
  name : "ishuu"
}

const name = "Isha"
const H1 =
(<>
<h1>good morning {obj.name} </h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quos est laborum quas nam magnam officiis voluptatibus corporis possimus ea recusandae voluptates quia vero, non nobis qui! Exercitationem, sequi accusamus?
Doloremque, dolore velit sed esse quod nostrum quas facilis animi optio a ipsa fugiat molestias at, nobis ad dicta! Fuga magni dicta placeat veritatis accusantium nihil nostrum maiores dolorum quisquam.</p>
</>);

createRoot(document.getElementById('root')).render(
H1
)

