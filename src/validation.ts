import { WAREKI, MILLISECONDS_PER_DAY } from './constants';

function dateBetween(date: Date, min: Date, max: Date) {
  return date >= min && date <= max;
}

export function checkMeiji(date: Date) {
  return dateBetween(
    date,
    WAREKI.meiji.firstDate,
    new Date(WAREKI.taisho.firstDate.getTime() - MILLISECONDS_PER_DAY),
  );
}

export function checkTaisho(date: Date) {
  return dateBetween(
    date,
    WAREKI.taisho.firstDate,
    new Date(WAREKI.showa.firstDate.getTime() - MILLISECONDS_PER_DAY),
  );
}

export function checkShowa(date: Date) {
  return dateBetween(
    date,
    WAREKI.showa.firstDate,
    new Date(WAREKI.heisei.firstDate.getTime() - MILLISECONDS_PER_DAY),
  );
}

export function checkHeisei(date: Date) {
  return dateBetween(
    date,
    WAREKI.heisei.firstDate,
    new Date(WAREKI.reiwa.firstDate.getTime() - MILLISECONDS_PER_DAY),
  );
}

export function checkReiwa(date: Date) {
  return dateBetween(
    date,
    new Date(WAREKI.reiwa.firstDate),
    new Date('2100-01-01'),
  );
}
