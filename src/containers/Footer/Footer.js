import React from "react";

import logo from "../../assert/images/bottomLogo.png";
import { Grid, Link, Typography } from "@mui/material";
import fb from "../../assert/images/footer/fb.png";
import discard from "../../assert/images/footer/discard.png";
import tele from "../../assert/images/footer/telegram.png";
import twi from "../../assert/images/footer/twitter.png";
import "../../assert/styles/Footer.css";

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
        <Grid item md={5}>
          <img src={logo} alt="logo" width={300} />
        </Grid>

        <Grid item md={4}>
          <Grid item md={2} className="align">
            <Typography variant="h6" className="Pages">
              Pages
            </Typography>
          </Grid>
          <Grid container direction="row">
            <Grid item md={2} className="align">
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
            <Grid item md={2} className="align">
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
            <Grid item md={3} className="align">
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
          </Grid>
        </Grid>
        <Grid item md={3}>
          <Grid item md={1}>
            {" "}
            <Typography variant="h6" className="Pages">
              Social
            </Typography>
          </Grid>

          <Grid className="text_jk" item md={8}>
            <img src={fb} alt="facebook" width={60} />
            <img src={twi} alt="twitter" width={60} />
            <img src={discard} alt="discard" width={60} />
            <img src={tele} alt="telegram" width={60} />
          </Grid>
        </Grid>

        <Grid item md={12} style={{ marginTop: "40px" }}>
          <Typography variant="caption">
            Copyright © 2022.All Rights Reserved By Lost Soul District
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
