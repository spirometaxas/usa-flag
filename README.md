# usa-flag
Print the flag of the United States of America to the console using unicode box characters and ANSI-256 colors!

![What usa-flag prints to the console](https://raw.githubusercontent.com/spirometaxas/usa-flag/main/img/usa-flag-1.png)

Minimum dimensions: 39 rows X 150 columns (ratio: 10:19)

## Usage
### Via `npx`:
```
$ npx usa-flag
$ npx usa-flag --border
```

### Via Global Install
```
$ npm install --global usa-flag
$ usa-flag
$ usa-flag --border
```

### Via Import
```
$ npm install usa-flag
```
then:
```
const usa = require('usa-flag');
console.log(usa.flag);
console.log(usa.flag_border);
```

## Options
#### Standard USA flag
```
$ usa-flag
```
![What usa-flag prints to the console](https://raw.githubusercontent.com/spirometaxas/usa-flag/main/img/usa-flag-1.png)

#### Add a Border
To add a border, add the `--border` flag:
```
$ usa-flag --border
```
![What usa-flag prints to the console](https://raw.githubusercontent.com/spirometaxas/usa-flag/main/img/usa-flag-2.png)

## Related
- [euro-flags](https://www.npmjs.com/package/euro-flags) - Print the flags of 28 European countries to the console!
- [greek-flag](https://www.npmjs.com/package/greek-flag) - Print the Greek flag to the console!