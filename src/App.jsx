import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import MovieCarousel from './Components/MovieCarousel'


import Slider from './Components/Slider';


function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="App">
  <Header />
  <MovieCarousel />
  <Slider />
  </div>
  )
}

export default App
 