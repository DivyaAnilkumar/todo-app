import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard';
import Add from './components/Add';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     
    {/* <div>todo list</div> */}
      
     
     {/* <Dashboard/> */}
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
       <Route path='/add' element={<Add/>}  />
       </Routes>
     {/* </Router>  */}
     </>
    
  )
}

export default App
