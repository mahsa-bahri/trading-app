
import React from "react";
export function MobileBackTestInfo() {
  return (
    <>
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
    </>
  );
}