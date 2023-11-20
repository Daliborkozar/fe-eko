import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Link as MuiLink, IconButton} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Logo from '../assets/ekologo.png';

const Layout = () => {
  return (
    <div>
     <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={Logo} alt="Your Image" style={{ maxWidth: '150px', height: 'auto', marginBottom: '10px' }} />
          
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="body1" component="div" sx={{ color: 'black', marginLeft: '10px' }}>
            SuperAdmin
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
        </div>
      </Toolbar>
    </AppBar>

      {/* Render the child components */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
