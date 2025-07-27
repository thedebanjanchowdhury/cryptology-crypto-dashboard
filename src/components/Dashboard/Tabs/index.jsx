import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import Grid from "../Grid";
import "./style.css";
import Pagination from "../Pagination";

// list component imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import ListComponent from "../List";

export default function Tabs({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#780000",
      },
    },
  });

  const style = {
    color: "var(--textColor)",
    fontWeight: 600,
    textTransform: "capitalize",
    fontSize: "1.5rem",
    "&.Mui-selected": {
      color: "var(--primaryColor)",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList className="tabs" onChange={handleChange} variant="fullWidth">
          <Tab label="LIST OF CRYPTOS" value="grid" sx={style} />
          {/* <Tab label="List" value="list" sx={style} /> */}
        </TabList>

        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={coin.id || i} />;
            })}
          </div>
        </TabPanel>

        {/* <TabPanel value="list">
          <div className="table-container">
            <h1>Development in progress</h1>
            <TableContainer elevation={4}>
              <Table sx={{ minWidth: 650 }} aria-label="coins table">
                <TableBody>
                  {coins.map((coin, i) => {
                    return <ListComponent coin={coin} key={coin.id || i} />;
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </TabPanel> */}
      </TabContext>
    </ThemeProvider>
  );
}
