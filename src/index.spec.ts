import { warekiUtils } from './index';

// Japanese era name
// ref. https://en.wikipedia.org/wiki/Japanese_era_name#Modern_Japan

describe('warekiUtils', () => {
  describe('first argument is Date', () => {
    describe('Meiji era', () => {
      describe('the first argument is the first day of the Meiji era', () => {
        it('the first year of Meiji is to be returned', () => {
          expect(warekiUtils(new Date('1868-01-25'))).toEqual(
            '明治元年1月25日',
          );
        });
      });
      describe('the first argument is the second year of the Meiji era', () => {
        it('the second year of Meiji is to be returned', () => {
          expect(warekiUtils(new Date('1869-01-25'))).toEqual('明治2年1月25日');
        });
      });
      describe('the first argument is the last day of the Meiji era', () => {
        it('the last day of Meiji is to be returned', () => {
          expect(warekiUtils(new Date('1912-07-29'))).toEqual(
            '明治45年7月29日',
          );
        });
      });
    });
    describe('Taisho era', () => {
      describe('the first argument is the first day of the Taisho era', () => {
        it('the first year of Taisho is to be returned', () => {
          expect(warekiUtils(new Date('1912-07-30'))).toEqual(
            '大正元年7月30日',
          );
        });
      });
      describe('the first argument is the second year of the Taisho era', () => {
        it('the second year of Taisho is to be returned', () => {
          expect(warekiUtils(new Date('1913-07-30'))).toEqual('大正2年7月30日');
        });
      });
      describe('the first argument is the last day of the Taisho era', () => {
        it('the last day of Taisho is to be returned', () => {
          expect(warekiUtils(new Date('1926-12-24'))).toEqual(
            '大正15年12月24日',
          );
        });
      });
    });
    describe('Showa era', () => {
      describe('the first argument is the first day of the Showa era', () => {
        it('the first year of Showa is to be returned', () => {
          expect(warekiUtils(new Date('1926-12-25'))).toEqual(
            '昭和元年12月25日',
          );
        });
      });
      describe('the first argument is the second year of the Showa era', () => {
        it('the second year of Showa is to be returned', () => {
          expect(warekiUtils(new Date('1927-12-25'))).toEqual(
            '昭和2年12月25日',
          );
        });
      });
      describe('the first argument is the last day of the Showa era', () => {
        it('the last day of Showa is to be returned', () => {
          expect(warekiUtils(new Date('1989-01-07'))).toEqual('昭和64年1月7日');
        });
      });
    });
    describe('Heisei era', () => {
      describe('the first argument is the first day of the Heisei era', () => {
        it('the first year of Heisei is to be returned', () => {
          expect(warekiUtils(new Date('1989-01-08'))).toEqual('平成元年1月8日');
        });
      });
      describe('the first argument is the second year of the Heisei era', () => {
        it('the second year of Heisei is to be returned', () => {
          expect(warekiUtils(new Date('1990-01-08'))).toEqual('平成2年1月8日');
        });
      });
      describe('the first argument is the last day of the Heisei era', () => {
        it('the last day of Heisei is to be returned', () => {
          expect(warekiUtils(new Date('2019-04-30'))).toEqual(
            '平成31年4月30日',
          );
        });
      });
    });
    describe('Reiwa era', () => {
      describe('the first argument is the first day of the Reiwa era', () => {
        it('the first year of Reiwa is to be returned', () => {
          expect(warekiUtils(new Date('2019-05-01'))).toEqual('令和元年5月1日');
        });
      });
      describe('the first argument is the second year of the Reiwa era', () => {
        it('the second year of Reiwa is to be returned', () => {
          expect(warekiUtils(new Date('2020-05-01'))).toEqual('令和2年5月1日');
        });
      });
    });
    describe('Error', () => {
      describe('the first argument is the very past day', () => {
        it('the error is to be returned', () => {
          expect(warekiUtils(new Date('1000-04-30'))).toEqual({
            status: 422,
            message: 'invalid params',
          });
        });
      });
      describe('the first argument is the very feature day', () => {
        it('the error is to be returned', () => {
          expect(warekiUtils(new Date('2200-04-30'))).toEqual({
            status: 422,
            message: 'invalid params',
          });
        });
      });
    });
  });
  describe('first argument is string', () => {
    describe('Meiji era', () => {
      describe('the first argument is the first day of the Meiji era', () => {
        it('the first year of Meiji is to be returned', () => {
          expect(warekiUtils('明治元年1月25日')).toEqual('1868-01-25');
          expect(warekiUtils('明治1年1月25日')).toEqual('1868-01-25');
          expect(warekiUtils('明治01年01月25日')).toEqual('1868-01-25');
        });
      });
      describe('the first argument is the second year of the Meiji era', () => {
        it('the second year of Meiji is to be returned', () => {
          expect(warekiUtils('明治2年1月25日')).toEqual('1869-01-25');
          expect(warekiUtils('明治02年01月25日')).toEqual('1869-01-25');
        });
      });
      describe('the first argument is the last day of the Meiji era', () => {
        it('the last day of Meiji is to be returned', () => {
          expect(warekiUtils('明治45年7月29日')).toEqual('1912-07-29');
          expect(warekiUtils('明治45年07月29日')).toEqual('1912-07-29');
        });
      });
    });
    describe('Taisho era', () => {
      describe('the first argument is the first day of the Taisho era', () => {
        it('the first year of Taisho is to be returned', () => {
          expect(warekiUtils('大正元年7月30日')).toEqual('1912-07-30');
          expect(warekiUtils('大正1年7月30日')).toEqual('1912-07-30');
          expect(warekiUtils('大正01年07月30日')).toEqual('1912-07-30');
        });
      });
      describe('the first argument is the second year of the Taisho era', () => {
        it('the second year of Taisho is to be returned', () => {
          expect(warekiUtils('大正2年7月30日')).toEqual('1913-07-30');
          expect(warekiUtils('大正02年07月30日')).toEqual('1913-07-30');
        });
      });
      describe('the first argument is the last day of the Taisho era', () => {
        it('the last day of Taisho is to be returned', () => {
          expect(warekiUtils('大正15年12月24日')).toEqual('1926-12-24');
        });
      });
    });
    describe('Showa era', () => {
      describe('the first argument is the first day of the Showa era', () => {
        it('the first year of Showa is to be returned', () => {
          expect(warekiUtils('昭和元年12月25日')).toEqual('1926-12-25');
          expect(warekiUtils('昭和1年12月25日')).toEqual('1926-12-25');
          expect(warekiUtils('昭和01年12月25日')).toEqual('1926-12-25');
        });
      });
      describe('the first argument is the second year of the Showa era', () => {
        it('the second year of Showa is to be returned', () => {
          expect(warekiUtils('昭和2年12月25日')).toEqual('1927-12-25');
          expect(warekiUtils('昭和02年12月25日')).toEqual('1927-12-25');
        });
      });
      describe('the first argument is the last day of the Showa era', () => {
        it('the last day of Showa is to be returned', () => {
          expect(warekiUtils('昭和64年1月7日')).toEqual('1989-01-07');
          expect(warekiUtils('昭和64年01月07日')).toEqual('1989-01-07');
        });
      });
    });
    describe('Heisei era', () => {
      describe('the first argument is the first day of the Heisei era', () => {
        it('the first year of Heisei is to be returned', () => {
          expect(warekiUtils('平成元年1月8日')).toEqual('1989-01-08');
          expect(warekiUtils('平成1年1月8日')).toEqual('1989-01-08');
          expect(warekiUtils('平成01年01月08日')).toEqual('1989-01-08');
        });
      });
      describe('the first argument is the second year of the Heisei era', () => {
        it('the second year of Heisei is to be returned', () => {
          expect(warekiUtils('平成2年1月8日')).toEqual('1990-01-08');
          expect(warekiUtils('平成02年01月08日')).toEqual('1990-01-08');
        });
      });
      describe('the first argument is the last day of the Heisei era', () => {
        it('the last day of Heisei is to be returned', () => {
          expect(warekiUtils('平成31年4月30日')).toEqual('2019-04-30');
          expect(warekiUtils('平成31年04月30日')).toEqual('2019-04-30');
        });
      });
    });
    describe('Reiwa era', () => {
      describe('the first argument is the first day of the Reiwa era', () => {
        it('the first year of Reiwa is to be returned', () => {
          expect(warekiUtils('令和元年5月1日')).toEqual('2019-05-01');
          expect(warekiUtils('令和1年5月1日')).toEqual('2019-05-01');
          expect(warekiUtils('令和01年05月01日')).toEqual('2019-05-01');
        });
      });
      describe('the first argument is the second year of the Reiwa era', () => {
        it('the second year of Reiwa is to be returned', () => {
          expect(warekiUtils('令和2年5月1日')).toEqual('2020-05-01');
          expect(warekiUtils('令和02年05月01日')).toEqual('2020-05-01');
        });
      });
    });
    describe('Error', () => {
      describe('the first argument is the very past day', () => {
        it('the last day of the Heisei era is over', () => {
          expect(warekiUtils('平成31年5月1日')).toEqual({
            status: 422,
            message: 'invalid params',
          });
        });
      });
      describe('the first argument is before the first day of the Reiwa era', () => {
        it('the error is to be returned', () => {
          expect(warekiUtils('令和元年4月30日')).toEqual({
            status: 422,
            message: 'invalid params',
          });
        });
      });
    });
  });
});
