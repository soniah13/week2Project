import { useEffect, useState } from 'react'
import Header from './Components/header'
import Navbar from './Components/Navbar'
import CharacterList from './Components/CharacterList'
import Login from './Components/Login'




function App () {
  
  return (
    <div>   
      <Header/>
      <Navbar/>
      <CharacterList/>
      <Login/>
    

    </div>
  )
}
export default App
