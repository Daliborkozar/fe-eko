import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  FormLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styled from "styled-components";

const StyledHeader = styled(Typography)`
  margin-bottom: 15px;
`;

const StyledInput = styled(TextField)`
  margin-bottom: 10px;
`;

const LegDiffContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LegDiffLabel = styled(FormLabel)`
  margin-right: 20px;
  margin-left: 10px;
  width: max-content;
`;

const FeetForm = ({ control }) => {
    const currentDate = new Date();

   

  const onlyNumbers = (value) => {
    // This regex will match only numbers (including decimal points)
    const regex = /^\d+(\.\d+)?$/;
    return regex.test(value);
  };


  return (
    <>
        <Grid container spacing={2} p={2}>
            {/* General Data */}
            <Grid item xs={12} md={4}>
              <StyledHeader variant="h6">General Data</StyledHeader>
              <div style={{ marginBottom: "10px" }}>
                <Controller
                  name="examinationdate"
                  defaultValue={new Date()}
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      label="Examination Date"
                      value={field.value}
                      onChange={(date) => field.onChange(date)}
                      renderInput={(params) => <TextField {...params} />}
                      style={{ marginBottom: "10px" }}
                    />
                  )}
                />
              </div>
              {/* Add other general data fields here */}
            </Grid>
            {/* Detail Data */}
            <Grid item xs={12} md={3}>
              <StyledHeader variant="h6">Left Foot</StyledHeader>
              <Controller
                name="footLengthLeft"
                control={control}
                defaultValue=""
                rules={{ validate: onlyNumbers }}
                render={({ field, fieldState }) => (
                  <TextField
                    type="number"
                    label="Foot Length(mm)"
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
                name="footWidthLeft"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    label="Foot Width(mm)"
                    fullWidth
                    {...field}
                    style={{ marginBottom: "10px" }}
                  />
                )}
              />
              <Controller
                type="number"
                name="mlaDepthLeft"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    style={{ marginBottom: "10px" }}
                    label="MLA Depth(mm)*"
                    fullWidth
                    {...field}
                  />
                )}
              />
              <Controller
                type="number"
                name="tendonPositionLeft"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    style={{ marginBottom: "10px" }}
                    label="Tendon position(mm)"
                    fullWidth
                    {...field}
                  />
                )}
              />
              <Controller
                name="legAlignmentLeft"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl fullWidth>
                    <Select
                      {...field}
                      displayEmpty
                      renderValue={(selected) =>
                        selected === "" ? "Select Alignment" : selected
                      }
                      style={{ marginBottom: "10px" }}
                    >
                      <MenuItem value="">
                        <em>Select Alignment</em>
                      </MenuItem>
                      <MenuItem value="valgus">Valgus</MenuItem>
                      <MenuItem value="varus">Varus</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledHeader variant="h6">Right Foot</StyledHeader>
              <Controller
                name="footLengthRight"
                control={control}
                defaultValue=""
                rules={{ validate: onlyNumbers }}
                render={({ field, fieldState }) => (
                  <TextField
                    type="number"
                    label="Foot Length(mm)"
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
                name="footWidthRight"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    label="Foot Width(mm)"
                    fullWidth
                    {...field}
                    style={{ marginBottom: "10px" }}
                  />
                )}
              />
              <Controller
                type="number"
                name="mlaDepthRight"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    style={{ marginBottom: "10px" }}
                    label="MLA Depth(mm)*"
                    fullWidth
                    {...field}
                  />
                )}
              />
              <Controller
                type="number"
                name="tendonPositionRight"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    style={{ marginBottom: "10px" }}
                    label="Tendon position(mm)"
                    fullWidth
                    {...field}
                  />
                )}
              />
              <Controller
                name="legAlignmentRight"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl fullWidth>
                    <Select
                      {...field}
                      displayEmpty
                      renderValue={(selected) =>
                        selected === "" ? "Select Alignment" : selected
                      }
                      style={{ marginBottom: "10px" }}
                    >
                      <MenuItem value="">
                        <em>Select Alignment</em>
                      </MenuItem>
                      <MenuItem value="valgus">Valgus</MenuItem>
                      <MenuItem value="varus">Varus</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={6}>
              <LegDiffContainer>
                <LegDiffLabel>Leg Length Difference*:</LegDiffLabel>
                <Controller
                  name="legLengthDifference"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormControl>
                      <TextField
                        type="number"
                        style={{ marginRight: "10px", width: "100px" }}
                        label="(mm)*"
                        fullWidth
                        {...field}
                      />
                    </FormControl>
                  )}
                />

                <Controller
                  name="selectedLeg"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormControl >
                      <LegDiffContainer>
                        <Select
                          {...field}
                          displayEmpty
                          renderValue={(selected) =>
                            selected === "" ? "Select Leg" : selected
                          }
                        >
                          <MenuItem value="">
                            <em>Select Leg</em>
                          </MenuItem>
                          <MenuItem value="left">Left</MenuItem>
                          <MenuItem value="right">Right</MenuItem>
                        </Select>
                      </LegDiffContainer>
                    </FormControl>
                  )}
                />
              </LegDiffContainer>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={6}>
              <LegDiffContainer>
                <LegDiffLabel>FootPrint Split:</LegDiffLabel>
                <Controller
                  name="leftFootprintSplit"
                  control={control}
                  defaultValue={false} // Set the default value as appropriate
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox {...field} />}
                      label="Left"
                      
                    />
                  )}
                />

                <Controller
                  name="rightFootprintSplit"
                  control={control}
                  defaultValue={false} // Set the default value as appropriate
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox {...field} />}
                      label="Right"
                      
                    />
                  )}
                />
              </LegDiffContainer>
            </Grid>
          </Grid>
          </>
       )
}

export default FeetForm;
