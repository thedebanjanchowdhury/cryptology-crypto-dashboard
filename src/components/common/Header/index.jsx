import React from "react";
import Button from "../Button";
import { motion } from "framer-motion";
import DrawerComponent from "./drawer";
import { Link } from "react-router-dom";

import "./style.css";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <h1 className="logo">
          CryptoLogy<span style={{ color: "var(--primaryColor)" }}>.</span>
        </h1>
        <div className="links">
          <Link to="/">
            <p className="link">Home</p>
          </Link>

          <Link to="/compare">
            <p className="link">Compare</p>
          </Link>

          <Link to="/watchlist">
            <p className="link">Watchlist</p>
          </Link>

          <Link to="/dashboard">
            <Button className="dashboard-button" text={"Dashboard"} outlined={false} />
          </Link>
        </div>

        <div className="mobile-drawer">
          <DrawerComponent />
        </div>
      </div>
    </>
  );
};

export default Header;
