# wareki-utils

The wareki-utils allows for the conversion of Japanese era (和暦) to the Western calendar (西暦) and vice versa.
Simply import the package and use the provided functions to convert between the two calendars with ease.

## Install

```
$ npm install wareki-utils
```

## Usage

### Convert Japanese era to the Western calendar

```
import { warekiUtils } from 'wareki-utils';

warekiUtils('昭和62年4月30日'); // 1987-04-30
```

### Convert the Western calendar to Japanese era

```
import { warekiUtils } from 'wareki-utils';

warekiUtils(new Date('1987-04-30')); // 昭和62年4月30日
```

## Licence

MIT

## Author

[Kazuhiro Kobayashi](https://github.com/kzhrk)
