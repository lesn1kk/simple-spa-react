import Home from '../pages/Home';
import KopalniaZabytkowa from '../pages/KopalniaZabytkowa';
import MuzeumChleba from '../pages/MuzeumChleba';
import SztolniaCzarnegoPstraga from '../pages/SztolniaCzarnegoPstraga';

const pagesData = [
  {
    name: 'Strona glowna',
    path: '/',
    component: Home
  },
  {
    name: 'Sztolnia czarnego pstraga',
    path: '/SztolniaCzarnegoPstraga',
    component: SztolniaCzarnegoPstraga
  },
  {
    name: 'Kopalnia zabytkowa',
    path: '/KopalniaZabytkowa',
    component: KopalniaZabytkowa
  },
  {
    name: 'Muzeum chleba',
    path: '/MuzeumChleba',
    component: MuzeumChleba
  },
];

export default pagesData;
