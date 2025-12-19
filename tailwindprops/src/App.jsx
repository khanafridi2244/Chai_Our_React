import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="bg-amber-200 text-black p-4 rounded-xl mb-4"  > Tailwind </h1>
     <Card  username="wedding card" btntext="click me"/>
      <Card username="dog card" btntext="read me"/>
    </>
  )
}

export default App
