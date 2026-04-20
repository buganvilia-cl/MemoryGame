import { useState } from 'react'
import GetPlants from './components/GetPlants.jsx'
import './App.css'

function App() {
  const [plants, setPlants] = useState([])


  return (
    <div>
      <h1>Fetched: </h1> 
   <GetPlants plants={plants} setPlants={setPlants} />

</div>
  )}    

export default App
