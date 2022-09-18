import { Navigate ,Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';

const NotLoggedinRoute = () => {
    const {user}=useSelector(state=>state.auth);
    return user ? <Navigate to="/"/> : <Outlet/>
};
export default NotLoggedinRoute;