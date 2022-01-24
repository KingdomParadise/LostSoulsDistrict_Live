import { Grid } from "@mui/material";
import { typography } from "@mui/system";
import React from "react";
import "../../assert/styles/MainStyles.css";
import Lost from "../../assert/images/mainbody/Lost.png";
const MainBody = () => {
  return (
    <>
      <Grid container direction="row">
        <Grid>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item md={1}>
              <span className="Welcome_to_the_open_metaverse ">
                Welcome to the open metaverse
              </span>
            </Grid>
            <Grid item md={3} className="Wel_Lo ">
              {" "}
              <img
                src={Lost}
                width={400}
                alt="Lost SoulS district"
                className="Wel_Lo "
              />
            </Grid>
            <Grid item md={1} className="Wel_Lo ">
              {" "}
              <span className="Neque_porro_quisquam_est_qui_dolor_em_ipsum_qui">
                Neque porro quisquam est qui dolor <br />
                em ipsum quia dolor sit
              </span>
            </Grid>
            {/* <Grid item md={2}>
              <Grid container direction="row">
                <Grid item>
                  <button className="ft_color ft_bor">
                    &nbsp; Play Now &nbsp;
                  </button>
                </Grid>
                <Grid item>
                  <button className="ft_color ft_bor">
                    &nbsp; Buy Packs &nbsp;
                  </button>
                </Grid>
              </Grid> 
           ] </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MainBody;
