import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Login from "../pages/Login";

const useAuth = () => {
  return JSON.parse(localStorage.getItem("userLogin"));
};

const useSession = () => {
  const session = useAuth();
  const decodedSession = session ? jwt_decode(session) : null;
  const navigate = useNavigate();
  useEffect(() => {
    if (!session) {
      navigate("/login", { replace: true });
    }
  }, [navigate, session]);
  return decodedSession;
};

export default function ProtectedRoutes() {
  const isAuthorized = useAuth();
  const session = useSession();
  return isAuthorized ? <Outlet /> : <Login />;
}
