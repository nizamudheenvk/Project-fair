import { Routes ,Route} from 'react-router-dom'
import './App.css'
import Auth from './Pages/Auth'
import Dashbord from './Pages/Dashbord'
import Home from './Pages/Home'
import Project from './Pages/Project'
import Pnf from './Pages/Pnf'
import Footer from './components/Footer'

Routes
function App() {

  return (
    <>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Auth/>}/>
<Route path='/register' element={<Auth insideReginster={true}/>}/>
<Route path='/dashboard' element={<Dashbord/>}/>
<Route path='project' element={<Project/>}/>
<Route path='/*' element={<Pnf/>}/>
</Routes>  
<Footer/>
  </>
  )
}

export default App
