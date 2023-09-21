import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MyForm from '../components/InputsForm';
import FeetForm from './FeetForm';
import { useForm, Controller } from 'react-hook-form';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const steps = ['Patient general data', 'Feet measurement', 'Overview'];

function StepperHorizontal() {
  const { handleSubmit, control } = useForm();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    // Initialize an object to store form data
    personalData: null,
    feetData: null,
  });

  const handleNext = () => {
    // Perform form validation here if needed
    if (activeStep === 0) {
      // If it's the first step, trigger form validation
      handleSubmit(onSubmit)();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const onSubmit = (data) => {
    // Check if all mandatory fields have values or perform validation
    console.log(data);

    if (activeStep === 0) {
      setFormData({ ...formData, personalData: data });
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({ personalData: null, feetData: null });
  };

  return (
    <Box sx={{ width: '100%' }} p={10}>
      <Stepper
        activeStep={activeStep}
        sx={{
          width: '100%',
          backgroundColor: '#f6f6f6',
          borderRadius: '10px',
        }}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {activeStep === 0 && <MyForm control={control} />}
                {activeStep === 1 && <FeetForm control={control} />}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button
                    type="button"
                    onClick={handleNext}
                    //disabled={!formData.personalData} // Disable Next if personalData is null
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </form>
            </div>
          </LocalizationProvider>
        </React.Fragment>
      )}
    </Box>
  );
}

export { StepperHorizontal };
