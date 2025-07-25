import React, { useState } from "react";
import { motion } from "framer-motion";

import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="drawer-comp">
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer className="drawer-comp" anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <p className="link">Home</p>
        <p className="link">Compare</p>
        <p className="link">Watchlist</p>
        <motion.div
          initial={{
            scale: 0.8,
          }}
          whileHover={{
            opacity: 1,
            scale: 1,
          }}
        >
          <Button variant="outlined" className="dashboard-button">
            Dashboard
          </Button>
        </motion.div>
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
