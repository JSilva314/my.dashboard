import { useState } from "react";
import { Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/material";

export function handleClick() {}

export default function People({ data }) {
  const [info, setdata] = useState(data);

  return (
    <>
      <Grid
        position="relative"
        sx={{
          background: "#AEF5D9",
          color: "black",
          borderRadius: "15px",
          margin: "10px",
        }}
      >
        <Toolbar sx={{ alignItems: "center" }}>
          <Box sx={{ margin: 1 }}>
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
              }}
            >
              Transactions
            </Typography>
          </Box>
          <Box sx={{ marginRight: 2, overflowY: "auto", maxHeight: "100px" }}>
            {info &&
              info.map((clients, idx) => {
                return (
                  <Typography key={idx} variant="body2">
                    Name: {clients.user} <br />
                    Cost: {clients.cost} <br />
                    Date: {clients.date}
                  </Typography>
                );
              })}
          </Box>
        </Toolbar>
      </Grid>
    </>
  );
}
