const BLUE_WHITE = '\u001b[38;5;231m\u001b[48;5;18m';
const RED = '\u001b[38;5;160m\u001b[48;5;160m';
const WHITE = '\u001b[38;5;231m\u001b[48;5;231m';
const OFF = '\u001b[0m';

const EMPTY_ROW = '                                                            ';
const STARS_6_ROW = '     *         *         *         *         *         *    ';
const STARS_5_ROW = '          *         *         *         *         *         ';
const BUFFER = '  ';
const BORDER_L = ' │';
const BORDER_R = '│';
const BORDER_A = '─';
const BORDER_TL = '┌';
const BORDER_TR = '┐';
const BORDER_BL = '└';
const BORDER_BR = '┘';

const drawRow = function(num, color) {
    let row = '';
    for (let i = 0; i < num; i++) {
      row += '█';
    }
    return color + row + OFF;
}

const drawSection = function(data, color) {
    return color + data + OFF;
}

const getBorder = function(top, num) {
    let border = '';
    for (let i = 0; i < num; i++) {
      border += BORDER_A;
    }
    if (top) {
        return ' ' + BORDER_TL + border + BORDER_TR;
    } else {
        return ' ' + BORDER_BL + border + BORDER_BR;
    }
}

const USA_FLAG = '\n' +
  BUFFER + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, RED) + '\n' +
  BUFFER + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, RED) + '\n' +
  BUFFER + drawSection(STARS_6_ROW, BLUE_WHITE) + drawRow(88, RED) + '\n' +
  BUFFER + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, WHITE) + '\n' +
  BUFFER + drawSection(STARS_5_ROW, BLUE_WHITE) + drawRow(88, WHITE) + '\n' +
  BUFFER + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, WHITE) + '\n' +
  BUFFER + drawSection(STARS_6_ROW, BLUE_WHITE) + drawRow(88, RED) + '\n' +
  BUFFER + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, RED) + '\n' +
  BUFFER + drawSection(STARS_5_ROW, BLUE_WHITE) + drawRow(88, RED) + '\n' +
  BUFFER + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, WHITE) + '\n' +
  BUFFER + drawSection(STARS_6_ROW, BLUE_WHITE) + drawRow(88, WHITE) + '\n' +
  BUFFER + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, WHITE) + '\n' +
  BUFFER + drawSection(STARS_5_ROW, BLUE_WHITE) + drawRow(88, RED) + '\n' +
  BUFFER + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, RED) + '\n' +
  BUFFER + drawSection(STARS_6_ROW, BLUE_WHITE) + drawRow(88, RED) + '\n' +
  BUFFER + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, WHITE) + '\n' +
  BUFFER + drawSection(STARS_5_ROW, BLUE_WHITE) + drawRow(88, WHITE) + '\n' +
  BUFFER + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, WHITE) + '\n' +
  BUFFER + drawSection(STARS_6_ROW, BLUE_WHITE) + drawRow(88, RED) + '\n' +
  BUFFER + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, RED) + '\n' +
  BUFFER + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, RED) + '\n' +
  BUFFER + drawRow(148, WHITE) + '\n' +
  BUFFER + drawRow(148, WHITE) + '\n' +
  BUFFER + drawRow(148, WHITE) + '\n' +
  BUFFER + drawRow(148, RED) + '\n' +
  BUFFER + drawRow(148, RED) + '\n' +
  BUFFER + drawRow(148, RED) + '\n' +
  BUFFER + drawRow(148, WHITE) + '\n' +
  BUFFER + drawRow(148, WHITE) + '\n' +
  BUFFER + drawRow(148, WHITE) + '\n' +
  BUFFER + drawRow(148, RED) + '\n' +
  BUFFER + drawRow(148, RED) + '\n' +
  BUFFER + drawRow(148, RED) + '\n'+
  BUFFER + drawRow(148, WHITE) + '\n' +
  BUFFER + drawRow(148, WHITE) + '\n' +
  BUFFER + drawRow(148, WHITE) + '\n' +
  BUFFER + drawRow(148, RED) + '\n' +
  BUFFER + drawRow(148, RED) + '\n' +
  BUFFER + drawRow(148, RED) + '\n';

const USA_FLAG_BORDER = '\n' +
  getBorder(true, 148) + '\n' +
  BORDER_L + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, RED) + BORDER_R + '\n' +
  BORDER_L + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, RED) + BORDER_R + '\n' +
  BORDER_L + drawSection(STARS_6_ROW, BLUE_WHITE) + drawRow(88, RED) + BORDER_R + '\n' +
  BORDER_L + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawSection(STARS_5_ROW, BLUE_WHITE) + drawRow(88, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawSection(STARS_6_ROW, BLUE_WHITE) + drawRow(88, RED) + BORDER_R + '\n' +
  BORDER_L + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, RED) + BORDER_R + '\n' +
  BORDER_L + drawSection(STARS_5_ROW, BLUE_WHITE) + drawRow(88, RED) + BORDER_R + '\n' +
  BORDER_L + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawSection(STARS_6_ROW, BLUE_WHITE) + drawRow(88, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawSection(STARS_5_ROW, BLUE_WHITE) + drawRow(88, RED) + BORDER_R + '\n' +
  BORDER_L + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, RED) + BORDER_R + '\n' +
  BORDER_L + drawSection(STARS_6_ROW, BLUE_WHITE) + drawRow(88, RED) + BORDER_R + '\n' +
  BORDER_L + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawSection(STARS_5_ROW, BLUE_WHITE) + drawRow(88, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawSection(STARS_6_ROW, BLUE_WHITE) + drawRow(88, RED) + BORDER_R + '\n' +
  BORDER_L + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, RED) + BORDER_R + '\n' +
  BORDER_L + drawSection(EMPTY_ROW, BLUE_WHITE) + drawRow(88, RED) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, RED) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, RED) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, RED) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, RED) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, RED) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, RED) + BORDER_R + '\n'+
  BORDER_L + drawRow(148, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, WHITE) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, RED) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, RED) + BORDER_R + '\n' +
  BORDER_L + drawRow(148, RED) + BORDER_R + '\n' +
  getBorder(false, 148) + '\n';

module.exports = {
    flag: USA_FLAG,
    flag_border: USA_FLAG_BORDER,
};