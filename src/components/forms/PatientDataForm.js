import React from "react";
import { Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  Typography,
  FormControl,
  MenuItem,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledError = styled(FormHelperText)`
  color: red;
`

const GenderLabel = styled(FormLabel)`
  margin-right: 20px;
`;

const StyledHeader = styled(Typography)`
  margin-bottom: 15px;
`;

const StyledInput = styled(TextField)`
  margin-bottom: 10px;
`;

const PatientDataForm = ({ control }) => {
  //const { handleSubmit, control, formState, getValues, trigger } = useForm();
  const { t } = useTranslation();
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
          name="firstName"
          control={control}
          defaultValue=""
          rules={{
            required: "First Name is required",
          }}
          render={({ field, fieldState }) => {
            console.log(fieldState, "fieldState");
            return (
              <StyledInput
                label="First Name*"
                fullWidth
                {...field}
                error={fieldState?.invalid}
              />
            );
          }}
        />
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          rules={{
            required: "Last Name is required",
          }}
          render={({ field, fieldState }) => (
            <StyledInput
              label="Last Name"
              fullWidth
              {...field}
              error={fieldState?.invalid}
            />
          )}
        />
        <Controller
          name="id"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <StyledInput
              type="number"
              label="identity ID"
              fullWidth
              {...field}
              //error={fieldState?.invalid}
            />
          )}
        />
        <GenderContainer>
          <GenderLabel component="legend">Gender:</GenderLabel>
          <Controller
            name="gender"
            control={control}
            defaultValue=""
            rules={{
              required: "Please select a gender",
            }}
            render={({ field, fieldState }) => (
              <FormControl component="fieldset">
                <RadioGroup {...field} row>
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    style={{ flex: 1 }}
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                    style={{ flex: 1 }}
                  />
                </RadioGroup>
                {fieldState?.invalid && <StyledError>{fieldState?.error?.message}</StyledError>}
  
              </FormControl>
            )}
          />
        </GenderContainer>
        {/* Birth Date field */}
        <div style={{ display: "block" }}>
          <Controller
            name="birthdate"
            control={control}
            defaultValue={null} // Initialize the field with a default value
            rules={{
              required: "Birth Date is required",
            }}
            render={({ field, fieldState }) => (
              <FormControl fullWidth>
                <DatePicker
                  value={field.value} // Bind DatePicker value to field.value
                  onChange={(date) => field.onChange(date)}
                  label="Birth Date"
                  format="dd/MM/yy"
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
                {fieldState?.invalid && <StyledError>{fieldState?.error?.message}</StyledError>}
              </FormControl>
            )}
          />
        </div>
       
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
              error={fieldState?.invalid}
              style={{ marginBottom: "10px" }}
            />
          )}
        />
        <Controller
          type="number"
          name="weight"
          control={control}
          defaultValue=""
          rules={{
            required: "Please enter weight",
          }}
          render={({ field, fieldState }) => (
            <TextField
              label="Weight(kg)"
              fullWidth
              {...field}
              style={{ marginBottom: "10px" }}
              error={fieldState?.invalid}
            />
          )}
        />
        <Controller
          type="number"
          name="shoeSize"
          control={control}
          defaultValue=""
          rules={{
            required: "Please enter shoe size",
          }}
          render={({ field, fieldState }) => (
            <TextField
              label="shoe size"
              fullWidth
              {...field}
              style={{ marginBottom: "10px" }}
              error={fieldState?.invalid}
            />
          )}
        />
        <Controller
          name="handPreference"
          control={control}
          defaultValue="right"
          render={({ field }) => (
            <FormControl fullWidth>
              <TextField select {...field} style={{ marginBottom: "10px" }}>
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

export default PatientDataForm;
