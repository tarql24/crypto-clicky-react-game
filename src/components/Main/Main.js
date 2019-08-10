import React from 'react';
import BAT from './images/BAT.png';
import BTC from '../images/BTC.png';
import dent from '../images/dent.png';
import Digibyte from '../images/Digibyte.png';
import ethereum from '../images/ethereum.png';
import FunFair from '../images/FunFair.png';
import litecoin from '../images/litecoin.jpg';
import monero from '../images/monero.png';
import OMG from '../images/OMG.png';
import theta from '../images/theta.png';
import vechain from '../images/vechain.png';
import veritaseum from '../images/veritaseum.png';
import './style.css';
import ImgShuff from './ImgShuff';

function Main() {
  return (
    <div>
      <img src={BAT} className="click-item" />
      <img src={BTC} className="click-item" />
      <img src={dent} className="click-item" />
      <img src={Digibyte} className="click-item" />
      <img src={ethereum} className="click-item" />
      <img src={FunFair} className="click-item" />
      <img src={litecoin} className="click-item" />
      <img src={monero} className="click-item" />
      <img src={OMG} className="click-item" />
      <img src={theta} className="click-item" />
      <img src={vechain} className="click-item" />
      <img src={veritaseum} className="click-item" />
      {/* <ImgShuff /> */}
    </div>
  );
}

export default Main;
