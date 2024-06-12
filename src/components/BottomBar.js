import React, { useState } from 'react';
import BetSlip from './betSlip/BetSlip';
import useBetsContext from './hooks/useBetsContext';

export default function BottomBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { bets } = useBetsContext();

  const value = bets.sum || '0';
  let strValue = value.toString();
  if (value > 0) {
    strValue = `+${value}`;
  }

  const toggleBetSlip = () => {
    setIsOpen(!isOpen);
  };

  const closeBetSlip = () => {
    setIsOpen(false);
  };

  const handleBetSlipClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="bottom-bar" onClick={toggleBetSlip}>
      <div className="bottom-bar-content">
        <span className="bottom-bar-count">{bets.count || 0}</span>
        {bets.betBuilder && (
          <div>
            <span>CREA TU APUESTA</span>
          </div>
        )}
        <div>
          <span className="bottom-bar-value">{strValue}</span>
          <span className="bottom-bar-arrow">{'<'}</span>
        </div>
      </div>
      <div className={`window ${isOpen ? 'open' : ''}`} onClick={handleBetSlipClick}>
        <div className="window-header">
          <button className="close-button" onClick={closeBetSlip}>
            {'< Boleto'}
          </button>
        </div>
        <div className="window-content">
          <BetSlip />
        </div>
      </div>
    </div>
  );
}
