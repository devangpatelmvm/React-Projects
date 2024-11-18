import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/Signup.css";

export default function Signup() {
  return (
    <>
      <div className="signup-page">
        <Container maxWidth="sm">
          <Card className="signup-card">
            <CardContent>
              <Typography
                variant="h5"
                component="h1"
                className="login-title"
                gutterBottom
              >
                Sign Up
              </Typography>
              <form action="" className="signup-form">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="firstName"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lastName"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="signup-button"
                >
                  Sign Up
                </Button>
                <div className="forgot-password-link">
                  <span>Already have an account? </span>
                  <Link to="/login">Login here</Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </Container>
      </div>
    </>
  );
}
