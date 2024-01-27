// ProtectedRoute.js
import { Outlet, Navigate } from 'react-router-dom'

const SuperAdminPrivateRoute = ({token, requiredRole }) => {
    if (!token) {
        return <Navigate to="/login" />;
      }
    
      // Check if the user has the required role
      if (requiredRole && requiredRole !== "SuperAdmin") {
        return <Navigate to="/" />;
      }
    
      // If authenticated and has the required role, render the component
      return <Outlet/>;
    };
    

export default SuperAdminPrivateRoute
