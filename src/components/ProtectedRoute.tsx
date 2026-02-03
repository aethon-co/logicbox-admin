import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
    tokenKey?: string;
    redirectPath?: string;
}

const ProtectedRoute = ({ tokenKey = 'token', redirectPath = '/login' }: ProtectedRouteProps) => {
    const token = localStorage.getItem(tokenKey);

    if (!token) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
