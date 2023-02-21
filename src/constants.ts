import { WarekiError } from './index';

type Wareki = 'meiji' | 'taisho' | 'showa' | 'heisei' | 'reiwa';
type WarekiJp = '明治' | '大正' | '昭和' | '平成' | '令和';
type WarekiObject = {
  firstDate: Date;
  firstYear: number;
  jp: WarekiJp;
};

export const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

export const WAREKI: Readonly<Record<Wareki, WarekiObject>> = {
  meiji: {
    firstDate: new Date('1868-01-25'),
    firstYear: 1868,
    jp: '明治',
  },
  taisho: {
    firstDate: new Date('1912-07-30'),
    firstYear: 1912,
    jp: '大正',
  },
  showa: {
    firstDate: new Date('1926-12-25'),
    firstYear: 1926,
    jp: '昭和',
  },
  heisei: {
    firstDate: new Date('1989-01-08'),
    firstYear: 1989,
    jp: '平成',
  },
  reiwa: {
    firstDate: new Date('2019-05-01'),
    firstYear: 2019,
    jp: '令和',
  },
};

export const ERROR: Readonly<Record<string, WarekiError>> = {
  invalidParams: {
    status: 422,
    message: 'invalid params',
  },
};
