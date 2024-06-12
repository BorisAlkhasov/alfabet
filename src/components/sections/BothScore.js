import { useState } from 'react';
import BetElement from './BetElement';
import { gameData } from '../../data';
import useBetsContext from '../hooks/useBetsContext';

export default function BothScore({ section }) {
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
        data={{ name: 'SI', value: gameData.bothScore[0] }}
        activeElement={element.name}
        toggleElement={toggleElement}
      />
      <BetElement
        direction="row"
        data={{ name: 'NO', value: gameData.bothScore[1] }}
        activeElement={element.name}
        toggleElement={toggleElement}
      />
    </>
  );
}
