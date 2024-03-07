// App.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import InputForm from './components/forms/PatientDataForm';
import { StepperHorizontal } from './components/forms/Stepper';
import Report from './components/Report';
import Layout from './components/Layout';
import AdminList from './features/superadmins/AdminList';
import { useSelector } from 'react-redux';
import SuperAdminPrivateRoute from './routes/SuperAdminPrivateRoute';
import AllUsersList from './features/superadmins/AllUsersList';
import AdminPrivateRoute from './routes/AdminPrivateRoute';
import UsersInOrganization from './features/admins/UsersInOrganization';
import UsersPrivateRoute from './routes/UsersPrivateRoute';
import UsersOverview from './features/users/UsersOverview'


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
          <Route element={<SuperAdminPrivateRoute token={auth?.token} requiredRole={auth?.roles?.[0]} />}>
            <Route path="admintable" element={<AdminList />} />
            <Route path="alluserstable" element={<AllUsersList />} />
          </Route>
          <Route element={<AdminPrivateRoute token={auth?.token} requiredRole={auth?.role} />}>
            <Route path=":orgname/users" element={<UsersInOrganization />} />
          </Route>
          <Route element={<UsersPrivateRoute token={auth?.token} requiredRole={auth?.role} />}>
            <Route path=":orgname/user" element={<UsersOverview />} />
          </Route>
        </Route>
        
        <Route path="report" element={<Report />} />
        {/* Public route accessible to everyone */}
        <Route path="login" element={<LoginPage />} /> 
    </Routes>
 
  );
};

export default App;
