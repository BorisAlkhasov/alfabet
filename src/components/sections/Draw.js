import { useState } from 'react';
import { gameData } from '../../data';
import BetElement from './BetElement';
import useBetsContext from '../hooks/useBetsContext';

export default function Draw({ section }) {
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
    <>
      <BetElement
        direction="row"
        data={{ name: `${gameData.team1.name}/empate`, value: gameData.team1OrTie }}
        activeElement={element.name}
        toggleElement={toggleElement}
      />
      <BetElement
        direction="row"
        data={{ name: `${gameData.team1.name}/${gameData.team2.name}`, value: gameData.tie }}
        activeElement={element.name}
        toggleElement={toggleElement}
      />
      <BetElement
        direction="row"
        data={{ name: `${gameData.team2.name}/empate`, value: gameData.team2OrTie }}
        activeElement={element.name}
        toggleElement={toggleElement}
      />
    </>
  );
}
