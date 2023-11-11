import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import InputForm from './components/InputsForm';
import { StepperHorizontal } from '../src/components/Stepper';
import Report from './components/Report';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/patient" element={<InputForm />} />
        <Route path="/stepper" element={<StepperHorizontal />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
