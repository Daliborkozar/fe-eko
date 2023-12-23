import React from "react";
import { Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  Box,
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
import { useTranslation } from "react-i18next";

const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledError = styled(FormHelperText)`
  color: red;
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
        <StyledHeader variant="h6">{t('generalData')}</StyledHeader>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{
            required: t("firstNameRequired"),
          }}
          render={({ field, fieldState }) => {
            return (
              <StyledInput
                label={`${t("firstName")}*`}
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
              label={`${t("lastName")}*`}
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
              //type="number"
              label={t("identityId")}
              fullWidth
              {...field}
              //error={fieldState?.invalid}
            />
          )}
        />
        
        {/* Birth Date field */}
        <div style={{ display: "block" }}>
        <Controller
        name="email"  // Use an appropriate name for your email field
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <StyledInput
            type="email"  // Use type "email" for email addresses
            label={t("emailLabel")}
            fullWidth
            {...field}
            error={fieldState?.invalid}
          />
        )}
      />
          <Controller
        name="phoneNumber1"  // Use an appropriate name for your phone number field
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <StyledInput
            type="tel"  // Use type "tel" for phone numbers
            label={t("phoneNumber1")}
            fullWidth
            {...field}
            error={fieldState?.invalid}
          />
        )}
      />
       <Controller
        name="phoneNumber2"  // Use an appropriate name for your phone number field
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <StyledInput
            type="tel"  // Use type "tel" for phone numbers
            label={t("phoneNumber2")}
            fullWidth
            {...field}
            error={fieldState?.invalid}
          />
        )}
      />
        </div>
      </Grid>
      {/* Detail Data */}
      <Grid item xs={12} md={6}>
        <StyledHeader variant="h6">{t('detailData')}</StyledHeader>
        <Controller
          name="height"
          control={control}
          defaultValue=""
          rules={{ validate: onlyNumbers }}
          render={({ field, fieldState }) => (
            <TextField
              type="number"
              label={`${t("height")}(mm)`}
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
              label={`${t("weight")}(kg)`}
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
              label={t('shoeSize')}
              fullWidth
              {...field}
              style={{ marginBottom: "10px" }}
              error={fieldState?.invalid}
            />
          )}
        />
        <GenderContainer>
          <GenderLabel component="legend">{t("gender")}:</GenderLabel>
          <Controller
            name="gender"
            control={control}
            defaultValue=""
            rules={{
              required: t("selectGender"),
            }}
            render={({ field, fieldState }) => (
              <FormControl component="fieldset">
                <RadioGroup {...field} row>
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label={t("male")}
                    style={{ flex: 1 }}
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label={t("female")}
                    style={{ flex: 1 }}
                  />
                </RadioGroup>
                {fieldState?.invalid && (
                  <StyledError>{fieldState?.error?.message}</StyledError>
                )}
              </FormControl>
            )}
          />
        </GenderContainer>
        <Controller
            name="birthdate"
            control={control}
            defaultValue={null} // Initialize the field with a default value
            rules={{
              required: t("birthDateRequired"),
            }}
            render={({ field, fieldState }) => (
              <FormControl fullWidth>
                <DatePicker
                  value={field.value} // Bind DatePicker value to field.value
                  onChange={(date) => field.onChange(date)}
                  label={t("dateofBirth")}
                  format="dd/MM/yy"
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
                {fieldState?.invalid && (
                  <StyledError>{fieldState?.error?.message}</StyledError>
                )}
              </FormControl>
            )}
          />
      </Grid>
    </Grid>
  );
};

export default PatientDataForm;
