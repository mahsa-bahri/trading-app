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
//link
import applicant from '../../Applicant.json';
import { MobileButton } from "../../components/mobile-component/button/MobileButton";
import { MobileBottomNav } from "../../components/mobile-component/bottom-navbar/MobileBottomNav";
import { MobileSignalBox } from "../../components/mobile-component/signal-box/MobileSignalBox";

export default function MobileMoreSignal() {
  
  let name = 'classic name1';
  let author = 'john copper';
  const noLiveNote = "now this strategy does'nt have any live signal. "
  return (
    <div className="tradino">
      <div className="mb-moreSignal-content ">
        <div className="mb-moreSignal-green-title-content">
          <h1 >{name}</h1>
          <h4>{author}</h4>
        </div>
        <div className="mb-moreSignal-grey-content">

          <div className="mb-moreSignal-title-row">
            <h4>live signals</h4>
            <img className='mb-info-icon-moreSignal'
              aria-label="info"
              src={info} />
          </div>
          <div className="mb-moreSignal-closedSignals blur">
            <MobileSignalBox bigImg={us} smallImg={japan} hasMore={true} />
            <MobileSignalBox bigImg={us} smallImg={japan} hasMore={true} />
          </div>
          <div className="mb-buyStrategy-big-line"></div>
          <MobileButton className={'mb-big-green-btn'} name={'Buy strategy now'} />
          <div className="mb-moreSignal-title-row">
            <h4>closed signals</h4>
            <img className='mb-info-icon-moreSignal'
              aria-label="info"
              src={info} />
          </div>
          <div className="mb-moreSignal-closedSignals">
            <MobileSignalBox bigImg={us} smallImg={japan} hasMore={true} />
            <MobileSignalBox bigImg={us} smallImg={japan} hasMore={true} />
          </div>
          <div className="mb-general-bottom-space"></div>
        </div>
      </div>
    </div>
  );
}