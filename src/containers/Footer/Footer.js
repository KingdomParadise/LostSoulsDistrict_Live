import React from "react";

import logo from "../../assert/images/logo.png";
import { Grid, Link, Typography } from "@mui/material";
import fb from "../../assert/images/footer/fb.png";
import discard from "../../assert/images/footer/discard.png";
import tele from "../../assert/images/footer/telegram.png";
import twi from "../../assert/images/footer/twitter.png";
import "../../assert/styles/Footer.css";
import MediaQuery from "react-responsive";
const Footer = () => {
  return (
    <footer>
      <Grid
        container
        spacing={0}
        direction="row"
        style={{
          color: "white",
        }}
      >
        <Grid item md={5} className="footer_logo">
          <img src={logo} alt="logo" width={300} className="bottom_logo"/>
        </Grid>

        <Grid item md={4}>
          <Grid item md={2} className="align">
            <Typography variant="h6" className="Pages top">
              Pages
            </Typography>
          </Grid>
          <Grid container direction="row">
            <Grid item md={2} className="align ">
              <Link>
                {" "}
                <Typography className="text_jk under_jm">Home</Typography>
              </Link>
              <Link>
                {" "}
                <Typography className="text_jk under_jm">Create</Typography>
              </Link>
              <Link>
                <Typography className="text_jk under_jm">Market</Typography>
              </Link>
            </Grid>
            <MediaQuery minWidth={1500}>
              <Grid item md={1} className="align mklak">
                <Link>
                  {" "}
                  <Typography className="text_jk under_jm">Play</Typography>
                </Link>
                <Link>
                  {" "}
                  <Typography className="text_jk under_jm">FAQ</Typography>
                </Link>
                <Link>
                  {" "}
                  <Typography className="text_jk under_jm">Career</Typography>
                </Link>
              </Grid>
            </MediaQuery>
            <MediaQuery maxWidth={1499}>
              <Grid item md={2} className="align mklak">
                <Link>
                  {" "}
                  <Typography className="text_jk under_jm">Play</Typography>
                </Link>
                <Link>
                  {" "}
                  <Typography className="text_jk under_jm">FAQ</Typography>
                </Link>
                <Link>
                  {" "}
                  <Typography className="text_jk under_jm">Career</Typography>
                </Link>
              </Grid>
            </MediaQuery>
            <MediaQuery minWidth={1500}>
              <Grid item md={3} className="align mklak jmk">
                <Link>
                  {" "}
                  <Typography className="text_jk under_jm">News</Typography>
                </Link>
                <Link>
                  {" "}
                  <Typography className="text_jk under_jm">
                    Terms of Use
                  </Typography>
                </Link>
                <Link>
                  {" "}
                  <Typography className="text_jk under_jm">Licences</Typography>
                </Link>
              </Grid>
            </MediaQuery>
            <MediaQuery maxWidth={1499}>
              <Grid item md={4} className="align mklak">
                <Link>
                  {" "}
                  <Typography className="text_jk under_jm">News</Typography>
                </Link>
                <Link>
                  {" "}
                  <Typography className="text_jk under_jm">
                    Terms of Use
                  </Typography>
                </Link>
                <Link>
                  {" "}
                  <Typography className="text_jk under_jm">Licences</Typography>
                </Link>
              </Grid>
            </MediaQuery>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <Grid item md={1}>
            {" "}
            <Typography variant="h6" className="Pages sociaRe top">
              Social
            </Typography>
          </Grid>

          <Grid className="text_jk km_jop" item md={12}>
            <img src={fb} alt="facebook" width={60} className="hov_icon" />
            <img src={twi} alt="twitter" width={60} className="hov_icon" />
            <img src={discard} alt="discard" width={60} className="hov_icon" />
            <img src={tele} alt="telegram" width={60} className="hov_icon" />
          </Grid>
        </Grid>

        <Grid
          item
          md={12}
          style={{
            marginTop: "60px",
            background: "black",
            padding: "10px",
          }}
        >
          <Typography variant="caption">
            Copyright ?? 2022.All Rights Reserved By Lost Soul District
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
