import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Snackbar } from "@mui/material";
import { AuthContext } from "../context/AuthContext.jsx";

import "../styles/Authentication.css";

const defaultTheme = createTheme();

export default function Authentication() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const { handleLogin, handleRegister } = React.useContext(AuthContext);

  const handleAuth = async () => {
    try {
      if (formState === 0) {
        await handleLogin(username, password);
      } else {
        let result = await handleRegister(name, username, password);
        console.log(result);
        setUsername("");
        setPassword("");
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
      }
    } catch (err) {
      console.error(err);
      let errMsg = err?.response?.data?.message || "Something went wrong";
      setError(errMsg);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div className="forms">
        {/* Floating animated blobs */}
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>

        <Grid container component="main" className="form-grid">
          <Grid item xs={12} sm={8} md={5}>
            
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 4,
                  width: "100%",
                  position: "relative",
                  zIndex: 10,
                }}
              >
                {/* Rest of your form remains the same */}
              </Box>
            
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>

            <div className="form-toggle">
              <Button
                className={formState === 0 ? "active" : ""}
                onClick={() => setFormState(0)}
              >
                Sign In
              </Button>
              <Button
                className={formState === 1 ? "active" : ""}
                onClick={() => setFormState(1)}
              >
                Sign Up
              </Button>
            </div>

            <Box component="form" noValidate sx={{ mt: 2, width: "100%" }}>
              {formState === 1 && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Full Name"
                  value={name}
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                  sx={{
                    input: { color: "#E0E6F0" },
                    label: { color: "#A0B0C5" },
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#141828",
                      borderRadius: "6px",
                      "& fieldset": { borderColor: "#2A2F3C" },
                      "&:hover fieldset": { borderColor: "#3AA0FF" },
                      "&.Mui-focused fieldset": { borderColor: "#1E90FF" },
                    },
                  }}
                />
              )}

<TextField
  margin="normal"
  required
  fullWidth
  label="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  sx={{
    input: { color: "#E0E6F0" },
    label: { color: "#A0B0C5" },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#141828",
      borderRadius: "6px",
      "& fieldset": { borderColor: "#2A2F3C" },
      "&:hover fieldset": { borderColor: "#3AA0FF" },
      "&.Mui-focused fieldset": { borderColor: "#1E90FF" },
    },
  }}
/>

<TextField
  margin="normal"
  required
  fullWidth
  label="Password"
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  sx={{
    input: { color: "#E0E6F0" },
    label: { color: "#A0B0C5" },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#141828",
      borderRadius: "6px",
      "& fieldset": { borderColor: "#2A2F3C" },
      "&:hover fieldset": { borderColor: "#3AA0FF" },
      "&.Mui-focused fieldset": { borderColor: "#1E90FF" },
    },
  }}
/>


              <p className="error">{error}</p>
              <Button
                type="button"
                fullWidth
                className="submit-btn"
                onClick={handleAuth}
                sx={{
                  fontWeight: 500,
                  textTransform: "none",
                  padding: "8px 24px",
                  borderRadius: "6px",
                  "&:hover": { boxShadow: "0 0 12px #3AA0FF" },
                }}
              >
                {formState === 0 ? "Login" : "Register"}
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Snackbar open={open} autoHideDuration={4000} message={message} />
      </div>
    </ThemeProvider>
  );
}
