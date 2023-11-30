// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import InputForm from './components/InputsForm';
import { StepperHorizontal } from '../src/components/Stepper';
import Report from './components/Report';
import OverviewTable from './pages/OverviewTable';
import Layout from './components/Layout';
import AdminList from './features/admins/AdminList';
import RequireAuth from './components/RequireAuth';
import { useSelector } from 'react-redux';
import PrivateRoutes from './components/ProtectedRoutes'

const App = () => {
  const auth = useSelector(state => state.auth);
  console.log(auth);

  return (
  
      // <Routes>
      //   <Route
      //     path="/"
      //     element={
      //       <Layout>
      //         {/* Use ProtectedRoute for routes that require authentication */}
      //         {/* <ProtectedRoute
      //           index
      //           isAuthenticated={auth.token}
      //           element={<Navigate to="/login" />}
      //         /> */}
      //         <ProtectedRoute
      //           path="patient"
      //           isAuthenticated={auth.token}
      //           element={<InputForm />}
      //         />
      //         <ProtectedRoute
      //           path="stepper"
      //           isAuthenticated={auth.token}
      //           element={<StepperHorizontal />}
      //         />
      //         <ProtectedRoute
      //           path="report"
      //           isAuthenticated={auth.token}
      //           element={<Report />}
      //         />
      //         <ProtectedRoute
      //           path="table"
      //           isAuthenticated={auth.token}
      //           element={<AdminList />}
      //         />
      //       </Layout>
      //     }
      //   />
      //   {/* Public route accessible to everyone */}
      //   <Route path="login" element={<LoginPage />} />
      // </Routes>
      <Routes>
        <Route path="/*" element={<Layout />}>
          {/* Use Route for routes that require authentication */}
          <Route index element={<h1>Home Page</h1>} />
          <Route path="patient" element={<InputForm />} />
          <Route path="stepper" element={<StepperHorizontal />} />
          <Route path="report" element={<Report />} />
          <Route element={<PrivateRoutes token={auth.token}/>}>
            <Route path="table" element={<AdminList />} />
          </Route>
        </Route>
        {/* Public route accessible to everyone */}
        <Route path="login" element={<LoginPage />} /> 
    </Routes>
 
  );
};

export default App;