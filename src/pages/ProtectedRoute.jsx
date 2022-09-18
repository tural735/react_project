import { Navigate,Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.auth);

  return !user ? <Navigate to="/"/> : <Outlet/>
};
export default ProtectedRoute;