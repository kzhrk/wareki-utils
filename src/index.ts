import { ERROR, WAREKI } from '@/constants';
import {
  convertJapaneseEraToWesternCalendar,
  convertOneToGen,
} from '@/converter';
import {
  checkHeisei,
  checkMeiji,
  checkReiwa,
  checkShowa,
  checkTaisho,
} from '@/validation';

export type WarekiError = {
  status: number;
  message: string;
};

function convertJapaneseEraToISO8601(wareki: string): string | WarekiError {
  const regexpWareki = /^(.+)年(.+)月(.+)日$/;
  const matchesWareki = wareki.match(regexpWareki);

  if (matchesWareki.length === 4) {
    const [, japaneseEra, month, day] = matchesWareki;
    const regexpJapaneseEra = new RegExp('(明治|大正|昭和|平成|令和)(.+)');
    const [, era, yearStr] = japaneseEra.match(regexpJapaneseEra);

    if (era && yearStr) {
      const year = convertJapaneseEraToWesternCalendar(japaneseEra);

      if (year) {
        const dateISO8601 = `${year}-${month.padStart(2, '0')}-${day.padStart(
          2,
          '0',
        )}`;

        const isMeiji =
          era === WAREKI.meiji.jp && checkMeiji(new Date(dateISO8601));
        const isTaisho =
          era === WAREKI.taisho.jp && checkTaisho(new Date(dateISO8601));
        const isShowa =
          era === WAREKI.showa.jp && checkShowa(new Date(dateISO8601));
        const isHeisei =
          era === WAREKI.heisei.jp && checkHeisei(new Date(dateISO8601));
        const isReiwa =
          era === WAREKI.reiwa.jp && checkReiwa(new Date(dateISO8601));

        if (isMeiji || isTaisho || isShowa || isHeisei || isReiwa) {
          return dateISO8601;
        }
      }
    }
  }

  return ERROR.invalidParams;
}

function convertWesternCalendarToJapaneseEra(date: Date): string | WarekiError {
  let year: string;

  if (checkMeiji(date)) {
    year = `${WAREKI.meiji.jp}${convertOneToGen(
      date.getFullYear() - WAREKI.meiji.firstDate.getFullYear() + 1,
    )}`;
  } else if (checkTaisho(date)) {
    year = `${WAREKI.taisho.jp}${convertOneToGen(
      date.getFullYear() - WAREKI.taisho.firstDate.getFullYear() + 1,
    )}`;
  } else if (checkShowa(date)) {
    year = `${WAREKI.showa.jp}${convertOneToGen(
      date.getFullYear() - WAREKI.showa.firstDate.getFullYear() + 1,
    )}`;
  } else if (checkHeisei(date)) {
    year = `${WAREKI.heisei.jp}${convertOneToGen(
      date.getFullYear() - WAREKI.heisei.firstDate.getFullYear() + 1,
    )}`;
  } else if (checkReiwa(date)) {
    year = `${WAREKI.reiwa.jp}${convertOneToGen(
      date.getFullYear() - WAREKI.reiwa.firstDate.getFullYear() + 1,
    )}`;
  }

  if (year) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  } else {
    return ERROR.invalidParams;
  }
}

export function warekiUtils(target: Date | string) {
  return typeof target === 'string'
    ? convertJapaneseEraToISO8601(target)
    : convertWesternCalendarToJapaneseEra(target);
}
