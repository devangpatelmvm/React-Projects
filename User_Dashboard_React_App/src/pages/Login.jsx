import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/home");
  };

  return (
    <>
    <div className="login-page">
      <Container maxWidth="sm">
        <Card className="login-card">
          <CardContent>
            <Typography
              variant="h5"
              component="h1"
              className="login-title"
              gutterBottom
            >
              Login
            </Typography>
            <form onSubmit={handleSubmit} noValidate className="login-form">
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="login-button"
              >
                Sign In
              </Button>
              <div className="forgot-password-link">
                <Link to="/login">Forget password?</Link>
              </div>
              <Button
                variant="contained"
                className="create-new-account-button"
                size="small"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Create new account
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
    </>
  );
};

export default Login;
