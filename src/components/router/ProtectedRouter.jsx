import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, ...rest }) => {
    return (
        localStorage.getItem('access_token') ? (
            children
        ) : (
            <Navigate to='/login' replace />
        )
    );
};