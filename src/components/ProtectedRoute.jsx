import { Navigate } from "react-router-dom";
import { useAuth } from '../hooks/useAuth'

const ProtectedRoute = (Component) => {

  const { isAuthenticated } = useAuth();

  console.log(isAuthenticated)

  return isAuthenticated ? <Component /> : <Navigate to="/" />
}

export default ProtectedRoute;
