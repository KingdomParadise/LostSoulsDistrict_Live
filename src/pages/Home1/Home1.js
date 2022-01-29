import React from 'react';
import PropTypes from 'prop-types';
import './Home1.scss';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import tplay from '../../assets/img/chapter1/tplay.png';
import hi1 from '../../assets/img/chapter1/hi1.png';
import hi2 from '../../assets/img/chapter1/hi2.png';
import hi3 from '../../assets/img/chapter1/hi3.png';
import hi4 from '../../assets/img/chapter1/hi4.png';
import chocon1 from '../../assets/img/chapter1/chocon1.png';
import chocon3 from '../../assets/img/chapter1/chocon3.png';
import loot from '../../assets/img/chapter1/loot.png';
import lootactive from '../../assets/img/chapter1/lootactive.png';
import footbg from '../../assets/img/chapter1/footbg.png';



const Home1 = () => (
  <>
    <Header />
    <div className="Home1" data-testid="Home1">
      <section className='banner_section'>
      </section>

      <section className='top_section'>
        <div className='container'>
          <p className='text-center'>LATEST CHALLENGES</p>
          <h1 className='ftf text-center' >Top <span className='tp'> Palyers</span></h1>
          <div className='row'>
            <div className='col-md-3 align-self-center'>
              <div className='tcard d-flex'>
                <div className='count me-2'>
                  <div className='text-center'>
                    1
                  </div>
                </div>
                <div className='tcardcont'>
                  <b>Hermoine</b><br />
                  25.8772200 BTC
                </div>
              </div>
              <div className='tcard d-flex'>
                <div className='count me-2'>
                  <div className='text-center'>
                    2
                  </div>
                </div>
                <div className='tcardcont'>
                  <b>Hermoine</b><br />
                  25.8772200 BTC
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div>
                <img src={tplay} className="w-100" />
              </div>
            </div>
            <div className='col-md-3 align-self-center'>
              <div className='tcard d-flex'>
                <div className='count me-2'>
                  <div className='text-center'>
                    3
                  </div>
                </div>
                <div className='tcardcont'>
                  <b>Hermoine</b><br />
                  25.8772200 BTC
                </div>
              </div>
              <div className='tcard d-flex'>
                <div className='count me-2'>
                  <div className='text-center'>
                    4
                  </div>
                </div>
                <div className='tcardcont'>
                  <b>Hermoine</b><br />
                  25.8772200 BTC
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg_section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='beg_card'>
                <div>
                  “Unknown”: We got you Sarge, come on, let's get here before more Mechs show up! GO GO GO!!!
                  <br /> <br />
                  The boat zooms down a nearby sewage tunnel into the darkness.
                </div>
              </div>
            </div>
            <div className='col-md-5'>
            </div>
            <div className='col-md-3'>
              <div className='beg_cont text-end'>
                <p className='text-end fw-200'>CHAPTER 2</p>
                <h1 className='ftf'>
                  The <span className='tp'>Begining</span> Of The End
                </h1>
                <p className='text-end fw-200'>Sergeant who got
                  captured and enslaved before being broken out by the rebellion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='high_sec'>
        <div className='container'>
          <p className='fw-200'>Blast from the past</p>
          <h1 className='ftf mb-5'><span className='tp'>Highlights</span> From Chapter 1</h1>
          <div className='d-flex justify-content-between'>
            <div className='col-md-2'>
              <div>
                <img src={hi1} className="w-100" />
                <h6>NFT'S DISTRIBUTED</h6>
                <h1 className='ftf tp'>25K</h1>
              </div>
            </div>
            <div className='sepperate_line'></div>
            <div className='col-md-2'>
              <div>
                <img src={hi2} className="w-100" />
                <h6>NFT'S DISTRIBUTED</h6>
                <h1 className='ftf tp'>25K</h1>
              </div>
            </div>
            <div className='sepperate_line'></div>
            <div className='col-md-2'>
              <div>
                <img src={hi3} className="w-100" />
                <h6>NFT'S DISTRIBUTED</h6>
                <h1 className='ftf tp'>25K</h1>
              </div>
            </div>
            <div className='sepperate_line'></div>
            <div className='col-md-2'>
              <div>
                <img src={hi4} className="w-100" />
                <h6>NFT'S DISTRIBUTED</h6>
                <h1 className='ftf tp'>25K</h1>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='choo_sec text-center'>
        <div className='container'>
          <p className='fw-200'>Meet All the soul heroes</p>
          <h1 className='ftf'>Choose Your <span className='tp'>Character</span></h1>
          <div className='col-2 mx-auto'>
            <div className='choo_card'>
              <h6 className='ftf'>Alloy <span className='tp'>Drive</span></h6>
              <p>0.25417 BTC</p>
            </div>
          </div>
          <div className='row justify-content-between'>
            <div className='col-md-3'>
              <img src={chocon1} className='w-75' />
            </div>
            <div className='col-md-2'>
              <img src={chocon1} className='w-85' />
            </div>
            <div className='col-md-1'>
              <img src={chocon3} className='w-100' />
            </div>
            <div className='col-md-2'>
              <img src={chocon1} className='w-85' />
            </div>
            <div className='col-md-3'>
              <img src={chocon1} className='w-75' />
            </div>

          </div>
        </div>
      </section>

      <section className='split_sec'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-3'>
              <h2 className='ftf text-center'>Discover & <br />
                Collect The Rare <br />
                <span className='tp'>Lost Souls District</span><br />
                NFT’s</h2>
              <button className='exp_btn ftf mx-auto'>Explore</button>
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-3'>
              <h2 className='ftf text-center'>Assets <span className='tp'>Trending</span>                 This Week</h2>
              <p className='text-center fw-200'>Various characters and powerups trending this week. Check out the
                live auction!</p>
              <button className='buy_btn ftf mx-auto'>Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className='loot_sec text-center'>
        <div className='container'>
          <p>TIME TO POWERUP</p>
          <h1 className='ftf mb-4'>Choose Your <span className='tp'>Lootbox</span></h1>
          <div className='row'>
            <div className='col-md-3'>
              <div className='lootbox '>
                <div className='loot mb-4'>
                  <img src={loot} className="w-85" />
                </div>
                <div className='d-none lootactive mb-4'>
                  <img src={lootactive} className="w-85" />
                </div>
                <button className='buy_btn invisible'>Buy Now</button>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='lootbox '>
                <div className='loot mb-4'>
                  <img src={loot} className="w-85" />
                </div>
                <div className='d-none lootactive mb-4'>
                  <img src={lootactive} className="w-85" />
                </div>
                <button className='buy_btn invisible'>Buy Now</button>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='lootbox '>
                <div className='loot mb-4'>
                  <img src={loot} className="w-85" />
                </div>
                <div className='d-none lootactive mb-4'>
                  <img src={lootactive} className="w-85" />
                </div>
                <button className='buy_btn invisible'>Buy Now</button>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='lootbox '>
                <div className='loot mb-4'>
                  <img src={loot} className="w-85" />
                </div>
                <div className='d-none lootactive mb-4'>
                  <img src={lootactive} className="w-85" />
                </div>
                <button className='buy_btn invisible'>Buy Now</button>
              </div>
            </div>
          </div>

        </div>

      </section>

      <section className='future_sec'>
      <div className='container'>
        <div className='future_sec_content'>
          <div className='row'>
            <div className='col-md-6'>
              <h4 className='ftf'>The future of <span className='tp'>Lost Souls District</span><br /> depends in your hands</h4>
              <p>Subscribe now to get exclusive benefits</p>
            </div>
            <div className='col-md-6 align-self-center'>
              <form class="subscription">
                <input class="add-email w-75" type="email" placeholder="Email Address" />
                <button class="ftf" type="button">
                  <span class="ftf">Sign in</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='footbg'>
      <div>
        <img src={footbg} className="w-100" />
      </div>
    </section>

    </div>
    <div className='footmarg'>
    <Footer className="" />
    </div>
  </>
);

Home1.propTypes = {};

Home1.defaultProps = {};

export default Home1;
