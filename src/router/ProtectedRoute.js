import React from "react";
import { Navigate, Outlet } from "react-router-dom";
function Protected({ }) {
    let isAuthinticated = true;
    if (!isAuthinticated) {
        return <Navigate to="/" replace />;
    } else {
        return <Outlet />;
    }
}
export default Protected;
