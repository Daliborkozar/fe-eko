// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import InputForm from './components/InputsForm';
import { StepperHorizontal } from '../src/components/Stepper';
import Report from './components/Report';
import OverviewTable from './pages/OverviewTable';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login route without Layout */}
        <Route path="/" element={<LoginPage />} />

        {/* Other routes with Layout */}
        <Route
          path="/app/*"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<LoginPage />} />
          <Route path="patient" element={<InputForm />} />
          <Route path="stepper" element={<StepperHorizontal />} />
          <Route path="report" element={<Report />} />
          <Route path="table" element={<OverviewTable />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
