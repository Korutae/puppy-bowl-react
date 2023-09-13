import AllPlayers from "./components/AllPlayers"
import NavBar from "./components/NavBar"
import NewPlayerForm from "./components/NewPlayerForm"
import SinglePlayer from "./components/SinglePlayer"
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<AllPlayers/>}/>
          <Route path='/players:id' element={<SinglePlayer />}/>
          <Route path='/NewPlayerForm' element={<NewPlayerForm />}/>
        </Routes>

        </div>
  )
}

export default App
