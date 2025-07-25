import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";

export default function LabTabs() {
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
    fontSize: "1.2rem",
    "&.Mui-selected": {
      color: "var(--primaryColor)",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>

        <TabPanel value="grid">Grid</TabPanel>
        <TabPanel value="list">List</TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
