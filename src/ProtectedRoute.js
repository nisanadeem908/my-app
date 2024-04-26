import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    const isAuthenticated = sessionStorage.getItem('token');

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
