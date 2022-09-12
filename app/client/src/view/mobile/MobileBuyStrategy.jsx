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
  const [moreInfo, setMoreInfo] = useState(false);
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
    } else if (id == 'moreInfo' || id == 'lessInfo') {
      setMoreInfo(!moreInfo);
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

            {moreInfo && <>
              <div className="mb-buyStrategy-backtestInfo-items">
                <p className="space-between">Max darwdown    <span style={{ color: 'green' }}>10%</span></p>
              </div>
              <div className="mb-buyStrategy-backtestInfo-items">
                <p className="space-between">multi time frame    <span>No</span></p>
              </div>
              <div className="mb-buyStrategy-backtestInfo-items">
                <p className="space-between">Max darwdown    <span style={{ color: 'green' }}>10%</span></p>
              </div>
              <div className="mb-buyStrategy-backtestInfo-items">
                <p className="space-between">multi time frame    <span>No</span></p>
              </div>
              <div className="mb-buyStrategy-backtestInfo-items">
                <p className="space-between">Max darwdown    <span style={{ color: 'green' }}>10%</span></p>
              </div>
              <div className="mb-buyStrategy-backtestInfo-items">
                <p className="space-between">multi time frame    <span>No</span></p>
              </div>
              <div className="mb-buyStrategy-backtestInfo-items">
                <p className="space-between">Max darwdown    <span style={{ color: 'green' }}>10%</span></p>
              </div>
              <div className="mb-buyStrategy-backtestInfo-items">
                <p className="space-between">multi time frame    <span>No</span></p>
              </div>
            </>}
            {!moreInfo ? <div>
              <p style={{ fontSize: '13px' }}>more</p>
              <img
                aria-label="more"
                id='moreInfo'
                onClick={handleClick}
                src={more} />
            </div> : <div>
              <img
                aria-label="less"
                id='lessInfo'
                onClick={handleClick}
                src={less} />
              <p style={{ fontSize: '13px' }}>less</p>
            </div>
            }
          </div>
          <div className="mb-buyStrategy-note">
            <span>more frome creator</span>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used
              to demonstrate the form of a document or a typeface without relying on meaningful content.
              Lorem ipsum may be used as
              a placeholder before final copy is available.In publishing and graphic design.
            </p>
          </div>
          <div className="mb-buyStrategy-big-line"></div>
          <MobileButton className={'mb-big-green-btn'} name={'Buy strategy now'} />
          <div className="mb-buyStrategy-title-row">
            <h4>closed signals</h4>
            <h5>more</h5>
          </div>
          <div className="mb-buyStrategy-closedSignals">
            <div className="mb-buyStrategy-closedSignals-box">
              <div className="first-row">
                <div className="mb-buyStrategy-first-row-img">
                  <img className="mb-buyStrategy-img-big" src={us} />
                  <img className="mb-buyStrategy-img-small" src={japan} />
                </div>
                <div className="mb-buyStrategy-column">
                  <span className="name">USDJPY </span>
                  <span className="date">13july 2022 18:30</span>
                </div>
                <p className="mb-buyStrategy-pips">
                  +70Pips (+0.18%)
                </p>
              </div>
              <div className="first-row">
                <div className="mb-buyStrategy-column2">
                  <pre>Buy in        0.6789</pre>
                  <pre>Risk/Reward  <span style={{ color: '#6ffed1ba' }}>1.76</span></pre>
                </div>
                <div className="mb-buyStrategy-column2">
                  <pre>profit      0.6789</pre>
                  <pre>Stop loss  <span >1.76</span></pre>
                </div>
              </div>
            </div>
            <div className="mb-buyStrategy-closedSignals-box">
              <div className="first-row">
                <div className="mb-buyStrategy-first-row-img">
                  <img className="mb-buyStrategy-img-big" src={us} />
                  <img className="mb-buyStrategy-img-small" src={japan} />
                </div>
                <div className="mb-buyStrategy-column">
                  <span className="name">USDJPY </span>
                  <span className="date">13july 2022 18:30</span>
                </div>
                <p className="mb-buyStrategy-pips">
                  +70Pips (+0.18%)
                </p>
              </div>
              <div className="first-row">
                <div className="mb-buyStrategy-column2">
                  <pre>Buy in        0.6789</pre>
                  <pre>Risk/Reward  <span style={{ color: '#6ffed1ba' }}>1.76</span></pre>
                </div>
                <div className="mb-buyStrategy-column2">
                  <pre>profit      0.6789</pre>
                  <pre>Stop loss  <span >1.76</span></pre>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-buyStrategy-title-row">
            <h4>live signals</h4>
            <h5>more</h5>
          </div>
          <div className="mb-buyStrategy-closedSignals blur">
            <div className="mb-buyStrategy-closedSignals-box">
              <div className="first-row">
                <div className="mb-buyStrategy-first-row-img">
                  <img className="mb-buyStrategy-img-big" src={us} />
                  <img className="mb-buyStrategy-img-small" src={japan} />
                </div>
                <div className="mb-buyStrategy-column">
                  <span className="name">USDJPY </span>
                  <span className="date">13july 2022 18:30</span>
                </div>
                <p className="mb-buyStrategy-pips">
                  +70Pips (+0.18%)
                </p>
              </div>
              <div className="first-row">
                <div className="mb-buyStrategy-column2">
                  <pre>Buy in        0.6789</pre>
                  <pre>Risk/Reward  <span style={{ color: '#6ffed1ba' }}>1.76</span></pre>
                </div>
                <div className="mb-buyStrategy-column2">
                  <pre>profit      0.6789</pre>
                  <pre>Stop loss  <span >1.76</span></pre>
                </div>
              </div>
            </div>
            <div className="mb-buyStrategy-closedSignals-box">
              <div className="first-row">
                <div className="mb-buyStrategy-first-row-img">
                  <img className="mb-buyStrategy-img-big" src={us} />
                  <img className="mb-buyStrategy-img-small" src={japan} />
                </div>
                <div className="mb-buyStrategy-column">
                  <span className="name">USDJPY </span>
                  <span className="date">13july 2022 18:30</span>
                </div>
                <p className="mb-buyStrategy-pips">
                  +70Pips (+0.18%)
                </p>
              </div>
              <div className="first-row">
                <div className="mb-buyStrategy-column2">
                  <pre>Buy in        0.6789</pre>
                  <pre>Risk/Reward  <span style={{ color: '#6ffed1ba' }}>1.76</span></pre>
                </div>
                <div className="mb-buyStrategy-column2">
                  <pre>profit      0.6789</pre>
                  <pre>Stop loss  <span >1.76</span></pre>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-general-bottom-space"></div>
        </div>
      </div>
      <MobileBottomNav navChoose={navChoose} handleClick={handleClick} />
    </div>
  );
}