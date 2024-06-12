import { useState } from 'react';
import { gameData } from '../../data';
import BetElement from './BetElement';
import useBetsContext from '../hooks/useBetsContext';

export default function NoAction({ section }) {
  const [element, setElement] = useState({});
  const { handleBet } = useBetsContext();

  function toggleElement(data) {
    setElement(data);
    handleBet({
      section: section,
      name: data.name,
      value: data.value,
    });
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <BetElement
        direction="column"
        data={{ name: '1', value: gameData.team1.noAction }}
        activeElement={element.name}
        toggleElement={toggleElement}
      />
      <BetElement
        direction="column"
        data={{ name: '2', value: gameData.team2.noAction }}
        activeElement={element.name}
        toggleElement={toggleElement}
      />
    </div>
  );
}
