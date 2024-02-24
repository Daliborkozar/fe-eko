import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import Logo from '../assets/ekologo.png'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../api/axios';
import { setCredentials } from "../redux/authSlice";

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

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post('/auth', {
        user: data.username,
        pwd: data.password,
      });
      
      const userData = response.data;
      console.log(userData, 'user data');
      dispatch(setCredentials({ ...userData, user: data.username }));
      if(userData.roles[0] === "SuperAdmin"){
        navigate('/admintable');
      }
      if(userData.roles[0] === "Admin"){
        navigate(`/${userData.organization}/users`);
      }
      if(userData.roles[0] === "User"){
        navigate(`/${userData.organization}/user`);
      }
      
    } catch (error) {
      // TODO: Handle login error, display an error message, etc.
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <MainWrapper />
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
