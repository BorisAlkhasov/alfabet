import BetFooter from './BetFooter';
import betInputImage from '../../assets/betInput.png';
import Section from '../sections/Section';
import { gameData } from '../../data';

export default function BetBuilderSection({ bets, count, strValue }) {
  if (!bets.sections) {
    return;
  }
  let betsSections = [];

  for (const [key, value] of Object.entries(bets.sections)) {
    let name = value.name;
    if (!isNaN(name)) {
      name = name === '1' ? gameData.team1.name : gameData.team2.name;
    }
    betsSections.push(
      <div key={key} className="betslip-bb-sections">
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 18.5C14.9706 18.5 19 14.4706 19 9.5C19 4.52944 14.9706 0.5 10 0.5C5.02944 0.5 1 4.52944 1 9.5C1 14.4706 5.02944 18.5 10 18.5Z"
            fill="white"
            stroke="#A60000"
          />
          <path d="M5 9.5H15" stroke="#A60000" />
        </svg>
        <span className="betslip-bb-team-name">{name}</span>
        <p className="betslip-bb-section-name">{key}</p>
      </div>
    );
  }
  return (
    <section>
      <Section title="crea tu apuesta" />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <svg width="50" height="29" viewBox="0 0 50 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_5_2286)">
            <path
              d="M12 3.01001H42C42.5299 3.01159 43.0377 3.22281 43.4125 3.59754C43.7872 3.97227 43.9984 4.48006 44 5.01001L40.5 18.01C40.2 19.11 39.6 20.01 38.5 20.01H8.5C7.97005 20.0084 7.46227 19.7972 7.08753 19.4225C6.7128 19.0477 6.50158 18.54 6.5 18.01L10 5.01001C10.3 3.91001 10.9 3.01001 12 3.01001Z"
              fill="#A60000"
            />
          </g>
          <path
            d="M12.2 12.21C12.2336 10.7711 12.8269 9.40197 13.8539 8.39361C14.881 7.38525 16.2607 6.81713 17.7 6.80997C18.417 6.7633 19.1329 6.91613 19.7684 7.2515C20.4038 7.58688 20.934 8.09169 21.3 8.70997L19.6 9.90997C19.3886 9.51865 19.0683 9.19702 18.6778 8.98404C18.2873 8.77105 17.8435 8.67586 17.4 8.70997C16.5183 8.76826 15.6931 9.1649 15.0968 9.81708C14.5006 10.4693 14.1793 11.3265 14.2 12.21C14.1857 12.5027 14.2328 12.7951 14.3383 13.0685C14.4438 13.3419 14.6054 13.5902 14.8126 13.7974C15.0198 14.0046 15.2681 14.1662 15.5415 14.2717C15.8149 14.3772 16.1073 14.4243 16.4 14.41C17.1887 14.3865 17.9391 14.0649 18.5 13.51L19.8 14.91C18.8959 15.8071 17.6737 16.3104 16.4 16.31C15.8525 16.3262 15.3073 16.232 14.797 16.033C14.2866 15.834 13.8216 15.5342 13.4296 15.1516C13.0376 14.769 12.7268 14.3113 12.5155 13.8059C12.3043 13.3005 12.197 12.7577 12.2 12.21Z"
            fill="white"
          />
          <path d="M24.8 8.71003H22L22.5 6.91003H30L29.5 8.71003H26.7L24.8 16.01H22.8L24.8 8.71003Z" fill="white" />
          <path
            d="M33.4 6.81006H35.3L36.7 16.0101H34.6L34.3 14.0101H30.5L29.1 16.0101H26.9L33.4 6.81006ZM34.2 12.2101L33.8 9.21006L31.8 12.2101H34.2Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_5_2286"
              x="0.5"
              y="0.0100098"
              width="49.5"
              height="29"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="3" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_2286" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_2286" result="shape" />
            </filter>
          </defs>
        </svg>
        <p className="betslip-desc">{count} SELECCIONES</p>
      </div>
      <div className="betslip-betbuilder-title">
        <p>
          <span className="betslip-betbuilder-title-span">{gameData.team1.name}</span> vs{' '}
          <span className="betslip-betbuilder-title-span">{gameData.team2.name}</span>
        </p>
        <p>{strValue}</p>
      </div>
      {betsSections}
      <img src={betInputImage} alt="input" className="bi-image" />
      <BetFooter value="Ganancia: $ 1,565.45" />
    </section>
  );
}
