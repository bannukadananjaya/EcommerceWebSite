import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Admin from './pages/Admin'


const App = () => {
 
  return (
    <>  
      <Router>
        <Navbar/>
        <Admin/>  
      
      </Router>    
      {/* <Navbar/>  */}

      {/* <Sidebar/> */}
      {/* <Admin/> */}
    </>
  )
}

export default App
