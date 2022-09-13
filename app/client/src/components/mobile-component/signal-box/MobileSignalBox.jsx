import React, { useState } from "react";
//style
import './mobileSignalBox.css';
//icon
import more from '../../../assets/icon/more.svg';
import less from '../../../assets/icon/less.svg';
import raise from '../../../assets/icon/raise.svg';

export function MobileSignalBox({ bigImg, smallImg, hasMore, chartimg, isLive }) {
  const [moreInfo, setMoreInfo] = useState(false);
  const handleClick = () => {
    setMoreInfo(!moreInfo);
  }
  if (!hasMore) {
    return (
      <div className="mb-signalBox-closedSignals-box">
        <div className="first-row">
          <div className="mb-buyStrategy-first-row-img">
            <img className="mb-buyStrategy-img-big" src={bigImg} />
            <img className="mb-buyStrategy-img-small" src={smallImg} />
          </div>
          <div className="mb-signalBox-column">
            <span className="name">USDJPY </span>
            <span className="date">13july 2022 18:30</span>
          </div>
          {!isLive ? <p className="mb-signalBox-pips"> +70Pips (+0.18%)</p>
            : <div className="mb-signalBox-buy-pips">
              <img src={raise} />
              <span >Buy 0.6789</span>
            </div>}
        </div>
        <div className="first-row">
          <div className="mb-signalBox-column2">
            {!isLive ? <div className="row"><span>Buy in</span><span> 0.678</span></div> : <div className="row"><span>Risk type</span><span style={{ color: 'red' }}> High</span></div>}
            <div className="row"><span>Risk/Reward </span> <span style={{ color: '#6ffed1ba' }}>1.76</span></div>
          </div>
          <div className="mb-signalBox-column2">
            <div className="row"><span>profit </span><span> 0.678</span></div>
            <div className="row"><span>stop loss </span><span> 1.6780</span></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mb-signalBox-closedSignals-box">
        <div className="first-row">
          <div className="mb-buyStrategy-first-row-img">
            <img className="mb-buyStrategy-img-big" src={bigImg} />
            <img className="mb-buyStrategy-img-small" src={smallImg} />
          </div>
          <div className="mb-signalBox-column">
            <span className="name">USDJPY </span>
            <span className="date">13july 2022 18:30</span>
          </div>
          {!isLive ? <p className="mb-signalBox-pips"> +70Pips (+0.18%)</p>
            : <div className="mb-signalBox-buy-pips">
              <img src={raise} />
              <span >Buy 0.6789</span>
            </div>}
        </div>
        <div className="first-row">
          <div className="mb-signalBox-column2">
            {!isLive ? <div className="row"><span>Buy in</span><span> 0.678</span></div> :
              <div className="row"><span>Risk type</span><span style={{ color: 'red' }}> High</span></div>}
            <div className="row"><span>Risk/Reward </span> <span style={{ color: '#6ffed1ba' }}>1.76</span></div>
          </div>
          <div className="mb-signalBox-column2">
            <div className="row"><span>profit </span><span> 0.678</span></div>
            <div className="row"><span>stop loss </span><span> 1.6780</span></div>
          </div>
        </div>
        {moreInfo && <>
          <div className="second-row">
            <div className="mb-signalbox-profit">
              <div className="row"><span>profit 1 </span><span> 0.6780</span></div>
              <div className="row"><span>profit 1 </span><span> 0.6780</span></div>
              <div className="row"><span>profit 1 </span><span> 0.6780</span></div>
            </div>
            <div className="mb-signalbox-date">
              <div className="row"><span>sent on </span><span>13july 2022 18:45</span></div>
              <div className="row"><span>{isLive?'close':'sent'} on </span><span>13july 2022 18:45</span></div>
            </div>
          </div>
          <span style={{ alignSelf: 'center' }}>signal in chart</span>
          <div className="mb-signalbox-chartbox">
            <img className="mb-signalbox-chartbox"
              src={chartimg} />
          </div>
        </>}
        {!moreInfo ? <img
          className='mb-more-icon-signalbox'
          aria-label="more"
          id='moreInfo'
          onClick={handleClick}
          src={more} /> : <img
          className='mb-more-icon-signalbox'
          aria-label="less"
          id='lessInfo'
          onClick={handleClick}
          src={less} />}
      </div>
    );
  }
}