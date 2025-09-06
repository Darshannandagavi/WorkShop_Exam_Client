import logo from "./logo.svg";
import "./App.css";
import GuestLayout from "./components/GuestLAyout/GuestLayout";
import { Route, Routes } from "react-router-dom";
import Login from "./components/GuestLAyout/Login";
import Register from "./components/GuestLAyout/Register";
import UserLayout from "./components/UserLayout/UserLayout";
import Profile from "./components/UserLayout/Profile";
import ChangePassword from "./components/UserLayout/ChangePassword";
import ForgotPassword from "./components/UserLayout/ForgotPassword";
import AdminLayout from "./components/AdminLayout/AdminLayout";
import ManageExam from "./components/AdminLayout/ManageExam";
import Home from "./components/GuestLAyout/Home";
import AttendExam from "./components/UserLayout/AttendExam";
import ExamHistory from "./components/UserLayout/ExamHistory";
import AdminExamAttempts from "./components/AdminLayout/AdminExamAttempts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Route>

        <Route path="/user" element={<UserLayout />}>
          <Route index element={<AttendExam />} />
          <Route path="history" element={<ExamHistory/>}/>
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/changepassword" element={<ChangePassword />} />
          
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<ManageExam />} />
          <Route path="/admin/exam" element={<ManageExam />} />
          <Route path="/admin/history" element={<AdminExamAttempts/>} />
          <Route path="/admin/changepassword" element={<ChangePassword />} />
        </Route>

      
      </Routes>
    </div>
  );
}

export default App;
