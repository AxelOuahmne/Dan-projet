import { Navigate, Outlet } from 'react-router-dom';
import { useUserStateContext } from '../context/ContextProvider';

function DefaultLayout() {
    const { userToken } = useUserStateContext();

    return userToken?  <Navigate to="/login" />:<Outlet />
       
  
}

export default DefaultLayout;
