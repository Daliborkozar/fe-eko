import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import Logo from '../assets/ekologo.png'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../api/axios';
import { setCredentials } from "../redux/authSlice";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import CheckIcon from '@mui/icons-material/Check';

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #90ee90;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const LoginCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: rgba(255,255,255, 0.8);
  width: 500px;
  border-radius: 5px;
  gap: 25px;
  input {
    height: 40px;
  }
`;

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post('/auth/login', {
        user: data.username,
        pwd: data.password,
      });

      console.log(response.data.user._id)
      // const userApi = await axiosInstance.get('/')
      
      // const response = await axiosInstance.get
      const userData = response.data;
      console.log(userData, 'user data');
      dispatch(setCredentials(userData));
      // if(userData.roles[0] === "SuperAdmin"){
      //   navigate('/admintable');
      // }
       if(userData?.user?.role === "Admin"){
         navigate(`/${userData.user.organization}/users`);
       }
       if(userData?.user?.role === "SuperAdmin"){
        navigate('/admintable');
      }
      // if(userData.roles[0] === "User"){
      //   navigate(`/${userData.organization}/user`);
      // }
      
    } catch (error) {
      // TODO: Handle login error, display an error message, etc.
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <MainWrapper />
      <Snackbar
        open
        autoHideDuration={2000}
        //onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}><Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert></Snackbar>
      
      <LoginCenter>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <img src={Logo} alt="logo" />
          <input placeholder="Enter Username" {...register("username")} />
          <input placeholder="Enter Password" {...register("password", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" value="ULOGUJ SE"/>
        </FormContainer>
      </LoginCenter>
    </>
  );
};

export default LoginPage;
