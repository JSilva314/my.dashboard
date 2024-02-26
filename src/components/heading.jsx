import React from "react";
import { Grid, Typography } from "@mui/material";

export default function Heading() {
  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="flext-start"
      sx={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        padding: "20px",
        margin:"0"
      }}
    >
      <Typography variant="h5" align="center">
        Dashboard
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontSize: "3rem", marginTop: "25px" }}
        align=""
      >
        Welcome to the dashboard
      </Typography>
    </Grid>
  );
}
