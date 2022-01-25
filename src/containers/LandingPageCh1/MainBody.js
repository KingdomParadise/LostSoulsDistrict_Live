import {
  Button,
  Grid,
  selectClasses,
  TextField,
  Typography,
} from "@mui/material";
import { typography } from "@mui/system";
import React from "react";
import "../../assert/styles/MainStyles.css";
import Lost from "../../assert/images/mainbody/Lost.png";
import Footer from "../Footer/Footer";

import gun from "../../assert/images/mainbody/gun.png";
import noun from "../../assert/images/mainbody/noun.png";
import trade from "../../assert/images/mainbody/trade.png";
import trophy from "../../assert/images/mainbody/trophy.png";
import one from "../../assert/images/mainbody/1.png";
import two from "../../assert/images/mainbody/2.png";
import three from "../../assert/images/mainbody/3.png";
import charCard from "../../assert/images/mainbody/charcterCard.png";
const MainBody = () => {
  return (
    <>
      <Grid container direction="row" style={{ marginBottom: "100px" }}>
        <Grid item md={6} className="align_gr">
          <Grid item md={6} className="font_col">
            <Typography className="text_s">
              {" "}
              Welcome to the open metaverse
            </Typography>
          </Grid>
          <Grid item md={4}>
            {" "}
            <img src={Lost} width={400} alt="Lost SoulS district" />
          </Grid>

          <Grid item md={5} className="font_col">
            <Typography className="text_ss">
              {" "}
              Neque porro quisquam est qui dolor <br />
              em ipsum quia dolor sit
            </Typography>
          </Grid>
          <Grid container className="ft_aor">
            {" "}
            <Grid item className="kk_c">
              <Button className="ft_borr">Play Now</Button>
            </Grid>
            <Grid item>
              <Button className="ft_borr ft_ccr">Buy Packs</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="grid_two">
        <Grid item md={12}>
          <Typography variant="h5">
            Get <span className="ft_jk">Started </span> Now
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Typography className="text_km">
            Neque porro quisquam est qui dolor em ipsum <br />
            quia dolor sit{" "}
          </Typography>
        </Grid>
        <Grid item md={12} className="kk_c text_km">
          <Button className="ft_borr text_km">Play Now</Button>
        </Grid>

        <Grid item md={3} className="kk">
          <Typography variant="h6" className="playBt_b">
            Play
          </Typography>
          <Typography className="playBt">
            {" "}
            <img src={gun} alt="bgcard" width={200} />
          </Typography>
          <Typography variant="h6">
            Lost Souls <br />
            is an immersive
            <br /> Metaverse <br />
            experience
          </Typography>
          <br /> <br />
        </Grid>

        <Grid item md={3} className="kk">
          <Typography variant="h6" className="playBt_b">
            Collect
          </Typography>
          <Typography className="playBt">
            {" "}
            <img src={noun} alt="bgcard" width={130} />
          </Typography>
          <Typography variant="h6">
            Lost Souls <br />
            is an immersive
            <br /> Metaverse <br />
            experience
          </Typography>
          <br /> <br />
        </Grid>
        <Grid item md={3} className="kk">
          <Typography variant="h6" className="playBt_b">
            Trade
          </Typography>
          <Typography className="playBt">
            {" "}
            <img src={trade} alt="bgcard" width={130} />
          </Typography>
          <Typography variant="h6">
            Lost Souls <br />
            is an immersive
            <br /> Metaverse <br />
            experience
          </Typography>
          <br /> <br />
        </Grid>
        <Grid item md={3} className="kk">
          <Typography variant="h6" className="playBt_b">
            Master
          </Typography>
          <Typography className="playBt">
            {" "}
            <img src={trophy} alt="bgcard" width={130} />
          </Typography>
          <Typography variant="h6">
            Lost Souls <br />
            is an immersive
            <br /> Metaverse <br />
            experience
          </Typography>
          <br /> <br />
        </Grid>
      </Grid>

      <Grid container className="grid_two">
        <Grid item md={3} className=" text_grid">
          <Typography>LATEST CHALLENGES</Typography>
          <Typography variant="h3">
            <span className="ft_jk">Top</span> Players
          </Typography>

          <Grid item className="card_op">
            <img src={one} alt="one" width={30} height={30} className="img" />
            <Typography variant="h6" className="her_mo">
              Hermoine 25.8772200BTC
            </Typography>
          </Grid>
          <Grid item className="card_op">
            <img src={two} alt="one" width={30} height={30} className="img" />
            <Typography variant="h6" className="her_mo">
              Harry 25.8772200BTC
            </Typography>
          </Grid>
          <Grid item className="card_op">
            <img src={three} alt="one" width={30} height={30} className="img" />
            <Typography variant="h6" className="her_mo">
              Ronald 25.8772200BTC
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="grid_two">
        <Grid item md={12}>
          <Typography variant="h6">MEET ALL THE SOUL HEORES</Typography>
        </Grid>
        <Grid item md={12}>
          <Typography variant="h3">
            Choose Your <span className="ft_jk">Charcter</span>
          </Typography>
        </Grid>
        <Grid item md={12} className="grid_four">
          <Grid container direction="row" spacing={33}>
            <Grid item md={2} className="card_four">
              <img src={charCard} alt="card" width={250} />

              <Grid item className="bh_pl">
                <Typography>
                  &nbsp; &nbsp;Bladesworn <br />
                  &nbsp; &nbsp;<span style={{ color: "skyblue" }}>
                    Warrior
                  </span>{" "}
                  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;0.25417
                  <br /> &nbsp; &nbsp;
                  <span style={{ color: "gray", fontSize: "14px" }}>
                    Chapter 1{" "}
                  </span>
                  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;BTC
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={2}>
              <img src={charCard} alt="card" width={250} height={450} />
              <Grid item className="bh_pl">
                <Typography>
                  &nbsp; &nbsp;Future <br />
                  &nbsp; &nbsp;<span style={{ color: "skyblue" }}>
                    Armour
                  </span>{" "}
                  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;0.25417
                  <br /> &nbsp; &nbsp;
                  <span style={{ color: "gray", fontSize: "14px" }}>
                    Chapter 1{" "}
                  </span>
                  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;BTC
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={2} className="card_four">
              <img src={charCard} alt="card" width={250} />
              <Grid item className="bh_pl">
                <Typography>
                  &nbsp; &nbsp;Bladesworn <br />
                  &nbsp; &nbsp;<span style={{ color: "skyblue" }}>
                    Warrior
                  </span>{" "}
                  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;0.25417
                  <br /> &nbsp; &nbsp;
                  <span style={{ color: "gray", fontSize: "14px" }}>
                    Chapter 1{" "}
                  </span>
                  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;BTC
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={2}>
              <img src={charCard} alt="card" width={250} height={450} />
              <Grid item className="bh_pl">
                <Typography>
                  &nbsp; &nbsp;Alloy <br />
                  &nbsp; &nbsp;<span style={{ color: "skyblue" }}>
                    Drive
                  </span>{" "}
                  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;0.25417
                  <br /> &nbsp; &nbsp;
                  <span style={{ color: "gray", fontSize: "14px" }}>
                    Chapter 1{" "}
                  </span>
                  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;BTC
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={2} className="card_four">
              <img src={charCard} alt="card" width={250} />
              <Grid item className="bh_pl">
                <Typography>
                  &nbsp; &nbsp;Kick <br />
                  &nbsp; &nbsp;<span style={{ color: "skyblue" }}>
                    Armour
                  </span>{" "}
                  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;0.25417
                  <br /> &nbsp; &nbsp;
                  <span style={{ color: "gray", fontSize: "14px" }}>
                    Chapter 1{" "}
                  </span>
                  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;BTC
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" className="grid_two">
        <Grid item md={4} className="text_align">
          <Typography variant="h5" className="tex_oll">
            NFT'S
          </Typography>
          <Typography>
            Non-Fungible Tokens (NFTs) are virtual
            <br />
            tokens minted on the blockchain for digital <br />
            scarcity,
            <br /> security, and authenticity. They are <br />
            unique, indivisible, and non-interchange
            <br />
            able — <br />
            allowing true digital ownership
            <br /> of in-game assets.
          </Typography>
          <Grid item className="kk_c">
            <Button className="ft_borr  nm_l">Buy Assets</Button>
          </Grid>
        </Grid>
        <Grid item md={4} className="text_align text_align_p ">
          {" "}
          <Typography variant="h5" className="tex_oll lok_pl">
            Liqidity Mining
          </Typography>
          <Typography>
            Non-Fungible Tokens (NFTs) are virtual
            <br />
            tokens minted on the blockchain for digital <br />
            scarcity,
            <br /> security, and authenticity. They are <br />
            unique, indivisible, and non-interchange
            <br />
            able — <br />
            allowing true digital ownership
            <br /> of in-game assets.
          </Typography>
          <Grid item className="kk_c">
            <Button className="ft_borr  nm_ll">Sign In</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="grid_two">
        <Grid item md={10} className="align_gr mnb_p">
          <Grid container direction="row">
            <Grid item md={7}>
              <Typography variant="h5">
                The future of{" "}
                <span className="ft_jk"> Lost Souls District</span> <br />
                depends in your hands
              </Typography>
              <Typography>Subscribe now to get exclusive benefits</Typography>
            </Grid>
            <Grid item md={3} className="emailfi">
              <input
                type="text"
                placeholder="email address"
                className="input_field"
              />
            </Grid>

            <Grid item className="klio">
              <Button className="ft_borr   klm">Sign In</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default MainBody;
