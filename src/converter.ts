import { WAREKI } from './constants';

export function convertOneToGen(year: number) {
  return year === 1 ? '元' : year;
}

export function convertGenToOne(year: string | '元'): number {
  return year === '元' ? 1 : parseInt(year, 10);
}

export function convertJapaneseEraToWesternCalendar(
  japaneseEra: string,
): number | null {
  const regexAllJapaneseEra = Object.keys(WAREKI)
    .map((key) => WAREKI[key].jp)
    .join('|');
  const regexJapaneseEra = new RegExp(`(${regexAllJapaneseEra})(.+)`);
  const matchesJapanaseEra = japaneseEra.match(regexJapaneseEra);

  if (matchesJapanaseEra.length === 3) {
    const [, era, yearStr] = matchesJapanaseEra;
    const year = convertGenToOne(yearStr);

    if (era === WAREKI.meiji.jp) {
      return year + WAREKI.meiji.firstYear - 1;
    } else if (era === WAREKI.taisho.jp) {
      return year + WAREKI.taisho.firstYear - 1;
    } else if (era === WAREKI.showa.jp) {
      return year + WAREKI.showa.firstYear - 1;
    } else if (era === WAREKI.heisei.jp) {
      return year + WAREKI.heisei.firstYear - 1;
    } else if (era === WAREKI.reiwa.jp) {
      return year + WAREKI.reiwa.firstYear - 1;
    }
  }

  return null;
}
