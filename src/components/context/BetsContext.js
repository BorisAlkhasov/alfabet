import { createContext, useCallback, useState } from 'react';

const BetsContext = createContext();

function BetsProvider({ children }) {
  const [bets, setBets] = useState({});

  function handleBet(bet) {
    if (!bets.sections || !bets.sections[bet.section] || bets.sections[bet.section].name !== bet.name) {
      setBets((prevState) => {
        const sum = prevState.sum || 0;
        const count = prevState.count || 0;

        const newSum = prevState[bet.section] ? sum - prevState[bet.section].value + bet.value : sum + bet.value;
        const newCount = prevState[bet.section] ? count : count + 1;

        return {
          ...prevState,
          sections: {
            ...prevState.sections,
            [bet.section]: { name: bet.name, value: bet.value },
          },
          sum: newSum,
          count: newCount,
        };
      });
    } else {
      setBets((prevState) => {
        const {
          sections: { [bet.section]: _, ...updatedSections },
          ...updatedState
        } = prevState;

        return {
          ...updatedState,
          sections: updatedSections,
          sum: prevState.sum - prevState.sections[bet.section].value,
          count: prevState.count - 1,
        };
      });
    }
  }

  const setBetBuilder = useCallback((value) => {
    setBets((prevState) => {
      return {
        ...prevState,
        betBuilder: value,
      };
    });
  }, []);

  const clearBets = useCallback(() => {
    setBets({});
  }, []);

  const value = {
    bets,
    handleBet,
    setBetBuilder,
    clearBets,
  };

  return <BetsContext.Provider value={value}>{children}</BetsContext.Provider>;
}

export { BetsProvider };
export default BetsContext;
