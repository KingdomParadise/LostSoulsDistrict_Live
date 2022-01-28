import React from "react";
import NavBar from "../Navbar/NavBar";
import "../../assert/styles/Market.css";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import charCard from "../../assert/images/mainbody/charcterCard.png";
import FootAbove from "../../assert/images/mainbody/footum.png";
import Footer from "../Footer/Footer";
import Banner from "../../assert/images/mainbody/marketbg.png";
const Market = () => {
  return (
    <>
      <img src={Banner} className="kmp" alt="Banner" width="100%" />
      <NavBar />
      <Grid container>
        <Grid item md={12} className="grid_it">
          <Typography variant="h6">BUY ALL YOUR FAVOURITES</Typography>
          <Typography variant="h4">
            Lost Souls Disctrict <span className="fte_color">NFTs</span>
          </Typography>
          <Typography variant="h6">
            The list includes the Cosplay and Genesis Promo sets, which mark{" "}
            <br />
            the beginning of your journey
          </Typography>
        </Grid>

        <Grid item md={12}>
          <Grid container direction="row">
            <Grid item md={3}>
              <Button endIcon={<KeyboardArrowDownIcon />} className="btn_t">
                Select Category
              </Button>
            </Grid>
            <Grid item md={3}>
              <input
                type="text"
                className="input_p"
                placeholder="Enter a keyword"
              />
              <IconButton className="icon_btn">
                <SearchIcon className="search_io" />
              </IconButton>
            </Grid>
            <Grid item md={3}>
              <Button endIcon={<KeyboardArrowDownIcon />} className="btn_t">
                Listing Currency
              </Button>
            </Grid>

            <Grid item md={3}>
              <Button endIcon={<KeyboardArrowDownIcon />} className="btn_t">
                Date Listed (Newest First)
              </Button>
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Grid container direction="row" spacing={2}>
              <Grid item md={3} className="mkl_op">
                <img src={charCard} alt="card" width={250} height={370} />
                <Grid item className="bh_pl1 klmj">
                  <Typography style={{ color: "white" }} className="blade">
                    &nbsp; &nbsp;Kick <br />
                    &nbsp; &nbsp;
                    <span style={{ color: "skyblue" }}>Armour</span> &nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp; 0.25417
                    <br /> &nbsp; &nbsp;
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Chapter 1{" "}
                    </span>
                    &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTC
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={3} className="mkl_op">
                <img src={charCard} alt="card" width={250} height={370} />
                <Grid item className="bh_pl1 klmj">
                  <Typography style={{ color: "white" }} className="blade">
                    &nbsp; &nbsp;Kick <br />
                    &nbsp; &nbsp;
                    <span style={{ color: "skyblue" }}>Armour</span> &nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;0.25417
                    <br /> &nbsp; &nbsp;
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Chapter 1{" "}
                    </span>
                    &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTC
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={3} className="mkl_op">
                <img src={charCard} alt="card" width={250} height={370} />
                <Button className="fk_io">Buy Now</Button>
                <Grid item className="bh_pl1 klmj klmop">
                  <Typography style={{ color: "white" }} className="blade">
                    &nbsp; &nbsp;Kick <br />
                    &nbsp; &nbsp;
                    <span style={{ color: "skyblue" }}>Armour</span> &nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp; 0.25417
                    <br /> &nbsp; &nbsp;
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Chapter 1{" "}
                    </span>
                    &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTC
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={3} className="mkl_op">
                <img src={charCard} alt="card" width={250} height={370} />
                <Grid item className="bh_pl1 klmj">
                  <Typography style={{ color: "white" }} className="blade">
                    &nbsp; &nbsp;Kick <br />
                    &nbsp; &nbsp;
                    <span style={{ color: "skyblue" }}>Armour</span> &nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp; 0.25417
                    <br /> &nbsp; &nbsp;
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Chapter 1{" "}
                    </span>
                    &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTC
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={3} className="mkl_op">
                <img src={charCard} alt="card" width={250} height={370} />
                <Grid item className="bh_pl1 klmj">
                  <Typography style={{ color: "white" }} className="blade">
                    &nbsp; &nbsp;Kick <br />
                    &nbsp; &nbsp;
                    <span style={{ color: "skyblue" }}>Armour</span> &nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp; 0.25417
                    <br /> &nbsp; &nbsp;
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Chapter 1{" "}
                    </span>
                    &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTC
                  </Typography>
                </Grid>
              </Grid>{" "}
              <Grid item md={3} className="mkl_op">
                <img src={charCard} alt="card" width={250} height={370} />
                <Grid item className="bh_pl1 klmj">
                  <Typography style={{ color: "white" }} className="blade">
                    &nbsp; &nbsp;Kick <br />
                    &nbsp; &nbsp;
                    <span style={{ color: "skyblue" }}>Armour</span> &nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;0.25417
                    <br /> &nbsp; &nbsp;
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Chapter 1{" "}
                    </span>
                    &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTC
                  </Typography>
                </Grid>
              </Grid>{" "}
              <Grid item md={3} className="mkl_op">
                <img src={charCard} alt="card" width={250} height={370} />
                <Grid item className="bh_pl1 klmj">
                  <Typography style={{ color: "white" }} className="blade">
                    &nbsp; &nbsp;Kick <br />
                    &nbsp; &nbsp;
                    <span style={{ color: "skyblue" }}>Armour</span> &nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;0.25417
                    <br /> &nbsp; &nbsp;
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Chapter 1{" "}
                    </span>
                    &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTC
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={3} className="mkl_op">
                <img src={charCard} alt="card" width={250} height={370} />
                <Grid item className="bh_pl1 klmj">
                  <Typography style={{ color: "white" }} className="blade">
                    &nbsp; &nbsp;Kick <br />
                    &nbsp; &nbsp;
                    <span style={{ color: "skyblue" }}>Armour</span> &nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp; 0.25417
                    <br /> &nbsp; &nbsp;
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Chapter 1{" "}
                    </span>
                    &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTC
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={3} className="mkl_op">
                <img src={charCard} alt="card" width={250} height={370} />
                <Grid item className="bh_pl1 klmj">
                  <Typography style={{ color: "white" }} className="blade">
                    &nbsp; &nbsp;Kick <br />
                    &nbsp; &nbsp;
                    <span style={{ color: "skyblue" }}>Armour</span> &nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp; 0.25417
                    <br /> &nbsp; &nbsp;
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Chapter 1{" "}
                    </span>
                    &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTC
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={3} className="mkl_op">
                <img src={charCard} alt="card" width={250} height={370} />
                <Grid item className="bh_pl1 klmj">
                  <Typography style={{ color: "white" }} className="blade">
                    &nbsp; &nbsp;Kick <br />
                    &nbsp; &nbsp;
                    <span style={{ color: "skyblue" }}>Armour</span> &nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;0.25417
                    <br /> &nbsp; &nbsp;
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Chapter 1{" "}
                    </span>
                    &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTC
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={3} className="mkl_op">
                <img src={charCard} alt="card" width={250} height={370} />
                <Grid item className="bh_pl1 klmj">
                  <Typography style={{ color: "white" }} className="blade">
                    &nbsp; &nbsp;Kick <br />
                    &nbsp; &nbsp;
                    <span style={{ color: "skyblue" }}>Armour</span> &nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp; 0.25417
                    <br /> &nbsp; &nbsp;
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Chapter 1{" "}
                    </span>
                    &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTC
                  </Typography>
                </Grid>
              </Grid>{" "}
              <Grid item md={3} className="mkl_op">
                <img src={charCard} alt="card" width={250} height={370} />
                <Grid item className="bh_pl1 klmj">
                  <Typography style={{ color: "white" }} className="blade">
                    &nbsp; &nbsp;Kick <br />
                    &nbsp; &nbsp;
                    <span style={{ color: "skyblue" }}>Armour</span> &nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp; 0.25417
                    <br /> &nbsp; &nbsp;
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Chapter 1{" "}
                    </span>
                    &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTC
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <br /> <br />
      <Grid item md={12}>
        <Button className="btn_t">show more</Button>
      </Grid>
      <Grid container className="grid">
        <Grid item md={12} className="align_gr mnb_p">
          <Grid container direction="row" spacing={3}>
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
      <img
        src={FootAbove}
        alt="foot_background"
        className="footer_bg1"
        width="100%"
      />
      <Footer />
    </>
  );
};

export default Market;
