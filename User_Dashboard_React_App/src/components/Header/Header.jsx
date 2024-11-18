import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { LogoutBtn, UserManagementBtn, ArticleBtn } from "../index";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              navigate("/home");
            }}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          {location.pathname !== "/usermanagement" && (
            <Box sx={{ mr: { xs: 1, sm: 2 } }}>
              <UserManagementBtn />
            </Box>
          )}

          {location.pathname !== "/article" && (
            <Box sx={{ mr: { xs: 1, sm: 2 } }}>
              <ArticleBtn />
            </Box>
          )}
          <Box>
            <LogoutBtn />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
