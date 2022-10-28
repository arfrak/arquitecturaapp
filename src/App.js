import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./loginregistro/Auth";
import Dashboard from "./dashboard/Dashboard";
import Course from "./courses/Course"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses/:courseId" element={<Course />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
