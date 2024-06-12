import Section from '../sections/Section';
import useBetsContext from '../hooks/useBetsContext';
import SingleSection from './SingleSection';
import BetBuilderSection from './BetBuilderSection';

export default function BetSlip() {
  const { bets, clearBets } = useBetsContext();

  function handleSendBet() {
    clearBets();
  }

  const value = bets.sum || '0';
  let strValue = value.toString();
  if (value > 0) {
    strValue = `+${value}`;
  }

  let isBetBuilder = bets.betBuilder;

  let picksToAdd = 0;
  let message = '';
  const count = bets.count || 0;
  if (isBetBuilder) {
    const minPicks = isBetBuilder ? 2 : 0;
    if (count < minPicks) {
      picksToAdd = minPicks - count;
      message = `Add ${picksToAdd} more pick${picksToAdd > 1 ? 's' : ''} to build a valid BET BUILDER`;
    }
  }

  return (
    <>
      {isBetBuilder && <BetBuilderSection bets={bets} count={count} strValue={strValue} />}
      <section className="betslip-single-section">
        <Section title="sencillas" />
        <SingleSection bets={bets} />
      </section>
      {picksToAdd && <p className="betslip-betbuilder-add">{message}</p>}
      {picksToAdd || (
        <div className="btn-send-container">
          <button className="btn-send" onClick={handleSendBet}>
            apostar
          </button>
        </div>
      )}
    </>
  );
}
