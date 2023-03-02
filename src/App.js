import React from "react";
import { Routes, Route } from "react-router-dom"
import Header from "./components/header.jsx"
import { Registration, Main} from '../src/pages/index.js'

function App() {
  
  return ( 
  <>
  

    <Routes>
        <Route path="/login" element={<><>Login</></> } />
        <Route path="/" element={<><Header/><Main/></>  } />
        <Route path="/registration" element={<><Registration/></> } />
        <Route path="/profile" element={<><Header/>asdasd</> } />
      </Routes>

  </>)
}

export default App;
