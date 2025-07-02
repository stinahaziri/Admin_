import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Doctors from "./doctors.jsx";
import AddDoctors from "./add-doctors.jsx";
import EditDoctor from "./editDoctor.jsx";

import Appointment from "./appointments.jsx";
import AddAppointment from "./addAppointment.jsx";

import Schedule from "./schedule.jsx";
import AddSchedule from "./addSchedule.jsx";

import Department from "./departaments.jsx";
import AddDepartament from "./addDepartament.jsx";
import EditDepartament from "./editDepartmanet.jsx";

import Index from "./index.jsx";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<Index />} />

        {/* Doctors */}
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/add-doctor" element={<AddDoctors />} />
        <Route path="/edit-doctor" element={<EditDoctor />} />

        {/* Appointments */}
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/add-appointment" element={<AddAppointment />} />

        {/* Schedule */}
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/add-schedule" element={<AddSchedule />} />

        {/* Departments */}
        <Route path="/department" element={<Department />} />
        <Route path="/add-departament" element={<AddDepartament />} />
        <Route path="/edit-departament/:id" element={<EditDepartament />} />
      </Routes>
    </BrowserRouter>
  );
}
