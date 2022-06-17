import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CssBaseline } from "@mui/material";

const Navbar = ({ name }) => {
  return (
    <>
      <div style={{ height: "13%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            color="inherit"
            sx={{ boxShadow: 0, justifySelf: "flex-start", height: "13%" }}
          >
            <Toolbar>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    flexGrow: 3,
                    fontFamily: "Quicksand,sans-serif",
                    fontSize: "30px",
                    fontWeight: "800",
                    color: "#0B2060",
                  }}
                >
                  infraCloud
                </Typography>
              </Link>

              <Toolbar
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  width: "100%",
                  marginTop: "5px",
                }}
              >
                <Typography
                  fontSize={30}
                  fontWeight={400}
                  sx={{
                    flexGrow: "1",
                    fontSize: "30px",
                    fontWeight: "800",
                    color: "#0B2060",
                    fontFamily: "Quicksand,sans-serif",
                    textTransform: "capitalize",
                  }}
                >
                  Welcome {sessionStorage.getItem("name")}
                </Typography>

                <Link to="/comment" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#5913B0",
                      height: "40px",
                      width: "115px",
                    }}
                  >
                    Comments
                  </Button>
                </Link>
              </Toolbar>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      ></div>
    </>
  );
};

export default Navbar;
