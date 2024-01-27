import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useSelector } from "react-redux";

const CreateAdminForm = ({ handleSubmit, handleCloseModal }) => {
  const { control, handleSubmit: rhfHandleSubmit } = useForm();
  const auth = useSelector((state) => state.auth);
  console.log(auth, 'auth from form')
  const isDisabled = auth.roles[0] !== 'SuperAdmin';
  const handleCreateClick = (data) => {
    console.log(data);
    handleSubmit(data);
    handleCloseModal();
  };

  const handleCancelClick = () => {
    handleCloseModal();
  };

  return (
    <form onSubmit={rhfHandleSubmit(handleCreateClick)}>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            label="Username"
            {...field}
            sx={{ width: "100%", marginTop: "10px" }}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            label="Password"
            type="password"
            {...field}
            sx={{ width: "100%", marginTop: "10px" }}
          />
        )}
      />
      <Controller
        name="displayName"
        control={control}
        render={({ field }) => (
          <TextField
            label="Display Name"
            {...field}
            sx={{ width: "100%", marginTop: "10px" }}
          />
        )}
      />
      <Controller
        name="organization"
        control={control}
        defaultValue={auth.roles[0] === "SuperAdmin" ? "" : auth.organization}
        render={({ field }) => (
          <TextField
          disabled={isDisabled}
            label="Organization"
            {...field}
            sx={{ width: "100%", marginTop: "10px" }}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            label="Email"
            type="email"
            {...field}
            sx={{ width: "100%", marginTop: "10px" }}
          />
        )}
      />
      <Controller
        name="role"
        control={control}
        defaultValue={auth.roles[0] === "SuperAdmin" ? "" : "User"}
        render={({ field }) => (
          <FormControl fullWidth sx={{ marginTop: "10px" }}>
            <InputLabel id="role-label">Role</InputLabel>
            <Select labelId="role-label" {...field} disabled={isDisabled} >
              {auth.roles[0] === "SuperAdmin" && (
                <MenuItem value="Admin">Admin</MenuItem>
              )}
              <MenuItem value="User">User</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
        }}
      >
        <Button
          type="button"
          onClick={handleCancelClick}
          sx={{ marginLeft: "10px" }}
        >
          Cancel
        </Button>
        <Button type="submit" sx={{ marginLeft: "10px" }}>
          Create
        </Button>
      </Box>
    </form>
  );
};

export { CreateAdminForm };
