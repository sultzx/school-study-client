import React from "react";
import { Routes, Route } from "react-router-dom"
import Header from "./components/header.jsx"
import ShortHeader from "./components/shortHeader.jsx";
import { Registration, Main, Login, Profile} from '../src/pages/index.js'

function App() {
  
  return ( 
  <>
  

    <Routes>
        <Route path="/login" element={<><ShortHeader/><Login/></> } />
        <Route path="/" element={<><Header/><Main/></>  } />
        <Route path="/registration" element={<><ShortHeader/><Registration/></> } />
        <Route path="/profile" element={<><Header/><Profile/></> } />
      </Routes>

  </>)
}

export default App;
