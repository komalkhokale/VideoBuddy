import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton, Box } from "@mui/material";

export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);
  const [meetings, setMeetings] = useState([]);
  const routeTo = useNavigate();

  // Fix scrolling by updating body styles
  useEffect(() => {
    document.body.style.height = "auto";
    document.body.style.minHeight = "100%";
    document.body.style.margin = "0";
    document.body.style.overflowY = "auto";

    return () => {
      // Clean up on unmount
      document.body.style.overflowY = "";
      document.body.style.height = "";
      document.body.style.minHeight = "";
      document.body.style.margin = "";
    };
  }, []);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        setMeetings(history);
      } catch {
        // TODO: Add snackbar
      }
    };
    fetchHistory();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle at 20% 30%, #08121f, #000610)",
        padding: "20px",
        color: "#fff",
      }}
    >
      <IconButton
        onClick={() => routeTo("/home")}
        sx={{
          backgroundColor: "rgba(255,255,255,0.1)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
          mb: 2,
        }}
      >
        <HomeIcon />
      </IconButton>

      {meetings.length !== 0 ? (
        <Box display="grid" gap={2}>
          {meetings.map((e, i) => (
            <Card
              key={i}
              variant="outlined"
              sx={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
                width: "80%",
                marginLeft: "10vw",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                },
              }}
            >
              <CardContent>
                <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Code: <span style={{ color: "#4fc3f7" }}>{e.meetingCode}</span>
                </Typography>
                <Typography sx={{ mt: 1.5, color: "rgba(255,255,255,0.7)" }}>
                  Date: {formatDate(e.date)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <Typography sx={{ textAlign: "center", mt: 5, color: "#ccc" }}>
          No meeting history available.
        </Typography>
      )}
    </Box>
  );
}
