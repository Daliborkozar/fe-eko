import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField, Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CreateAdminForm = ({ handleSubmit, handleCloseModal }) => {
  const { control, handleSubmit: rhfHandleSubmit } = useForm();

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
          <TextField label="Username" {...field} sx={{ width: '100%', marginTop: '10px' }} />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField label="Password" type="password" {...field} sx={{ width: '100%', marginTop: '10px' }} />
        )}
      />
      <Controller
        name="displayName"
        control={control}
        render={({ field }) => (
          <TextField label="Display Name" {...field} sx={{ width: '100%', marginTop: '10px' }} />
        )}
      />
      <Controller
        name="organization"
        control={control}
        render={({ field }) => (
          <TextField label="Organization" {...field} sx={{ width: '100%', marginTop: '10px' }} />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField label="Email" type="email" {...field} sx={{ width: '100%', marginTop: '10px' }} />
        )}
      />
      <Controller
        name="role"
        control={control}
        defaultValue=""  // Set the default value if needed
        render={({ field }) => (
          <FormControl fullWidth sx={{ marginTop: '10px' }}>
            <InputLabel id="role-label">Role</InputLabel>
            <Select labelId="role-label" {...field}>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '10px',
        }}
      >
        <Button type="button" onClick={handleCancelClick} sx={{ marginLeft: '10px' }}>
          Cancel
        </Button>
        <Button type="submit" sx={{ marginLeft: '10px' }}>
          Create
        </Button>
      </Box>
    </form>
  );
};

export { CreateAdminForm };
