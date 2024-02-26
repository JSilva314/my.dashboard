import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar.jsx";
import Heading from "./components/heading.jsx";
import Transaction from "./components/transaction.jsx";

import { Grid } from "@mui/material";
import Income from "./components/income.jsx";
import { mockTransactions } from "./mockData.js";

function App() {
  const [data, setData] = useState(mockTransactions);

  return (
    <div className="app-container" style={{ backgroundColor: "#8AB7F5" }}>
      {" "}
      <Grid container spacing={25}>
        <Grid item xs={12}>
          <Heading
            style={{
              fontSize: "2rem",
              margin: "20px 0",
              backgroundColor: "#8AB7F5",
              textAlign: "center",
            }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Sidebar
            data={data}
            style={{
              width: "300px",
              backgroundColor: "#8AB7F5",
              textAlign: "center",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Transaction
            data={data}
            style={{
              fontSize: "1.2rem",
              padding: "20px",
              backgroundColor: "#AEF5D9",
            }}
          />{" "}
        </Grid>
        <Grid item xs={12} md={3}>
          <Income
            data={data}
            style={{
              fontSize: "1.2rem",
              padding: "20px",
              backgroundColor: "#AEF5D9",
            }}
          />{" "}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
