// ProtectedRoute.js
import { Outlet, Navigate } from 'react-router-dom'

const UsersPrivateRoute = ({token, requiredRole }) => {
    if (!token) {
        return <Navigate to="/login" />;
      }
    
      // Check if the user has the required role
      if (requiredRole && requiredRole !== "User") {
        return <Navigate to="/" />;
      }
    
      // If authenticated and has the required role, render the component
      return <Outlet/>;
    };
    

export default UsersPrivateRoute