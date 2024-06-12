import BetFooter from './BetFooter';
import betInputImage from '../../assets/betInput.png';
import { gameData } from '../../data';

export default function SingleSection({ bets }) {
  if (!bets.sections) {
    return;
  }
  let singleSections = [];

  for (const [key, value] of Object.entries(bets.sections)) {
    let name = value.name;
    if (!isNaN(name)) {
      name = name === '1' ? gameData.team1.name : gameData.team2.name;
    }

    singleSections.push(
      <div key={key} className="betslip-single-sections">
        <p className="betslip-single-text-p">
          <span className="betslip-single-text">
            {name} - {key}
          </span>
          <span className="betslip-single-text">{gameData.team1.name} </span>
          <span className="betslip-single-text">vs </span>
          <span className="betslip-single-text">{gameData.team2.name}</span>
        </p>
        <img src={betInputImage} alt="input" className="bi-image" />
        <p className="betslip-sigle-value">{value.value > 0 ? `+${value.value}` : value.value}</p>
        <BetFooter value="Una apuesta sencilla de $ 400 te paga $ 660.00" />
      </div>
    );
  }

  return singleSections;
}
