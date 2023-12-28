import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import LanguageSelector from "./translation/LanguageSelector";
import { useSelector } from "react-redux";
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

const Layout = () => {
  const auth = useSelector((state) => state.auth);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCreateUser = (data) => {
    // Logic for creating user
    // You can access the form data here
    console.log(data);
    handleCloseModal();
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
            <IconButton aria-label="user-create" onClick={handleOpenModal}>
              <PersonAddIcon />
            </IconButton>
            <Typography
              variant="body1"
              component="div"
              sx={{ color: "black", marginLeft: "10px" }}
            >
              {auth.user}
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
      <DialogTitle sx={{ backgroundColor: 'black', color: 'white', paddingTop: 1, paddingBottom: 1 }}>
          Create Admin
        </DialogTitle>
        <DialogContent sx={{ marginTop: 2}}>
        <CreateAdminForm handleSubmit={handleCreateUser}  handleCloseModal={handleCloseModal}/>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Layout;
