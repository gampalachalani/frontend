import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function useAuthCheck() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const role = sessionStorage.getItem("role");

    if (!token) {
      navigate("/login");
      return;
    }

    const userRoutes = ["/home", "/profile", "/investments"];

    if (role === "ADMIN") {
      return;
    } else if (role === "USER" && !userRoutes.includes(location.pathname)) {
      navigate("/home");
    }
  }, [navigate, location]);

  return null; 
}

export default useAuthCheck;
