import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { Button, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import "../styles/Home.css"; // Assuming you have a CSS file for styling

const Home = () => {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);

  let handleJoinVideoCall = async () => {
    if (!meetingCode.trim()) return;
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <div className="navbar">
        <h1 className="logo">Video Buddy</h1>
        <div className="nav-right">
          <div className="history" onClick={() => navigate("/history")}>
            <RestoreIcon />
            <span>History</span>
          </div>
          <Button
            variant="outlined"
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Main Section */}
      <div className="main-content">
        {/* Left Panel */}
        <div className="left-panel">
          <h2>
          Bringing People Closer Through Seamless, High-Quality Video Conversations Anytime, Anywhere...
          </h2>
          <div className="join-section">
            <TextField
              value={meetingCode}
              onChange={(e) => setMeetingCode(e.target.value)}
              label="Enter Meeting Code"
              variant="outlined"
              fullWidth
              sx={{
                input: { color: "white" },
                label: { color: "rgba(255,255,255,0.7)" },
                fieldset: { borderColor: "rgba(255,255,255,0.3)" },
                "&:hover fieldset": { borderColor: "#3aa0ff" },
              }}
            />
            <Button
              onClick={handleJoinVideoCall}
              variant="contained"
              className="join-btn"
            >
              Join
            </Button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <img src="/logo3.png" alt="Video Buddy Logo" />
        </div>
      </div>
    </div>
  );
};

export default withAuth(Home);
