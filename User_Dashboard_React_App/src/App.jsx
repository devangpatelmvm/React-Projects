import { useState, useMemo, useEffect } from "react";
import {
  CssBaseline,
  ThemeProvider,
  IconButton,
  Box,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { lightTheme, darkTheme } from "./components/index";
import { useMediaQuery } from "@mui/material";
import "./App.css";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("darkMode");
    return storedTheme ? JSON.parse(storedTheme) : prefersDarkMode;
  });

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Box
          sx={{
            position: "fixed", // Fixed positioning to stay in place
            bottom: 32, // Distance from the bottom
            right: 38, // Distance from the right
          }}
        >
          <IconButton
            onClick={handleThemeChange}
            color="inherit"
            aria-label="toggle theme"
            size="large" 
            sx={{
                boxShadow: 8,       // Optional shadow
                width: 60,          // Custom width
                height: 60,         // Custom height
              }}
          >
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default App;
