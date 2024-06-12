import React, { useState } from 'react';
import { betTypes } from '../data';
import PopularBets from './betTabs/PopularBets';
import MatchBets from './betTabs/MatchBets';
import TeamBets from './betTabs/TeamBets';
import GoalsBets from './betTabs/GoalsBets';
import PlayerBets from './betTabs/PlayerBets';
import BetBuilder from './BetBuilder';
import { BetsProvider } from './context/BetsContext';

export default function BettingApp() {
  const [activeTab, setActiveTab] = useState(betTypes.popular);

  return (
    <BetsProvider>
      <div className="betting-app">
        <BetBuilder />
        <Tab activeTab={activeTab} onTabChange={setActiveTab} />

        <div>
          {activeTab === betTypes.popular && <PopularBets />}
          {activeTab === betTypes.match && <MatchBets />}
          {activeTab === betTypes.team && <TeamBets />}
          {activeTab === betTypes.goals && <GoalsBets />}
          {activeTab === betTypes.player && <PlayerBets />}
        </div>
      </div>
    </BetsProvider>
  );
}

function Tab({ activeTab, onTabChange }) {
  return (
    <div className="tabs-container">
      <button
        className={`tab-button ${activeTab === betTypes.popular ? 'active' : ''}`}
        onClick={() => onTabChange(betTypes.popular)}
      >
        {betTypes.popular}
      </button>
      <button
        className={`tab-button ${activeTab === betTypes.match ? 'active' : ''}`}
        onClick={() => onTabChange(betTypes.match)}
      >
        {betTypes.match}
      </button>
      <button
        className={`tab-button ${activeTab === betTypes.team ? 'active' : ''}`}
        onClick={() => onTabChange(betTypes.team)}
      >
        {betTypes.team}
      </button>
      <button
        className={`tab-button ${activeTab === betTypes.goals ? 'active' : ''}`}
        onClick={() => onTabChange(betTypes.goals)}
      >
        {betTypes.goals}
      </button>
      <button
        className={`tab-button ${activeTab === betTypes.player ? 'active' : ''}`}
        onClick={() => onTabChange(betTypes.player)}
      >
        {betTypes.player}
      </button>
    </div>
  );
}
