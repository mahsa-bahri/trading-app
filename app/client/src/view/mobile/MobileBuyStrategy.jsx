//in this copmpnent we make the buy strategy page
import React, { useState } from "react";
import { Link } from "react-router-dom";
//icon
import more from '../../assets/icon/more.svg';
import less from '../../assets/icon/less.svg';
import info from '../../assets/icon/info.svg';
//image
import us from '../../assets/images/american-flag.jpg';
import japan from '../../assets/images/japan-flag.jpg';
import chart1 from '../../assets/images/blue-chart.jpg';
import chart3 from '../../assets/images/chart3.jpg';
//link
import applicant from '../../Applicant.json';
import { MobileButton } from "../../components/mobile-component/button/MobileButton";
import { MobileBottomNav } from "../../components/mobile-component/bottom-navbar/MobileBottomNav";
import { MobileSignalBox } from "../../components/mobile-component/signal-box/MobileSignalBox";
import { MobileBackTestOn } from "../../components/mobile-component/backtest-on/MobileBackTestOn";
import { MobileBackTestInfo } from "../../components/mobile-component/backtest-info/MobileBackTestInfo";
import MobileSignalSample from "../../components/mobile-component/signal-sample/MobileSignalSample";

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
  let wrapperRef = React.createRef();
  const handleClose = (e) => {
    e.preventDefault();


    const id = e.currentTarget.id;
    if (id == 'closeMoreInfo') {
      setMoreInfo(false);
    }
  }
  const handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    let wrapper = wrapperRef.current;
    wrapper.classList.toggle('is-moreInfo-open');
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
      setMoreInfo(true);
    }
  }
  const note = "  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design.";
  //        <div className={!moreInfo?"mb-buyStrategy-green-title-content":"mb-buyStrategy-green-title-content blur"}>

  return (
    <div className="tradino">
      <div className="mb-buyStrategy-content">
        <div className={!moreInfo ? "mb-buyStrategy-green-title-content" : "mb-buyStrategy-green-title-content blur"}>
          <h1 >{name}</h1>
          <h4>{author}</h4>
        </div>
        <div className={!moreInfo ? "mb-buyStrategy-grey-content" : "hidden"}>
          <h4>Backtest on</h4>
          <div className="mb-buyStrategy-backtest">
            <MobileBackTestOn
              hasIcon={true}
              bigImg={us}
              smallImg={japan}
              moreBackTest={moreBackTest}
              handleClick={handleClick} />
            {moreBackTest && <><div className="line"></div>
              <MobileBackTestOn
                bigImg={us}
                smallImg={japan}
                moreBackTest={moreBackTest}
                handleClick={handleClick} />
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
            <MobileBackTestInfo moreInfo={moreInfo} />
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
            <p>{note}</p>
          </div>
          <div className="mb-buyStrategy-big-line"></div>
          <MobileButton className={'mb-big-green-btn'} name={'Buy strategy now'} />
          <div className="mb-buyStrategy-title-row">
            <h4>closed signals</h4>
            <Link to={applicant.mobileMoreSignal}><h5>more</h5></Link>
          </div>
          <div className="mb-buyStrategy-closedSignals">
            <MobileSignalBox bigImg={us} smallImg={japan} />
            <MobileSignalBox bigImg={us} smallImg={japan} />
          </div>
          <div className="mb-buyStrategy-title-row">
            <h4>live signals</h4>
            <Link to={applicant.mobileMoreSignal}><h5>more</h5></Link>
          </div>
          <div className="mb-buyStrategy-closedSignals blur">
            <MobileSignalBox bigImg={us} smallImg={japan} isLive={true} />
            <MobileSignalBox bigImg={us} smallImg={japan} isLive={true} />
          </div>
          <div className="mb-general-bottom-space"></div>
        </div>



        <div ref={wrapperRef} className="mb-buyStrategy-moreInfo-grey-content">
          <div className="black-line" onClick={handleClose} id='closeMoreInfo'></div>
          <div className="mb-moreSignal-title-row">
            <h4>signal chart</h4>
            <img
              aria-label="info"
              src={info} />
          </div>
          <div className="mb-buyStrategy-signalChart">
            <img src={chart3} />
          </div>
          <div className="mb-moreSignal-title-row">
            <h4>sample signal </h4>
            <img
              aria-label="info"
              src={info} />
          </div>
          <MobileSignalSample profit={11} loss={8} />
          <div className="mb-moreSignal-title-row">
            <h4>Backtest info </h4>
            <img
              aria-label="info"
              src={info} />
          </div>
          <div className="mb-buyStrategy-backtestInfo">
            <MobileBackTestInfo moreInfo={moreInfo} />
          </div>
        </div>

      </div>
      <MobileBottomNav navChoose={navChoose} handleClick={handleClick} />
    </div>
  );

}