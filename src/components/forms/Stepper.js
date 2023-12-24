import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import FeetForm from "./FeetForm";
import { useForm } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Overview } from "./Overview";
import PatientDataForm from "./PatientDataForm";
import TherapyForm from "./TherapyForm";
import { useTranslation } from "react-i18next";
//import Logo from '../assets/ekologo.png'



function StepperHorizontal() {
  const { handleSubmit, control, watch } = useForm();
  const { t } = useTranslation();
  const steps = [t("patientGeneralData"), t('feetMeasurement'), "Overview", "Therapy"];
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  
  const personalData = watch(); // Get all form data using watch()

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
    if (activeStep === steps.length) {
      // Log form data only on the last step
      console.log("Final Form Data:", data);
    }
    if (activeStep === 0) {
      // Form data from the first step
      console.log("Personal Data:", data);
    } else if (activeStep === 1) {
      // Form data from the second step
      console.log("Feet Data:", data);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleOpenReport =  () => {
      navigate('/report', { state: { personalData } })
  }

  console.log(personalData)

  return (
    <Box sx={{ width: "100%" }} p={5}>
      <Stepper
        activeStep={activeStep}
        sx={{
          width: "100%",
          backgroundColor: "#f6f6f6",
          borderRadius: "10px",
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
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2, justifyContent: 'center' }}>
            
            <Button onClick={handleOpenReport} variant="contained">Open Report</Button>
            <Button onClick={handleReset}>Back to patient list</Button>
         </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {activeStep === 0 && <PatientDataForm control={control} />}
                {activeStep === 1 && <FeetForm control={control} />}
                {activeStep === 2 && <Overview personalData={personalData} />}
                {activeStep === 3 && <TherapyForm control={control} personalData={personalData}/> }
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button
                    type="button"
                    onClick={handleNext}
                    // Enable Next for the "Overview" step
                  >
                    {activeStep === steps.length - 1  ? "Finish" : "Next"}
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
