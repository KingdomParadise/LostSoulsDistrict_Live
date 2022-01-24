import React from "react";
import { AppBar, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assert/images/logo.png";
import "../../assert/styles/NavStyles.css";
const NavBar = () => {
  return (
    <AppBar position="static" className="nav_entire">
      <Tabs className="tabs_btn">
        <Link to="/">
          {" "}
          <img src={Logo} width={170} alt="logo" />
        </Link>
        <Link to="/home">
          <Tab label="&nbsp;Home&nbsp;" className="ft_color" />
        </Link>
        <Link to="/">
          <Tab label="&nbsp;Buy Packs&nbsp;" className="ft_color" />
        </Link>
        <Link to="/">
          {" "}
          <Tab label="&nbsp;Market&nbsp;" className="ft_color" />
        </Link>
        <Link to="/">
          <Tab label="&nbsp;Collection&nbsp;" className="ft_color" />
        </Link>
        <Link to="/">
          <Tab label="&nbsp;Token&nbsp;" className="ft_color" />
        </Link>
        <Link to="/">
          <Tab label="&nbsp;Sign-in&nbsp;" className="ft_color" />
        </Link>

        <Link to="/">
          <button className="ft_color ft_bor">&nbsp; Play Now &nbsp;</button>
        </Link>
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
