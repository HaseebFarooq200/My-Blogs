import React,{createContext,useReducer} from "react";
import Navbar from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Logout from './components/Logout.jsx'
import Blog1 from './components/Blog1.jsx'
import Blog2 from  './components/Blog2.jsx'
import Blog3 from './components/Blog3.jsx'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { initialState, reducer } from '../src/reducer/UseReducer.js';

// Context API
export const UserContext = createContext();


const Routing = ()=>{
  return(
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />}/>
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/' element={<Login />} />
          <Route path='/Logout' element={<Logout />} />
          <Route path='/blog1' element={<Blog1 />} />
          <Route path='/blog2' element={<Blog2 />} />
          <Route path='/blog3' element={<Blog3 />} />
        </Routes> 
  )
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <Navbar />
        <Routing/>
      </Router>
     </UserContext.Provider>
  )
}

export default App;
