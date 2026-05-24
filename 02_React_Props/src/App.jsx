import { useState } from 'react'
import Card from './Components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card Name="Sumit" btn="Read More" />
      <Card Name="Karan" btn="Show More" />
    </>
  )
}

export default App
