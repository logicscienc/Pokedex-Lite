import { useState } from 'react'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   <Home/>
    <Toaster position="top-right" />
   </div>
  )
}

export default App
