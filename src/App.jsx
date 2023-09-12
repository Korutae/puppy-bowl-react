import AllPlayers from "./components/AllPlayers"
import NavBar from "./components/NavBar"
import NewPlayerForm from "./components/NewPlayerForm"
import SinglePlayer from "./components/SinglePlayer"
import Homepage from "./components/Homepage"
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<AllPlayers/>}/>
          <Route path='/players/:id' element={<SinglePlayer />}/>

        </Routes>
        <NavBar/>
      </HashRouter>

  )
}

export default App
