# usa-flag
Print the flag of the United States of America to the console using unicode box characters and ANSI-256 colors!

Minimum terminal width: 150 characters

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