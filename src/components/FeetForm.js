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
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
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

const FeetForm = () => {
    const currentDate = new Date();

    const { handleSubmit, control } = useForm({
        defaultValues: {
          examinationdate: currentDate,
          // ... other default values for your form fields
        },
      });
  const [previewData, setPreviewData] = React.useState(null);

  console.log(previewData);
  const onlyNumbers = (value) => {
    // This regex will match only numbers (including decimal points)
    const regex = /^\d+(\.\d+)?$/;
    return regex.test(value);
  };

  const onSubmit = (data) => {
    setPreviewData(data);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} p={2}>
            {/* General Data */}
            <Grid item xs={12} md={4}>
              <StyledHeader variant="h6">General Data</StyledHeader>
              <div style={{ marginBottom: "10px" }}>
                <Controller
                  name="examinationdate"
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
                name="shoesize"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    type="number"
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
              {/* Add other general data fields here */}
            </Grid>
            {/* Detail Data */}
            <Grid item xs={12} md={3}>
              <StyledHeader variant="h6">Left Foot</StyledHeader>
              <Controller
                name="footlengthleft"
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
                name="footwidthleft"
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
                name="mladepthleft"
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
                name="tendonpositionleft"
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
                name="legAlignmentleft"
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
                name="footlengthright"
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
                name="footwidthright"
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
                name="mladepthright"
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
                name="tendonpositionl"
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={6}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </LocalizationProvider>
  );
};

export default FeetForm;
