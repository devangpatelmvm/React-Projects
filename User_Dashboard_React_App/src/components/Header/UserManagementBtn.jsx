import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function UserManagementBtn() {
  const navigate = useNavigate();
  const userManagementBtn = () => {
    navigate("/usermanagement");
  };
  return (
    <>
      <Button variant="contained" color="inherit" onClick={userManagementBtn}>
        User Management
      </Button>
    </>
  );
}
