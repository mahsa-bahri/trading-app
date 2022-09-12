//in this copmpnent we make the buy strategy page
import React, { useState } from "react";
//icon
import more from '../../assets/icon/more.svg';
import less from '../../assets/icon/less.svg';
import info from '../../assets/icon/info.svg';
//image
import us from '../../assets/images/american-flag.jpg';
import japan from '../../assets/images/japan-flag.jpg';
import strategyImg from '../../assets/images/strategy-result.jpg';
import chart1 from '../../assets/images/blue-chart.jpg';
//link
import applicant from '../../Applicant.json';
import { MobileButton } from "../../components/mobile-component/button/MobileButton";
import { MobileBottomNav } from "../../components/mobile-component/bottom-navbar/MobileBottomNav";

export default function MobileBuyStrategy() {
  const [moreBackTest, setMoreBackTest] = useState(false);
  const [navChoose, setNavChoose] = useState({
    watchlist: false,
    filter: false,
    home: true,
    strategy: false,
    signal: false
  });
  let name = 'classic name1';
  let author = 'john copper';
  const handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    if (id == 'moreBacktest' || id == 'lessBacktest') {
      setMoreBackTest(!moreBackTest);
    } else if (id == 'watchlist' || id == 'filter'
      || id == 'home' || id == 'strategy' || id == 'signal') {
      setNavChoose({
        watchlist: false,
        filter: false,
        home: false,
        strategy: false,
        signal: false,
      });
      setNavChoose(prev => {
        return {
          ...prev,
          [id]: true
        }
      })
    }
  }
  return (
    <div className="tradino">
      <div className="mb-buyStrategy-content">
        <div className="mb-buyStrategy-green-title-content">
          <h1 >{name}</h1>
          <h4>{author}</h4>
        </div>
        <div className="mb-buyStrategy-grey-content">
          <h4>Backtest on</h4>
          <div className="mb-buyStrategy-backtest">
            <div className="mb-buyStrategy-first-row">
              <div className="row">
                <div className="mb-buyStrategy-first-row-img">
                  <img className="mb-buyStrategy-img-big" src={us} />
                  <img className="mb-buyStrategy-img-small" src={japan} />
                </div>
                <span className="big">USDJPY </span><span className="small"> in 1 hour time frame</span>
              </div>
              {!moreBackTest ? <img className='mb-more-icon-buyStrategy'
                aria-label="more"
                id='moreBacktest'
                onClick={handleClick}
                src={more} /> : <img className='mb-more-icon-buyStrategy'
                  aria-label="less"
                  id="lessBacktest"
                  onClick={handleClick}
                  src={less} />}
            </div>
            {moreBackTest && <><div className="line"></div>
              <div className="mb-buyStrategy-first-row">
                <div className="row">
                  <div className="mb-buyStrategy-first-row-img">
                    <img className="mb-buyStrategy-img-big" src={us} />
                    <img className="mb-buyStrategy-img-small" src={japan} />
                  </div>
                  <span className="big">USDJPY </span><span className="small"> in 1 hour time frame</span>
                </div>
              </div>
              <div className="line"></div>
              <MobileButton className={'mb-small-green-btn'} name={'create new backteat'} />
            </>

            }
          </div>
          <h4>Money trend</h4>
          <div className="mb-buyStrategy-moneyTrend">
            <img className='mb-info-icon-moneyTrend'
              aria-label="info"
              src={info} />

            <img className="image" src={chart1} />
          </div>
          <h4>Backtest info</h4>
          <div className="mb-buyStrategy-backtestInfo">
            <div className="mb-buyStrategy-backtestInfo-items">
              <p className="space-between">Win Rate     <span style={{ color: 'green' }}>63%</span></p>
            </div>
            <div className="mb-buyStrategy-backtestInfo-items">
              <p className="space-between">Profit      <span style={{ color: 'green' }}>300%</span></p>
            </div>
            <div className="mb-buyStrategy-backtestInfo-items">
              <p className="space-between">Sharp ratio      <span style={{ color: 'green' }}>1.9</span></p>
            </div>
            <div className="mb-buyStrategy-backtestInfo-items">
              <p className="space-between">Risk/Reward    <span style={{ color: 'red' }}>1.05</span></p>
            </div>
            <div className="mb-buyStrategy-backtestInfo-items">
              <p className="space-between">Max darwdown    <span style={{ color: 'green' }}>10%</span></p>
            </div>
            <div className="mb-buyStrategy-backtestInfo-items">
              <p className="space-between">multi time frame    <span>No</span></p>
            </div>
            <div>
              <p style={{ fontSize: '13px' }}>more</p>
              <img
                aria-label="more"
                onClick={handleClick}
                src={more} />
            </div>
          </div>
          <MobileButton className={'mb-big-green-btn'} name={'Buy strategy now'} />
        <h4>closed signals</h4>
        <div className="mb-buyStrategy-closedSignals">
          <div>
            
          </div>
        </div>

        </div>
      </div>
      <MobileBottomNav navChoose={navChoose} handleClick={handleClick} />
    </div>
  );
}