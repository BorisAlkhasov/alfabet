import BothScore from '../sections/BothScore';
import Draw from '../sections/Draw';
import MoneyLine from '../sections/MoneyLine';
import NoAction from '../sections/NoAction';
import Section from '../sections/Section';
import BottomBar from '../BottomBar';
import useBetsContext from '../hooks/useBetsContext';
import { useEffect } from 'react';

export default function PopularBets() {
  const { clearBets } = useBetsContext();

  useEffect(() => {
    clearBets();
  }, [clearBets]);

  return (
    <div>
      <Section title="ganador">
        <MoneyLine section="ganador" />
      </Section>

      <Section title="ambos equipos anotan">
        <BothScore section="ambos equipos anotan" />
      </Section>

      <Section title="doble oportunidad">
        <Draw section="doble oportunidad" />
      </Section>

      <Section title="empate no acción">
        <NoAction section="empate no acción" />
      </Section>

      <BottomBar />
    </div>
  );
}
