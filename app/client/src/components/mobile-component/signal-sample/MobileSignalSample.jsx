//in this copmpnent we implemented the sample signal of buy strategy/more info  page 
import React from "react";
//style
import './MobileSignalSample.css';
export default function MobileSignalSample({ profit, loss }) {

  return (
    <div className="mb-sampleSignal">
      <div className="mb-sampleSignal-column">
        <span >Maximum Profit</span>
        <div className="mb-sampleSignal-maximum"><p>{profit}%</p></div>
      </div>
      <div className="mb-sampleSignal-column">
        <span >Maximum Loss</span>
        <div className="mb-sampleSignal-maximum"><p>{loss}%</p></div>
      </div>
    </div>
  );
}