import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  MenuItem,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import styled from "styled-components";

const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const GenderLabel = styled(FormLabel)`
  margin-right: 20px;
`;

const StyledHeader = styled(Typography)`
  margin-bottom: 15px;
`;

const StyledInput = styled(TextField)`
  margin-bottom: 10px;
`;

const MyForm = ({ control }) => {
    //const { handleSubmit, control, formState, getValues, trigger } = useForm();

  const onlyNumbers = (value) => {
    const regex = /^\d+(\.\d+)?$/;
    return regex.test(value);
  };


  return (
    
          <Grid container spacing={2} p={2}>
            {/* General Data */}
            <Grid item xs={12} md={6}>
              <StyledHeader variant="h6">General Data</StyledHeader>
              <Controller
                name="firstname"
                control={control}
                defaultValue=""
                rules={{
                    required: 'First Name is required', // Example: Required validation rule
                    
                    // Add more validation rules as needed
                  }}
                 
                render={({ field, fieldState }) => (
                  <StyledInput label="First Name" fullWidth {...field} error={!!fieldState.error} 
                    
                  />
                )}
              />
              <Controller
                name="lastname"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledInput label="Last Name" fullWidth {...field} />
                )}
              />
              <Controller
                name="id"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledInput label="identity ID" fullWidth {...field} />
                )}
              />

              <GenderContainer>
                <GenderLabel component="legend">Gender:</GenderLabel>
                <Controller
                  name="gender"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormControl component="fieldset">
                      <RadioGroup {...field} row>
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                          style={{ flex: 1 }} // Adjust the styles for horizontal layout
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                          style={{ flex: 1 }} // Adjust the styles for horizontal layout
                        />
                      </RadioGroup>
                    </FormControl>
                  )}
                />
              </GenderContainer>

              {/* Birth Date field */}
              <div style={{ display: "block" }}>
                <Controller
                  name="birthdate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      label="Birth Date"
                      value={field.value}
                      onChange={(date) => field.onChange(date)}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  )}
                />
              </div>
              {/* Add other general data fields here */}
            </Grid>
            {/* Detail Data */}
            <Grid item xs={12} md={6}>
              <StyledHeader variant="h6">Detail Data</StyledHeader>
              <Controller
                name="height"
                control={control}
                defaultValue=""
                rules={{ validate: onlyNumbers }}
                render={({ field, fieldState }) => (
                  <TextField
                    type="number"
                    label="Height(mm)"
                    fullWidth
                    {...field}
                    error={!!fieldState.error}
                    helperText={
                      fieldState.error ? "Enter a valid height (e.g., 175)" : ""
                    }
                    style={{ marginBottom: "10px" }}
                  />
                )}
              />
              <Controller
                type="number"
                name="weight"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    label="Weight(kg)"
                    fullWidth
                    {...field}
                    style={{ marginBottom: "10px" }}
                  />
                )}
              />
              <Controller
                type="number"
                name="shoesize"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    style={{ marginBottom: "10px" }}
                    label="Shoe size"
                    fullWidth
                    {...field}
                  />
                )}
              />
              <Controller
                name="handPreference"
                control={control}
                defaultValue="right"
                render={({ field }) => (
                  <FormControl fullWidth>
                    <TextField
                      select
                      {...field}
                      style={{ marginBottom: "10px" }}
                    >
                      <MenuItem value="right">Right handed</MenuItem>
                      <MenuItem value="left">Left handed</MenuItem>
                    </TextField>
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>
       
  );
};

export default MyForm;
