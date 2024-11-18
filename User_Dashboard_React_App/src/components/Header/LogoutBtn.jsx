import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function LogoutBtn() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const logoutHandler = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <Button variant="contained" color="inherit" onClick={logoutHandler}>
      Logout
    </Button>
  );
}
