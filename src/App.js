import React from "react";
import { Routes, Route } from "react-router-dom"
import Header from "./components/header.jsx"
import ShortHeader from "./components/shortHeader.jsx";

import { Registration, Main, Login, Profile, ProfileEmployee, ForStudent, ForEmployee, RegistrationEmployee, LoginEmployee} from '../src/pages/index.js'
import EditProfile from "./components/Student/editProfile.jsx";
import EditProfileEmployee from "./components/Employee/editProfile.jsx";
import Classrooms from "./components/Classroom/Classrooms.jsx";
import { useDispatch } from "react-redux";
import * as fetches from './redux/slices/user.js'
import CreateClassroom from "./components/Classroom/CreateClassroom.jsx";
import Requests from "./components/Employee/Moderator/Requests.jsx";
import ClassroomFull from './components/Classroom/ClassroomFull.jsx'
import InsertStudents from "./components/Classroom/InsertStudents.jsx";
import Questions from "./components/Student/Questions/Questions.jsx";
import CreateChapter from "./components/Employee/Lessons/CreateChapter.jsx";
import CreateLesson from "./components/Employee/Lessons/CreateLesson.jsx";
import Lessons from "./components/Employee/Lessons/Lessons.jsx";
function App() {
  
  const dispatch = useDispatch()

  React.useEffect( ()  => {
    dispatch(fetches.fetchAuthMe())
  }, [dispatch])
  

  return ( 
  <>
    <Routes>
      <Route path="/" element={<><Header/><Main/></>  } />

        <Route path="/for-student" element={<><Header/><ForStudent/></> } />
        <Route path="/for-student/login" element={<><ShortHeader/><Login/></> } />
        <Route path="/for-student/registration" element={<><ShortHeader/><Registration/></> } />
        
        <Route path="/for-employee" element={<><Header/><ForEmployee/></> } />
        <Route path="/for-employee/registration" element={<><ShortHeader/><RegistrationEmployee/></> } />
        <Route path="/for-employee/login" element={<><ShortHeader/><LoginEmployee/></> } />

        <Route path="/student-profile" element={<><Header/><Profile/></> } />
        <Route path="/employee-profile" element={<><Header/><ProfileEmployee/></> } />
        <Route path="/edit-student-profile" element={<><Header/><EditProfile/></> } />
        <Route path="/edit-employee-profile" element={<><Header/><EditProfileEmployee/></> } />

        <Route path="/classrooms" element={<><Header/><Classrooms/></> } />
        <Route path="/create-classroom" element={<><Header/><CreateClassroom/></> } />

        <Route path="/student-requests" element={<><Header/><Requests/></> } />
        
        <Route path="/classrooms/:id" element={<><Header/><ClassroomFull/></> } />
        <Route path="/classrooms/:id/insert-students" element={<><Header/><InsertStudents/></> } />

        <Route path="/student-questions" element={<><Header/><Questions/></> } />

        <Route path="/create-chapter" element={<><Header/><CreateChapter/></> } />
        <Route path="/create-lesson" element={<><Header/><CreateLesson/></> } />

        <Route path="/all-lessons" element={<><Header/><Lessons/></> } />


    </Routes>
  </>)
}

export default App;
