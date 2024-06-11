import { Navigate, Outlet } from 'react-router-dom';
import { useUserStateContext } from '../context/ContextProvider';

function GuestLayout() {
  const { userToken } = useUserStateContext();
    return userToken? <Navigate to="/" /> : <Outlet /> ;
}

export default GuestLayout;
