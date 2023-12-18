import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Home, About, Projects } from './pages';
import Navbar from './components/Navbar';


const App = () => {
  return (


    <main className="bg-black">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
        
      </Router>
      
      <footer className=' pl-10 bg-black w-full h-[2rem] text-white text-left animate-pulse'>
      <div className='flex text-left text-white'>root@localhost: cd /ThankYouForLettingMeWatchYouWatchMe</div>
      <div className='flex text-left text-white'>root@localhost: ThankYouForLettingMeWatchYouWatchMe$ ls -lah</div>    
      <div className='flex text-left text-white'>Permissions  Size  User  Data_Modified Name</div>   
      <div className='flex text-left text-white'>drwxr-xr-x - LuisIsAlive 1 ago 11:11 .  </div>  
      </footer>
    </main>
  )
}

export default App