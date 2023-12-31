import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import Logo from '../assets/ekologo.png'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from "../redux/authApiSlice";
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
  gap: 25px; /* Adjust this value according to your preference */
  input {
    height: 40px; /* Adjust this value to your desired height */
  }
`;

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
// const [ login, { isLoading}] = useLoginMutation()
  const [ login ] = useLoginMutation()
    const {
      register,
      handleSubmit,
      // watch,
      formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
      console.log(data)
      try {
          const userData = await login({ user: data.username, pwd: data.password}).unwrap()

          console.log(userData, 'user dataa')
          dispatch(setCredentials({ ...userData, user: data.username}))
          navigate('/table')
        // const response = await axios.post('api/users/login', {
        //   username: data.username,
        //   password: data.password,
        // });
        // const token = response.data.token;
    
        
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
            {/* register your input into the hook by invoking the "register" function */}
            <input placeholder="Enter Username" {...register("username")} />
  
            {/* include validation with required or other standard HTML validation rules */}
            <input placeholder="Enter Password" {...register("password", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
  
            <input type="submit" value="ULOGUJ SE"/>
          </FormContainer>
        </LoginCenter>
      </>
    );
  };
  
  export default LoginPage;