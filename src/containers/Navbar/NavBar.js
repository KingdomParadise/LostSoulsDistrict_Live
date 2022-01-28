import React from "react";
import { AppBar, Tabs, Tab, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../../assert/images/bottomLogo.png";
import "../../assert/styles/NavStyles.css";
const NavBar = () => {
  return (
    <AppBar position="static" className="nav_entire">
      <Grid container direction="row" className="inside">
        <Grid item md={2} className="logo_ma">
          <Link to="/">
            {" "}
            <img src={Logo} width="80%" alt="logo" />
          </Link>
        </Grid>
        <Grid item md={1} className="space_bt">
          <Link to="/home">
            <Typography className="ft_color">Home</Typography>
          </Link>
        </Grid>
        <Grid item md={1} className="space_b1">
          <Link to="/">
            <Typography className="ft_color">Buy Packs</Typography>
          </Link>
        </Grid>
        <Grid item md={1} className="space_b1">
          <Link to="/market">
            <Typography className="ft_color">Market</Typography>{" "}
          </Link>
        </Grid>
        <Grid item md={1} className="space_b1">
          <Link to="/">
            <Typography className="ft_color">Collections</Typography>
          </Link>
        </Grid>
        <Grid item md={1} className="space_b1">
          <Link to="/">
            <Typography className="ft_color">Token</Typography>
          </Link>
        </Grid>
        <Grid item md={1} className="space_b1">
          <Link to="/">
            <Typography className="ft_color">Sign-in</Typography>
          </Link>
        </Grid>
        <Grid item md={3}>
          <Link to="/">
            <Button className="ft_bor"> Play Now </Button>
          </Link>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
