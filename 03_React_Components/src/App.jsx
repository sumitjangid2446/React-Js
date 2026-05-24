import { useState } from 'react'
import Demo from './Components/Demo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Demo Product="Vivo" Price=" Price :- 15,000" Btn="Buy now" />
      <Demo Product="Vivo T4x" Price="Price :- 15,500" Btn=" Purchacea Now " />

    </>
  )
}

export default App
