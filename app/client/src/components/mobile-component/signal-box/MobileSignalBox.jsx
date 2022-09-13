import React, { useState } from "react";
//style
import './mobileSignalBox.css';

export function MobileSignalBox({bigImg,smallImg}) {
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
        <p className="mb-signalBox-pips">
          +70Pips (+0.18%)
        </p>
      </div>
      <div className="first-row">
        <div className="mb-signalBox-column2">
          <pre>Buy in        0.6789</pre>
          <pre>Risk/Reward  <span style={{ color: '#6ffed1ba' }}>1.76</span></pre>
        </div>
        <div className="mb-signalBox-column2">
          <pre>profit      0.6789</pre>
          <pre>Stop loss  <span >1.76</span></pre>
        </div>
      </div>
    </div>
  );
}