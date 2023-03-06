import React from "react";
import { Routes, Route } from "react-router-dom"
import Header from "./components/header.jsx"
import ShortHeader from "./components/shortHeader.jsx";
import { Registration, Main, Login, Profile, ForStudent, ForEmployee} from '../src/pages/index.js'

function App() {
  
  return ( 
  <>
    <Routes>
        <Route path="/for-student" element={<><Header/><ForStudent/></> } />
        <Route path="/for-student/login" element={<><ShortHeader/><Login/></> } />
        <Route path="/" element={<><Header/><Main/></>  } />
        <Route path="/for-student/registration" element={<><ShortHeader/><Registration/></> } />
        
        
        <Route path="/for-employee" element={<><Header/><ForEmployee/></> } />
        <Route path="/student-profile" element={<><Header/><Profile/></> } />
    </Routes>
  </>)
}

export default App;
