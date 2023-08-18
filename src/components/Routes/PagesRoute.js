import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { LoginScreen } from "../Pages/Login";
// import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import DashBoardRoutes from "./DashBoardRoutes";

const PagesRoute = () => {
  return (
    <Routes>
      <Route path="/*" element={<DashBoardRoutes />} />
      <Route
        path="/"
        element={
          <PublicRoute>
            {/* <LoginScreen /> */}
            <DashBoardRoutes />
          </PublicRoute>
        }
      />
      <Route path="/*" element={<Navigate to="PokeGrid" />} />
    </Routes>
  );
};

export default PagesRoute;
