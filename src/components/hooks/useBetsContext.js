import { useContext } from 'react';
import BetsContext from '../context/BetsContext';

export default function useBetsContext() {
  return useContext(BetsContext);
}
