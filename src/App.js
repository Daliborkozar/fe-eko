// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import InputForm from './components/forms/PatientDataForm';
import { StepperHorizontal } from './components/forms/Stepper';
import Report from './components/Report';
import Layout from './components/Layout';
import AdminList from './features/admins/AdminList';
import { useSelector } from 'react-redux';
import PrivateRoutes from './components/ProtectedRoutes'


const App = () => {
  const auth = useSelector(state => state.auth);
  console.log(auth);

  return (
      <Routes>
        <Route path="/*" element={<Layout />}>
          {/* Use Route for routes that require authentication */}
          <Route index element={<Navigate to="/login"/>} />
          <Route path="patient" element={<InputForm />} />
          <Route path="stepper" element={<StepperHorizontal />} />
          <Route element={<PrivateRoutes token={auth.token}/>}>
            <Route path="table" element={<AdminList />} />
          </Route>
        </Route>
        <Route path="report" element={<Report />} />
        {/* Public route accessible to everyone */}
        <Route path="login" element={<LoginPage />} /> 
    </Routes>
 
  );
};

export default App;