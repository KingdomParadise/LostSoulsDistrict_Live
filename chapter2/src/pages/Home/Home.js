import React from 'react';
import PropTypes from 'prop-types';
import './Home.scss';
import lady from '../../assets/img/lady.png';
import igun from '../../assets/img/i-gun.png';
import i1 from '../../assets/img/i1.png';
import Cho_card1 from '../../assets/img/cho_card1.png';
import Cho_card2 from '../../assets/img/cho_card2.png';
import mask from '../../assets/img/mask.png';
import footbg from '../../assets/img/footbg.png';


const Home = () => (
  <div className="Home" data-testid="Home">

    <section className='banner_sec'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 align-self-center'>
            <p className='ftf text-white f-20'>Welcome to the open metaverse</p>
            <h1>Lost <span className='tp'>SoulS</span><br />
              district</h1>
            <p className='text-white'>Neque porro quisquam est qui dolor
              em ipsum quia dolor sit </p>
            <div>
              <button className='ply_btn me-3 ftf'>Play Now</button>
              <button className='buy_btn ftf'>Buy Packs</button>
            </div>
          </div>
          <div className='col-md-4'>
            <div>
              <img src={lady} className='w-100' />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='card_sec'>
      <div className='container'>
        <div>
          <h1 className='ftf' >Get <span className='tp'>Started</span> Now</h1>
          <p>Neque porro quisquam est qui dolor em ipsum
            <br />quia dolor sit </p>
          <button className='playbtn ftf mb-4'>Play Now</button>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <div className='card_content'>
              <div className='ftf f-20 pt-4'>Play</div>
              <div className='cicon'>
                <img src={igun} className='mb-5 mt-5' />
                <h6>
                  <b>Lost Souls</b><br />
                  is an immersive<br />
                  Metaverse<br />
                  experience
                </h6>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card_content'>
              <div className='ftf f-20 pt-4'>Play</div>
              <div className='cicon'>
                <img src={igun} className='mb-5 mt-5' />
                <h6>
                  <b>Lost Souls</b><br />
                  is an immersive<br />
                  Metaverse<br />
                  experience
                </h6>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card_content'>
              <div className='ftf f-20 pt-4'>Play</div>
              <div className='cicon'>
                <img src={igun} className='mb-5 mt-5' />
                <h6>
                  <b>Lost Souls</b><br />
                  is an immersive<br />
                  Metaverse<br />
                  experience
                </h6>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card_content'>
              <div className='ftf f-20 pt-4'>Play</div>
              <div className='cicon'>
                <img src={igun} className='mb-5 mt-5' />
                <h6>
                  <b>Lost Souls</b><br />
                  is an immersive<br />
                  Metaverse<br />
                  experience
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='top_sec'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div>
              <p>
                LATEST CHALLENGES
              </p>
              <h1 className='ftf'><span className='tp'>Top</span> Palyers</h1>
            </div>
            <div className='top_card_content'>
              <div className='d-flex justify-content-between'>
                <div>
                  <img src={i1} className='i1' />
                </div>
                <div className='align-self-center f-20'>
                  Hermoine
                </div>
                <div className='align-self-center f-20'>
                  25.8772200 BTC
                </div>
              </div>
            </div>
            <div className='top_card_content'>
              <div className='d-flex justify-content-between'>
                <div>
                  <img src={i1} className='i1' />
                </div>
                <div className='align-self-center f-20'>
                  Hermoine
                </div>
                <div className='align-self-center f-20'>
                  25.8772200 BTC
                </div>
              </div>
            </div>
            <div className='top_card_content'>
              <div className='d-flex justify-content-between'>
                <div>
                  <img src={i1} className='i1' />
                </div>
                <div className='align-self-center f-20'>
                  Hermoine
                </div>
                <div className='align-self-center f-20'>
                  25.8772200 BTC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='choose_sec'>
      <div className='container'>
        <p className='text-center'>Meet All the soul heroes</p>
        <h1 className='ftf mb-5 text-center'>Choose Your <span className='tp'>Character</span></h1>
        <div className='row justify-content-center'>
          <div className='col-md-2 align-self-center'>
            <div>
              <img src={Cho_card1} className="w-100 mb-3" />
            </div>
            <div className='cho_card_content'>
              <div className='d-flex  justify-content-between'>
                <div>
                  <span className='ftf'> Bladesworn<br />
                    <span className='tp'>Warrior</span><br /></span>
                  Chapter 1
                </div>
                <div className='align-self-center'>
                  0.25417<br />
                  BTC
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-2'>
            <div>
              <img src={Cho_card2} className="w-100 mb-3" />
            </div>
            <div className='cho_card_content'>
              <div className='d-flex  justify-content-between'>
                <div>
                  <span className='ftf'> Bladesworn<br />
                    <span className='tp'>Warrior</span><br /></span>
                  Chapter 1
                </div>
                <div className='align-self-center'>
                  0.25417<br />
                  BTC
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-2 align-self-center'>
            <div>
              <img src={Cho_card1} className="w-100 mb-3" />
            </div>
            <div className='cho_card_content'>
              <div className='d-flex  justify-content-between'>
                <div>
                  <span className='ftf'> Bladesworn<br />
                    <span className='tp'>Warrior</span><br /></span>
                  Chapter 1
                </div>
                <div className='align-self-center'>
                  0.25417<br />
                  BTC
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-2'>
            <div>
              <img src={Cho_card2} className="w-100 mb-3" />
            </div>
            <div className='cho_card_content'>
              <div className='d-flex  justify-content-between'>
                <div>
                  <span className='ftf'> Bladesworn<br />
                    <span className='tp'>Warrior</span><br /></span>
                  Chapter 1
                </div>
                <div className='align-self-center'>
                  0.25417<br />
                  BTC
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-2 align-self-center'>
            <div>
              <img src={Cho_card1} className="w-100 mb-3" />
            </div>
            <div className='cho_card_content'>
              <div className='d-flex  justify-content-between'>
                <div>
                  <span className='ftf'> Bladesworn<br />
                    <span className='tp'>Warrior</span><br /></span>
                  Chapter 1
                </div>
                <div className='align-self-center'>
                  0.25417<br />
                  BTC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='nft_sec'>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-md-4 nft_content'>
            <div className='nft_content_inside'>
              <h4 className='ftf'>NFT’s</h4>
              <p>Non-Fungible Tokens (NFTs) are virtual tokens minted on the blockchain for digital scarcity,
                security, and authenticity. They are unique, indivisible, and non-interchangeable —
                allowing true digital ownership
                of in-game assets.</p>
              <button className='ftf tp bas_btn'>Buy assets</button>
            </div>
          </div>
          <div className='col-md-4'>
            <img src={mask} className='w-100' />
          </div>
          <div className='col-md-4 nft_content nft_content2'>
            <div className='nft_content_inside'>
              <h4 className='ftf'>NFT’s</h4>
              <p>Non-Fungible Tokens (NFTs) are virtual tokens minted on the blockchain for digital scarcity,
                security, and authenticity. They are unique, indivisible, and non-interchangeable —
                allowing true digital ownership
                of in-game assets.</p>
              <button className='ftf sign_btn '>Buy assets</button>
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
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
