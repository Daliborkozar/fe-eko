import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
//import selectCurrentToken  from "../redux/authSlice"

const RequireAuth = ({ element }) => {
    const token = useSelector(state => state.auth.token);
    console.log(token)
    const navigate = useNavigate()
    console.log(token, 'token from raquireAuth')
     if (!token) {
         // If not authenticated, redirect to the login page
         navigate('/login');
         return null; // Return null to prevent rendering the protected content
       }
    
      // If authenticated, render the protected content
      return element;
  };
  
  export default RequireAuth;