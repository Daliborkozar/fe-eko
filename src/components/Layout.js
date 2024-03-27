import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import LanguageSelector from "./translation/LanguageSelector";
import { useSelector } from "react-redux";
//import { useCreateAdminMutation, adminsApiSlice } from '../features/admins/adminApiSlice';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { CreateAdminForm } from "./forms/CreateAdminForm";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logo from "../assets/ekologo.png";
import { useRegisterUser } from "../api/ekoApi";
import { transformObject } from "../utils/transformCreateUser";
import { StepperHorizontal } from "./forms/Stepper";

const Layout = () => {
  const auth = useSelector((state) => state?.auth);
  const registerUser = useRegisterUser();
  //const [createAdmin] = useCreateAdminMutation();
  const [isModalOpen, setModalOpen] = useState(false);
  const [ispatientModalOpen, setPatientModalOpen] = useState(false);
  console.log(auth, "AUTH INSIDE TOOLBAR");
  console.log(auth?.role, "ROLES inside toolbar");
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handlePatientOpenModal = () => {
    setPatientModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleClosePatientModal = () => {
    setPatientModalOpen(false);
  };

  // const handleCreateUser = async (userData) => {

  //   const formattedData = {
  //     user: userData.username,
  //     displayName: userData.displayName,
  //     roles: {
  //       [userData.role.charAt(0).toUpperCase() + userData.role.slice(1)]: userData.role.charAt(0).toUpperCase() + userData.role.slice(1),
  //     },
  //     organization: userData.organization,
  //     pwd: userData.password,
  //     email: userData.email,
  //   };
  //   console.log(userData, 'userData');
  //   console.log(formattedData, 'formattedData')

  //   try {
  //     // Make POST request to create admin
  //     await createAdmin(formattedData);
  // //console.log(adminsApiSlice, 'adminapislice')
  //     // After successful creation, invalidate cache and refetch
  //     if (adminsApiSlice.util) {
  //       adminsApiSlice.util.invalidateTags('getAdmins');
  //     }
  //   } catch (error) {
  //     console.error('Error creating admin:', error);
  //   }
  // };
  const handleCreateUser = (formData) => {
    //e.preventDefault();
    //console.log(formdata);
    const createUserData = transformObject(formData);
    // const data = {
    //   user: "adminko55",
    //   displayName: "Adminko ciric55",
    //   roles: {
    //     Admin: "Admin",
    //   },
    //   organization: "Eden",
    //   pwd: "dada5",
    //   email: "dada@b55e.com",
    // };

    console.log(createUserData, "create user Data");
    registerUser.mutateAsync(createUserData);
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={Logo}
              alt="logo from app bar"
              style={{
                maxWidth: "150px",
                height: "auto",
                marginBottom: "10px",
              }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {auth?.user?.role !== "User" ? (
              <IconButton aria-label="patient-create" onClick={handleOpenModal}>
                <PersonAddIcon />
              </IconButton>
            ) : (
              <IconButton aria-label="user-create" onClick={handlePatientOpenModal}>
                <PersonAddIcon />
              </IconButton>
            )}

            <Typography
              variant="body1"
              component="div"
              sx={{ color: "black", marginLeft: "10px" }}
            >
              {auth?.user?.displayName}
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              //onClick={handleMenu}
              color="blue"
            >
              <AccountCircle />
            </IconButton>
            <LanguageSelector />
          </div>
        </Toolbar>
      </AppBar>

      {/* Render the child components */}
      <main>
        <Outlet />
      </main>

      {/* Modal for creating user */}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle
          sx={{
            backgroundColor: "black",
            color: "white",
            paddingTop: 1,
            paddingBottom: 1,
          }}
        >
          {auth?.user?.role === "SuperAdmin" ? "Create Admin" : "Create User"}
        </DialogTitle>
        <DialogContent sx={{ marginTop: 2 }}>
          <CreateAdminForm
            handleSubmit={handleCreateUser}
            handleCloseModal={handleCloseModal}
          />
        </DialogContent>
      </Dialog>
      <Dialog open={ispatientModalOpen} onClose={handleClosePatientModal} maxWidth='lg' >
        <DialogTitle
          sx={{
            backgroundColor: "black",
            color: "white",
            paddingTop: 1,
            paddingBottom: 1,
          }}
        >
          Create Patient
        </DialogTitle>
        <DialogContent >
        <StepperHorizontal />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Layout;
