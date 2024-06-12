import useBetsContext from './hooks/useBetsContext';

export default function BetBuilder() {
  const { setBetBuilder, bets } = useBetsContext();

  function handleChange(event) {
    setBetBuilder(event.target.checked);
  }

  return (
    <div className="bet-builder">
      <div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="bet-builder-plus"
        >
          <path
            d="M5.853 0.764893L4.8 4.72289H0.814L0 7.76389H3.984L2.926 11.7239H6.051L7.108 7.76389H11.089L11.9 4.72289H7.921L8.977 0.764893H5.853Z"
            fill="#A60000"
          />
        </svg>
        <label className="bet-builder-title">CREA TU APUESTA</label>
      </div>
      <input
        type="checkbox"
        style={{ marginRight: '15px' }}
        onChange={handleChange}
        checked={bets.betBuilder ? true : false}
      ></input>
    </div>
  );
}
